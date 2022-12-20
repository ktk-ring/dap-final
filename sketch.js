let tree;

function preload() {
  tree = loadImage("data/tree.png");
}

function setup() {
  createCanvas(displayWidth / 2, displayHeight / 2);
}

function draw() {
  background(220);
  let margin = 100;
  image(tree, margin, margin/2, (height-margin)/3*2, (height-margin));
}