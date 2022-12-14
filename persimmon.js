class Fruits {
  constructor(x, y, r, g) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.r = r * 0.9 / 2;
    this.touched = false;
    this.grounds = g;
  }

  touch() {
    this.touchVector = createVector(mouseX - 125, mouseY - 250);
    this.boundary = this.r;
    if (this.touchVector.x >= this.pos.x - this.boundary && this.touchVector.x <= this.pos.x + this.boundary) {
      if (this.touchVector.y >= this.pos.y - this.boundary && this.touchVector.y <= this.pos.y + this.boundary) {
        this.power = createVector(this.pos.x - this.touchVector.x, this.pos.y - this.touchVector.y);
        this.power.mult(0.25);
        this.acc.add(this.power);
        this.touched = true;
      }
    }
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
      this.vel.y *= -0.5;
      this.acc.y *= -0.5;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    if (this.touched == true) {
      this.gravity = createVector(0, 0.5);
      this.acc.add(this.gravity);
    }
  }


  show() {
    fill(255, 165, 0);
    circle(this.pos.x, this.pos.y, this.r * 2);
    fill(50, 100, 50);
    rect(this.pos.x - this.r * 0.375, this.pos.y - 10, this.r * 0.75, this.r * 0.5);
  }
}