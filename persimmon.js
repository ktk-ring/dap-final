class Fruits {
  constructor(x, y, r) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.r = r / 2;
    this.touched = false;
  }

  touch() {
    this.touchVector = createVector(mouseX - 100, mouseY - 250);
    this.boundary = this.r;
    if (this.touchVector.x >= this.pos.x - this.boundary && this.touchVector.x <= this.pos.x + this.boundary) {
      if (this.touchVector.y >= this.pos.y - this.boundary && this.touchVector.y <= this.pos.y + this.boundary) {
        this.power = createVector(this.pos.x - (mouseX - 100), this.pos.y - (mouseY - 250));
        this.power.mult(0.5);
        this.acc.add(this.power);
        this.touched = true;
      }
    }
  }

  ground() {
    if (this.pos.x <= this.r) {
      this.pos.x = this.r;
      this.vel.x *= -0.9;
      this.acc.x *= -0.9;
    }
    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= -0.9;
      this.acc.x *= -0.9;
    }
    if (this.pos.y >= height - 50 - this.r) {
      this.pos.y = height - 50 - this.r;
      this.vel.y *= -0.9;
      this.acc.y *= -0.9;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    if (this.touched == true) {
      this.gravity = createVector(0, 0.1);
      this.acc.add(this.gravity);
    }
  }


  show() {
    fill(255, 165, 0);
    circle(this.pos.x, this.pos.y, this.r * 2);
  }
}