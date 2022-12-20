class Fruits {
  constructor(x, y, w) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.w = w;
    this.touched = false;
  }

  touch() {
    this.touchVector = createVector(mouseX - 100, mouseY - 250);
    this.boundary = this.w / 2;
    if (this.touchVector.x >= this.pos.x - this.boundary && this.touchVector.x <= this.pos.x + this.boundary) {
      if (this.touchVector.y >= this.pos.y - this.boundary && this.touchVector.y <= this.pos.y + this.boundary) {

        if(this.touched != true) {
          this.gravity = createVector(0, 3);
          this.vel.add(this.gravity);
          this.touched = true;
        }
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