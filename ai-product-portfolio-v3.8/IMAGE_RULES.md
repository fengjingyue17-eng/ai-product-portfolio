# Portfolio Image Rules

网页中不直接使用生产原图作为普通页面图片。每张项目图片分成两个版本：

- `*-display.webp`：页面预览。普通截图建议 1200–1600 px 宽；宽幅像素地图建议 3000–4000 px 宽。
- `*-full.webp`：点击放大时使用。普通截图可保留 2000–2600 px；宽幅地图建议 5000–9000 px 宽。

## 显示规则

1. 页面卡片和 Case Study 默认只显示图片的一部分，使用固定高度 + `object-fit: cover`。
2. 用户点击图片后打开 Lightbox，以 `object-fit: contain` 查看完整 Web 版图片。
3. 像素地图缩放使用 nearest-neighbour，避免浏览器插值造成模糊。
4. UI / 截图类图片缩放使用高质量 Lanczos。
5. WebP 质量一般保持 86–92，尽量让单张展示图低于 1–2 MB。

## 超大图规则

不把 60K–100K 宽的 PNG 直接放到网页。它们可能达到数百 MB，并在浏览器解码时消耗数 GB 内存。

对于这种图片：

- 原始生产文件单独留档；
- 从 Photoshop / 图片工具额外导出 5000–9000 px 宽的展示代理图；
- 网页只引用代理图；
- Lightbox 的 “full” 指网页高清版本，不等同于生产原文件。

当前徐汇 `after` 原始图约 68K px 宽，因此 V3.2 暂时使用已有预览制作 Web Proxy。最终投递前，最好从 Photoshop 直接导出一张 5000–9000 px 宽的高质量 WebP/JPEG 替换它。


## V3.3 Preview Rule

For ultra-wide maps, do **not** squeeze the full image into the card.

- Card / case-study preview: use the original image as a cropped viewport with `object-fit: cover`.
- Click preview: open the complete image in a lightbox with `object-fit: contain`.
- Pixel-art previews use `image-rendering: pixelated`.
- The website stores a lightweight web copy; production masters stay outside the website.
