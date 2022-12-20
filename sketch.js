let tree;

let x, y;
x = 25;
y = 25;

let l = 0;
let w = 50;
let p = 0.5;

function preload() {
  tree = loadImage("data/tree.png");
}

function setup() {
  createCanvas(displayWidth / 2.5, displayWidth / 3);
  background(220);
  let margin = 25;
  push();
  noStroke();
  fill("#23A41A");
  rect(0, height * 0.625, width, height * 0.375);
  pop();
  image(tree, margin, margin / 2, (height * 0.75 - margin) / 3 * 2, (height * 0.75 - margin));
}

function draw() {
  if (random() > p && y < height - 40) {
    circle(x, y, 50, 50);
  }

  x = x + w;

  if (x > width - 25) {
    y = y + w;
    x = 25;
  }

}
