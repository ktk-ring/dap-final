class Fruits {
  constructor(x, y, w) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.w = w;
  }

  touch() {
    this.touched = createVector(mouseX - 50, mouseY - 250);
    this.boundary = this.w/2;
    if (this.touched.x >= this.pos.x - this.boundary && this.touched.x <= this.pos.x + this.boundary) {
      if (this.touched.y >= this.pos.y - this.boundary && this.touched.y <= this.pos.y + this.boundary) {
      gravity = createVector(0, 1);
      this.vel.add(gravity);
      }
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }


  show() {
    fill(255, 165, 0);
    circle(this.pos.x, this.pos.y, this.w);
  }
}