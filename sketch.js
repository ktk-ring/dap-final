let tree;

function preload() {
  tree = loadImage("data/tree.png");
}

function setup() {
  createCanvas(displayWidth / 2.5, displayWidth / 3);
  noStroke();
  fill("#23A41A");

}

function draw() {
  background(220);
  let margin = 25;
  rect(0, height*0.625, width, height*0.375);
  image(tree, margin, margin/2, (height*0.75-margin)/3*2, (height*0.75-margin));
}