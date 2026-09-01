import processing.sound.*;
ArrayList<TrailCat> trails = new ArrayList<TrailCat>();
ArrayList<Particle> particles = new ArrayList<Particle>();
ArrayList<YarnEvent> yarnEvents = new ArrayList<YarnEvent>();
PGraphics yarnLayer;

// 用来记录上一段毛线从哪里连过来
YarnEvent lastYarnPointForLayer = null;

// 用来让毛线弧度继续有变化
int yarnSegmentIndex = 0;

float catX, catY;
float prevCatX, prevCatY;

// 按你要求固定
float easing = 0.10;

float catSize = 120;

int lastTrailTime = 0;
int trailInterval = 80;
int trailDuration = 2500;

float lastTrailX, lastTrailY;
float lastYarnX, lastYarnY;
float lastStampX, lastStampY;

boolean wasMousePressed = false;

// 毛线球滚动角度
float yarnSpin = 0;

// 点击弹跳
int bounceStartTime = -9999;
int bounceDuration = 280;
// 松开鼠标时的后坐力
int recoilStartTime = -9999;
int recoilDuration = 360;
float recoilPower = 0;

// 长按记录
int pressStartTime = -1;

// 毛线团留痕间隔（会根据毛线团大小动态调整）
float baseStampSpacing = 24;

void setup() {
  size(900, 650);
  smooth(8);

  catX = width / 2;
  catY = height / 2;

  prevCatX = catX;
  prevCatY = catY;

  lastTrailX = catX;
  lastTrailY = catY;

  lastYarnX = catX;
  lastYarnY = catY;

  lastStampX = catX;
  lastStampY = catY;

  yarnLayer = createGraphics(width, height);
  yarnLayer.beginDraw();
  yarnLayer.clear();
  yarnLayer.endDraw();
}

void draw() {
  background(245, 245, 250);

  prevCatX = catX;
  prevCatY = catY;

  // 小猫平滑跟随鼠标
  catX += (mouseX - catX) * easing;
  catY += (mouseY - catY) * easing;

  float vx = catX - prevCatX;
  float vy = catY - prevCatY;
  float speed = dist(catX, catY, prevCatX, prevCatY);

  color catColor = getCatColor();
  color yarnColor = getYarnColor();

  boolean isHover = dist(mouseX, mouseY, catX, catY) < catSize * 0.55;

  int faceState = 0;   // 0普通 1悬停 2按下
  if (mousePressed) {
    faceState = 2;
  } else if (isHover) {
    faceState = 1;
  }

  // 鼠标状态切换
  if (mousePressed && !wasMousePressed) {
    pressStartTime = millis();
    bounceStartTime = millis();
  }

  // 松开时，根据长按时间生成大特效
  if (!mousePressed && wasMousePressed) {
    int holdMillis = 0;
    if (pressStartTime >= 0) {
      holdMillis = millis() - pressStartTime;
    }

    float releaseRatio = constrain(holdMillis / 10000.0, 0, 1);

    burstParticles(catX, catY, catColor, holdMillis);

    // 后坐力：长按越久，松开时小猫震得越明显
    recoilStartTime = millis();
    recoilPower = lerp(8, 34, releaseRatio);

    pressStartTime = -1;
  }

  wasMousePressed = mousePressed;

  // 当前长按时长
  int holdMillisNow = 0;
  if (mousePressed && pressStartTime >= 0) {
    holdMillisNow = millis() - pressStartTime;
  }

  // 0~1，30秒封顶
  float holdRatio = constrain(holdMillisNow / 10000.0, 0, 1);

  // 小猫整体弹性晃动角度
  float wobble = constrain(vx * 0.03, -0.18, 0.18);

  // 手里毛线团大小：按住越久越大，但上限只到比猫大一圈左右
  float heldYarnDiameter = lerp(catSize * 0.23, catSize * 1.15, holdRatio);

  // 当前手里毛线团位置
  PVector yarnPos = getYarnBallPosition(catX, catY, catSize, wobble);

  // 毛线球滚动
  float moveAmount = dist(yarnPos.x, yarnPos.y, lastYarnX, lastYarnY);
  if (moveAmount > 0.01) {
    float dir = (vx >= 0) ? 1 : -1;
    yarnSpin += moveAmount * 0.08 * dir;
  }

  // 永久记录彩色毛线轨迹（按你要求的阈值）
  if (lastYarnPointForLayer == null || dist(yarnPos.x, yarnPos.y, lastYarnX, lastYarnY) > 1) {
    YarnEvent newPoint = new YarnEvent(0, yarnPos.x, yarnPos.y, yarnColor, yarnSpin, 0);

    if (lastYarnPointForLayer != null) {
      drawYarnSegmentToLayer(lastYarnPointForLayer, newPoint, yarnSegmentIndex);
      yarnSegmentIndex++;
    }

    lastYarnPointForLayer = newPoint;

    lastYarnX = yarnPos.x;
    lastYarnY = yarnPos.y;
  }

  // 只有按住鼠标时，才留下毛线团
  if (mousePressed) {
    float stampSize = heldYarnDiameter;
    float stampSpacing = max(baseStampSpacing, stampSize * 0.42);

    if (dist(yarnPos.x, yarnPos.y, lastStampX, lastStampY) > stampSpacing) {
      drawYarnBallToLayer(yarnPos.x, yarnPos.y, stampSize, yarnColor, yarnSpin);

      lastStampX = yarnPos.x;
      lastStampY = yarnPos.y;
    }
  }

  // 点击弹跳
  float bounceOffset = 0;
  float bounceScaleX = 1;
  float bounceScaleY = 1;

  float bt = (millis() - bounceStartTime) / float(bounceDuration);
  if (bt >= 0 && bt <= 1) {
    float p = sin(bt * PI);
    bounceOffset = -14 * p;
    bounceScaleX = 1.0 - 0.05 * p;
    bounceScaleY = 1.0 + 0.08 * p;
  }

  // 松开后的后坐力
  float recoilX = 0;
  float recoilY = 0;
  float recoilRot = 0;

  float rt = (millis() - recoilStartTime) / float(recoilDuration);
  if (rt >= 0 && rt <= 1) {
    float p = sin(rt * PI) * (1.0 - rt);
    recoilX = -recoilPower * p;
    recoilY = recoilPower * 0.25 * p;
    recoilRot = -0.18 * p;
  }

  // 记录小猫残影
  if (millis() - lastTrailTime > trailInterval) {
    if (dist(catX, catY, lastTrailX, lastTrailY) > 4) {
      trails.add(new TrailCat(catX, catY, catColor, yarnColor, faceState, millis(), yarnSpin));
      lastTrailTime = millis();
      lastTrailX = catX;
      lastTrailY = catY;
    }
  }

  // 绘制顺序
  image(yarnLayer, 0, 0);
  drawTrails();         // 小猫残影
  updateAndDrawParticles();
  drawCat(
    catX, catY, catSize,
    catColor, yarnColor,
    255,
    faceState,
    isHover,
    wobble,
    speed,
    yarnSpin,
    bounceOffset,
    bounceScaleX,
    bounceScaleY,
    holdRatio,
    heldYarnDiameter,
    recoilX,
    recoilY,
    recoilRot
    );

  fill(80, 90);
  textSize(14);
  text("Hold mouse: bigger yarn balls. Release: huge burst. Press C to clear.", 18, height - 20);
}

void keyPressed() {
  if (key == 'c' || key == 'C') {
    yarnLayer.beginDraw();
    yarnLayer.clear();
    yarnLayer.endDraw();

    lastYarnPointForLayer = null;
    yarnSegmentIndex = 0;

    lastYarnX = catX;
    lastYarnY = catY;
    lastStampX = catX;
    lastStampY = catY;
  }
}

// ===================== 颜色 =====================

color getCatColor() {
  // 按你要求固定
  float t = millis() * 0.001;
  float r = 160 + 80 * sin(t);
  float g = 160 + 80 * sin(t + TWO_PI / 3.0);
  float b = 160 + 80 * sin(t + TWO_PI * 2.0 / 3.0);
  return color(r, g, b);
}

color getYarnColor() {
  // 按你要求同样用 0.001
  float t = millis() * 0.001;
  float r = 160 + 95 * sin(t + 0.4);
  float g = 160 + 95 * sin(t + 2.2);
  float b = 160 + 95 * sin(t + 4.0);
  return color(r, g, b);
}

// ===================== 位置计算 =====================

PVector getYarnBallPosition(float x, float y, float s, float wobble) {
  float localX = s * 0.38;
  float localY = s * 0.26;

  float rx = localX * cos(wobble) - localY * sin(wobble);
  float ry = localX * sin(wobble) + localY * cos(wobble);

  return new PVector(x + rx, y + ry);
}

// ===================== 毛线轨迹 =====================

void drawYarnTimeline() {

}


void drawYarnSegment(YarnEvent a, YarnEvent b, int i) {
  float dx = b.x - a.x;
  float dy = b.y - a.y;
  float d = max(1, dist(a.x, a.y, b.x, b.y));

  float nx = -dy / d;
  float ny = dx / d;

  // 按你指定的版本
  float sag = min(12, d * 0.24) * sin(i * 0.2);
  float gravity = min(5, d * 0.05);

  float c1x = lerp(a.x, b.x, 0.33) + nx * sag;
  float c1y = lerp(a.y, b.y, 0.33) + ny * sag + gravity;

  float c2x = lerp(a.x, b.x, 0.66) - nx * sag * 0.5;
  float c2y = lerp(a.y, b.y, 0.66) - ny * sag * 0.5 + gravity;

  color segColor = lerpColor(a.col, b.col, 0.5);

  // 阴影
  stroke(0, 18);
  strokeWeight(9);
  bezier(
    a.x + 1.5, a.y + 2,
    c1x + 1.5, c1y + 2,
    c2x + 1.5, c2y + 2,
    b.x + 1.5, b.y + 2
    );

  // 主线
  stroke(red(segColor), green(segColor), blue(segColor), 220);
  strokeWeight(6);
  bezier(a.x, a.y, c1x, c1y, c2x, c2y, b.x, b.y);

  // 高光
  stroke(255, 75);
  strokeWeight(2);
  bezier(a.x, a.y, c1x, c1y, c2x, c2y, b.x, b.y);
}

// ===================== 残影 =====================

void drawTrails() {
  for (int i = trails.size() - 1; i >= 0; i--) {
    TrailCat tr = trails.get(i);

    float age = millis() - tr.birthTime;
    float lifeRatio = 1.0 - age / trailDuration;

    if (lifeRatio <= 0) {
      trails.remove(i);
    } else {
      float alpha = 255 * lifeRatio;
      float sizeFactor = 0.82 + 0.18 * lifeRatio;
      float s = catSize * sizeFactor;

      drawCat(
        tr.x, tr.y, s,
        tr.catColor, tr.yarnColor,
        alpha,
        tr.faceState,
        false,
        0,
        0,
        tr.yarnSpin,
        0,
        1,
        1,
        0,
        s * 0.23,
        0,
        0,
        0
        );
    }
  }
}

// ===================== 粒子 =====================

void burstParticles(float x, float y, color c, int holdMillis) {
  float ratio = constrain(holdMillis / 10000.0, 0, 1);

  // 数量随蓄力增加
  int count = int(24 + 96 * ratio);

  // 大小保持你现在喜欢的逻辑：基础已经比 36~64 更大
  float minSize = 36 + 20 * ratio;
  float maxSize = 64 + max(width, height) * 0.60 * ratio;

  // 重点：爆炸范围随蓄力扩大，满级约 5 倍
  float rangeScale = lerp(1.0, 5.0, ratio);

  float speedMin = (2.5 + 2.0 * ratio) * rangeScale;
  float speedMax = (6.5 + 15.0 * ratio) * rangeScale;

  // 范围变大之后，存在时间也要更久，不然还没飞远就消失了
  int duration = int(900 + 2200 * ratio);

  for (int i = 0; i < count; i++) {
    float angle = TWO_PI / count * i + random(-0.16, 0.16);
    float sp = random(speedMin, speedMax);

    float vx = cos(angle) * sp;
    float vy = sin(angle) * sp;

    int type = (i % 2 == 0) ? 0 : 1;
    particles.add(new Particle(x, y, vx, vy, c, type, minSize, maxSize, duration));
  }
}

void updateAndDrawParticles() {
  for (int i = particles.size() - 1; i >= 0; i--) {
    Particle p = particles.get(i);
    p.update();
    p.display();

    if (p.dead()) {
      particles.remove(i);
    }
  }
}

// ===================== 主体绘制 =====================

void drawCat(
  float x,
  float y,
  float s,
  color catCol,
  color yarnCol,
  float alphaValue,
  int faceState,
  boolean hover,
  float wobble,
  float speed,
  float yarnSpinAngle,
  float bounceOffset,
  float bounceScaleX,
  float bounceScaleY,
  float holdRatio,
  float heldYarnDiameter,
  float recoilX,
  float recoilY,
  float recoilRot
  ) {
  pushMatrix();
  translate(x + recoilX, y + bounceOffset + recoilY);
  rotate(wobble + recoilRot);
  scale(bounceScaleX, bounceScaleY);

  // 地面影子
  noStroke();
  fill(0, alphaValue * 0.12);
  ellipse(0, s * 0.53, s * 0.78, s * 0.18);

  float squash = constrain(speed * 0.01, 0, 0.08);
  float bodyW = s * (0.9 + squash);
  float bodyH = s * (0.75 - squash * 0.5);

  // 点击时耳朵抖动
  float earShake = 0;
  if (faceState == 2) {
    earShake = sin(frameCount * 1.3) * (0.08 + 0.10 * holdRatio);
  }

  // 耳朵（先画，保证在头后面）
  noStroke();
  fill(red(catCol), green(catCol), blue(catCol), alphaValue);

  // 左耳
  pushMatrix();
  translate(-s * 0.21, -s * 0.38);
  rotate(-0.28 - earShake);
  triangle(-s * 0.12, 0, 0, -s * 0.30, s * 0.14, 0);
  fill(255, 180, 200, alphaValue * 0.75);
  triangle(-s * 0.07, -s * 0.02, 0, -s * 0.19, s * 0.07, -s * 0.01);
  popMatrix();

  // 右耳
  fill(red(catCol), green(catCol), blue(catCol), alphaValue);
  pushMatrix();
  translate(s * 0.21, -s * 0.38);
  rotate(0.28 + earShake);
  triangle(-s * 0.14, 0, 0, -s * 0.30, s * 0.12, 0);
  fill(255, 180, 200, alphaValue * 0.75);
  triangle(-s * 0.07, -s * 0.01, 0, -s * 0.19, s * 0.06, -s * 0.02);
  popMatrix();

  // 身体
  noStroke();
  fill(red(catCol), green(catCol), blue(catCol), alphaValue);
  ellipse(0, 30, bodyW, bodyH);

  // 头
  ellipse(0, -20, s * 0.85, s * 0.75);

  // 尾巴摆动
  float tailSwing = 0;
  if (hover) {
    tailSwing = sin(frameCount * 0.22) * s * 0.22;
  }

  noFill();
  stroke(red(catCol), green(catCol), blue(catCol), alphaValue);
  strokeWeight(s * 0.12);
  strokeCap(ROUND);
  bezier(
    s * 0.38, 30,
    s * 0.85, 10 + tailSwing,
    s * 0.75, -45 - tailSwing,
    s * 0.35, -35
    );

  // 前爪
  noStroke();
  fill(red(catCol), green(catCol), blue(catCol), alphaValue);
  ellipse(-s * 0.10, s * 0.28, s * 0.18, s * 0.12);
  ellipse(s * 0.03, s * 0.29, s * 0.18, s * 0.12);

  // 右爪伸出去
  pushMatrix();
  translate(s * 0.22, s * 0.23);
  rotate(-0.28);
  ellipse(0, 0, s * 0.27, s * 0.11);
  popMatrix();

  // 爪子到毛线球的小线段
  stroke(red(yarnCol), green(yarnCol), blue(yarnCol), alphaValue);
  strokeWeight(4);
  noFill();
  bezier(
    s * 0.25, s * 0.22,
    s * 0.28, s * 0.18,
    s * 0.33, s * 0.22,
    s * 0.36, s * 0.24
    );

  // 手上的毛线球（长按时会变大）
  drawYarnBallAt(s * 0.38, s * 0.26, heldYarnDiameter, alphaValue, yarnCol, yarnSpinAngle);

  // 脸底
  noStroke();
  fill(255, 255, 255, alphaValue * 0.7);
  ellipse(-s * 0.15, -5, s * 0.2, s * 0.16);
  ellipse(s * 0.15, -5, s * 0.2, s * 0.16);

  if (faceState == 2) {
    // 点击
    stroke(30, alphaValue);
    strokeWeight(4);
    noFill();
    arc(-s * 0.15, -8, s * 0.18, s * 0.12, 0, PI);
    arc(s * 0.15, -8, s * 0.18, s * 0.12, 0, PI);

    noStroke();
    fill(30, alphaValue);
    ellipse(0, s * 0.13, s * 0.13, s * 0.18);
  } else if (faceState == 1) {
    // 悬停
    drawStar(-s * 0.15, -8, s * 0.08, alphaValue);
    drawStar(s * 0.15, -8, s * 0.08, alphaValue);

    stroke(30, alphaValue);
    strokeWeight(4);
    noFill();
    arc(0, s * 0.08, s * 0.28, s * 0.18, 0, PI);
  } else {
    // 普通
    noStroke();
    fill(30, alphaValue);
    ellipse(-s * 0.15, -8, s * 0.08, s * 0.10);
    ellipse(s * 0.15, -8, s * 0.08, s * 0.10);

    stroke(30, alphaValue);
    strokeWeight(3);
    noFill();
    arc(-s * 0.04, s * 0.08, s * 0.08, s * 0.07, 0, PI);
    arc(s * 0.04, s * 0.08, s * 0.08, s * 0.07, 0, PI);
  }

  // 鼻子
  noStroke();
  fill(255, 120, 150, alphaValue);
  triangle(-s * 0.04, s * 0.03, s * 0.04, s * 0.03, 0, s * 0.08);

  // 腮红
  fill(255, 170, 190, alphaValue * 0.45);
  ellipse(-s * 0.24, s * 0.05, s * 0.08, s * 0.04);
  ellipse(s * 0.24, s * 0.05, s * 0.08, s * 0.04);

  // 胡须
  stroke(40, alphaValue * 0.7);
  strokeWeight(2);
  line(-s * 0.1, s * 0.07, -s * 0.38, s * 0.02);
  line(-s * 0.1, s * 0.12, -s * 0.40, s * 0.12);
  line(s * 0.1, s * 0.07, s * 0.38, s * 0.02);
  line(s * 0.1, s * 0.12, s * 0.40, s * 0.12);

  popMatrix();
}

void drawYarnBallAt(float x, float y, float d, float alphaValue, color yarnCol, float spinAngle) {
  pushMatrix();
  translate(x, y);
  rotate(spinAngle);

  noStroke();
  fill(red(yarnCol), green(yarnCol), blue(yarnCol), alphaValue);
  ellipse(0, 0, d, d);

  // 外轮廓高光
  noFill();
  stroke(255, alphaValue * 0.45);
  strokeWeight(max(2, d * 0.03));
  ellipse(-d * 0.08, -d * 0.08, d * 0.78, d * 0.78);

  // 纹路
  stroke(255, alphaValue * 0.72);
  strokeWeight(max(2, d * 0.025));
  noFill();
  arc(0, 0, d * 0.78, d * 0.42, -0.9, 0.9);
  arc(0, 0, d * 0.82, d * 0.58, 2.2, 4.8);
  arc(0, 0, d * 0.46, d * 0.82, -2.25, -0.1);

  stroke(255, alphaValue * 0.45);
  arc(0, 0, d * 0.68, d * 0.68, 0.5, 2.2);

  // 高光点
  noStroke();
  fill(255, 255, 255, alphaValue * 0.38);
  ellipse(-d * 0.16, -d * 0.18, d * 0.16, d * 0.11);

  popMatrix();
}

// ===================== 小图形 =====================

void drawStar(float x, float y, float radius, float alphaValue) {
  pushMatrix();
  translate(x, y);
  fill(30, alphaValue);
  noStroke();

  beginShape();
  for (int i = 0; i < 10; i++) {
    float angle = TWO_PI / 10.0 * i - HALF_PI;
    float rr = (i % 2 == 0) ? radius : radius * 0.45;
    vertex(cos(angle) * rr, sin(angle) * rr);
  }
  endShape(CLOSE);

  popMatrix();
}

void drawHeart(float x, float y, float size, float alphaValue) {
  pushMatrix();
  translate(x, y);
  scale(size / 20.0);

  fill(255, 90, 140, alphaValue);
  noStroke();

  beginShape();
  vertex(0, 6);
  bezierVertex(-12, -4, -10, -16, 0, -8);
  bezierVertex(10, -16, 12, -4, 0, 6);
  endShape(CLOSE);

  popMatrix();
}

void drawParticleStar(float x, float y, float radius) {
  beginShape();
  for (int i = 0; i < 10; i++) {
    float angle = TWO_PI / 10.0 * i - HALF_PI;
    float rr = (i % 2 == 0) ? radius : radius * 0.45;
    vertex(x + cos(angle) * rr, y + sin(angle) * rr);
  }
  endShape(CLOSE);
}

// ===================== 类 =====================

class TrailCat {
  float x, y;
  color catColor;
  color yarnColor;
  int faceState;
  int birthTime;
  float yarnSpin;

  TrailCat(float x_, float y_, color cc_, color yc_, int fs_, int bt_, float ys_) {
    x = x_;
    y = y_;
    catColor = cc_;
    yarnColor = yc_;
    faceState = fs_;
    birthTime = bt_;
    yarnSpin = ys_;
  }
}

class YarnEvent {
  int type; // 0 = 线条点, 1 = 毛线球
  float x, y;
  color col;
  float spin;
  float size;

  YarnEvent(int type_, float x_, float y_, color c_, float spin_, float size_) {
    type = type_;
    x = x_;
    y = y_;
    col = c_;
    spin = spin_;
    size = size_;
  }
}

class Particle {
  float x, y;
  float vx, vy;
  float rotation;
  float rotationSpeed;
  float size;
  color col;
  int type;
  int birthTime;
  int duration;

  Particle(float x_, float y_, float vx_, float vy_, color c_, int type_, float minS, float maxS, int dur_) {
    x = x_;
    y = y_;
    vx = vx_;
    vy = vy_;
    col = c_;
    type = type_;
    birthTime = millis();
    duration = dur_;

    rotation = random(TWO_PI);
    rotationSpeed = random(-0.12, 0.12);

    size = random(minS, maxS);
  }

  void update() {
    x += vx;
    y += vy;

    vy += 0.05;
    vx *= 0.97;
    vy *= 0.97;

    rotation += rotationSpeed;
  }

  void display() {
    float age = millis() - birthTime;
    float lifeRatio = 1.0 - age / duration;
    float alphaValue = 255 * lifeRatio;

    pushMatrix();
    translate(x, y);
    rotate(rotation);

    if (type == 0) {
      fill(red(col), green(col), blue(col), alphaValue);
      noStroke();
      drawParticleStar(0, 0, size * lifeRatio);
    } else {
      drawHeart(0, 0, size * lifeRatio, alphaValue);
    }

    popMatrix();
  }

  boolean dead() {
    return millis() - birthTime > duration;
  }
}

void drawYarnSegmentToLayer(YarnEvent a, YarnEvent b, int i) {
  yarnLayer.beginDraw();

  yarnLayer.noFill();
  yarnLayer.strokeCap(ROUND);
  yarnLayer.strokeJoin(ROUND);

  float dx = b.x - a.x;
  float dy = b.y - a.y;
  float d = max(1, dist(a.x, a.y, b.x, b.y));

  float nx = -dy / d;
  float ny = dx / d;

  // 你指定过的版本，保留
  float sag = min(12, d * 0.24) * sin(i * 0.2);
  float gravity = min(5, d * 0.05);

  float c1x = lerp(a.x, b.x, 0.33) + nx * sag;
  float c1y = lerp(a.y, b.y, 0.33) + ny * sag + gravity;

  float c2x = lerp(a.x, b.x, 0.66) - nx * sag * 0.5;
  float c2y = lerp(a.y, b.y, 0.66) - ny * sag * 0.5 + gravity;

  color segColor = lerpColor(a.col, b.col, 0.5);

  // 阴影
  yarnLayer.stroke(0, 18);
  yarnLayer.strokeWeight(9);
  yarnLayer.bezier(
    a.x + 1.5, a.y + 2,
    c1x + 1.5, c1y + 2,
    c2x + 1.5, c2y + 2,
    b.x + 1.5, b.y + 2
    );

  // 主线
  yarnLayer.stroke(red(segColor), green(segColor), blue(segColor), 220);
  yarnLayer.strokeWeight(6);
  yarnLayer.bezier(a.x, a.y, c1x, c1y, c2x, c2y, b.x, b.y);

  // 高光
  yarnLayer.stroke(255, 75);
  yarnLayer.strokeWeight(2);
  yarnLayer.bezier(a.x, a.y, c1x, c1y, c2x, c2y, b.x, b.y);

  yarnLayer.endDraw();
}

void drawYarnBallToLayer(float x, float y, float d, color yarnCol, float spinAngle) {
  yarnLayer.beginDraw();

  yarnLayer.pushMatrix();
  yarnLayer.translate(x, y);
  yarnLayer.rotate(spinAngle);

  // 阴影
  yarnLayer.noStroke();
  yarnLayer.fill(0, 18);
  yarnLayer.ellipse(1.5, d * 0.35, d * 0.95, d * 0.35);

  // 球体
  yarnLayer.noStroke();
  yarnLayer.fill(red(yarnCol), green(yarnCol), blue(yarnCol), 235);
  yarnLayer.ellipse(0, 0, d, d);

  // 外轮廓高光
  yarnLayer.noFill();
  yarnLayer.stroke(255, 235 * 0.45);
  yarnLayer.strokeWeight(max(2, d * 0.03));
  yarnLayer.ellipse(-d * 0.08, -d * 0.08, d * 0.78, d * 0.78);

  // 纹路
  yarnLayer.stroke(255, 235 * 0.72);
  yarnLayer.strokeWeight(max(2, d * 0.025));
  yarnLayer.noFill();
  yarnLayer.arc(0, 0, d * 0.78, d * 0.42, -0.9, 0.9);
  yarnLayer.arc(0, 0, d * 0.82, d * 0.58, 2.2, 4.8);
  yarnLayer.arc(0, 0, d * 0.46, d * 0.82, -2.25, -0.1);

  yarnLayer.stroke(255, 235 * 0.45);
  yarnLayer.arc(0, 0, d * 0.68, d * 0.68, 0.5, 2.2);

  // 高光点
  yarnLayer.noStroke();
  yarnLayer.fill(255, 255, 255, 235 * 0.38);
  yarnLayer.ellipse(-d * 0.16, -d * 0.18, d * 0.16, d * 0.11);

  yarnLayer.popMatrix();

  yarnLayer.endDraw();
}
