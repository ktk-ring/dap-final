class Fruits {
  constructor(x, y, w) {
    this.pos = createVector(x,y);
    this.vel = createVector();
    this.acc = createVector();
    this.w = w;
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show(){
    fill(255,165,0);
    circle(this.pos.x, this.pos.y, this.w);
  }
}