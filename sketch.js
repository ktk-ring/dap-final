// images
let tree;

// 10 print variables
let x, y, w;

let l = 0;
let p = 0.5;

function preload() {
  tree = loadImage("data/tree.png");
}

function setup() {
  createCanvas(displayWidth / 2.5, displayWidth / 3);
  background(220);
  noStroke();
  x = y = 50;
  w = 100 / 3;

  let margin = 25;
  fill("#23A41A");
  rect(0, height * 0.625, width, height * 0.375);

  image(tree, margin, margin / 2, (height * 0.75 - margin) / 3 * 2, (height * 0.75 - margin));
}

function draw() {
  fill(255, 165, 0);
  if (random() < 0.5 && y < 275) {
    circle(x, y, w * 0.75);
  }

  x += w;

  if (x > 300) {
    y = y + w;
    x = 50;
  }

}
