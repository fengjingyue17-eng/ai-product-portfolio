#!/usr/bin/env python3
"""Prepare portfolio display/full images.

Examples:
    python prepare_web_images.py screenshot.png --kind screenshot
    python prepare_web_images.py pixel_map.png --kind pixel --display-width 3600 --full-width 8000

For extremely large source files (>120M pixels), export a web proxy from Photoshop first.
"""
from pathlib import Path
import argparse
from PIL import Image

Image.MAX_IMAGE_PIXELS = None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('source', type=Path)
    ap.add_argument('--kind', choices=['screenshot','pixel'], default='screenshot')
    ap.add_argument('--display-width', type=int, default=None)
    ap.add_argument('--full-width', type=int, default=None)
    ap.add_argument('--quality', type=int, default=90)
    ap.add_argument('--output-dir', type=Path, default=None)
    args = ap.parse_args()

    src = args.source
    out = args.output_dir or src.parent / 'web'
    out.mkdir(parents=True, exist_ok=True)

    with Image.open(src) as probe:
        width, height = probe.size
    pixels = width * height
    if pixels > 120_000_000:
        raise SystemExit(
            f'Source is {width}x{height} ({pixels/1e6:.1f} MP). '
            'Export a 5000–9000 px web proxy first to avoid excessive memory use.'
        )

    if args.kind == 'pixel':
        display_w = args.display_width or 3600
        full_w = args.full_width or 8000
        resample = Image.Resampling.NEAREST
    else:
        display_w = args.display_width or 1500
        full_w = args.full_width or 2600
        resample = Image.Resampling.LANCZOS

    def export(max_width, suffix, quality):
        with Image.open(src) as im:
            im = im.convert('RGB')
            if im.width > max_width:
                h = round(im.height * max_width / im.width)
                im = im.resize((max_width, h), resample)
            target = out / f'{src.stem}-{suffix}.webp'
            im.save(target, 'WEBP', quality=quality, method=6)
            print(target)

    export(display_w, 'display', min(args.quality, 90))
    export(full_w, 'full', min(args.quality + 2, 94))


if __name__ == '__main__':
    main()
