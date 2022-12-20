class Riped extends Fruits {
  constructor(x, y, r, g) {
    super(x, y, r, g);
  }

  ground() {
    if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -0.8;
      this.acc.x *= -0.8;
    }
    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -0.8;
      this.acc.x *= -0.8;
    }
    if (this.pos.y >= height - this.grounds - this.r) {
      this.pos.y = height - this.grounds - this.r;
      this.vel.set(0, 0);
      this.acc.set(0, 0);
    }
  }

  show() {
    fill(255, 50, 0);
    ellipse(this.pos.x, this.pos.y, this.r * 2.25, this.r * 1.75);
    fill(50, 100, 50);
    rect(this.pos.x - this.r * 0.375, this.pos.y - 10, this.r * 0.75, this.r * 0.5);
  }
}