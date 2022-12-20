class Persimmon {
  constructor(x, y, percent) {
    this.x = x
    this.y = y;
    this.w = 100 / 3;
    this.p = percent;
  }

  fruit(canvasName) {
    canvasName.push();
    canvasName.noStroke();
    canvasName.fill(255, 165, 0);
    if (random() < this.p && this.y < 275) {
      canvasName.circle(this.x, this.y, this.w * 0.75);
    }
    this.x += this.w;
    if (this.x > 325) {
      this.y += this.w;
      this.x = 50;
    }
    canvasName.pop();

  }
}