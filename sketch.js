let tree;
let fruitC;

let persimmon = new Persimmon(50, 50, 0.5);

function preload() {
  tree = loadImage("data/tree.png");
}

function setup() {
  w = displayWidth / 2.5;
  h = displayWidth / 3;
  createCanvas(w, h);
  fruitCanvas = createGraphics(w, h);
  noStroke();
}

function draw() {
  background(220);
  let margin = 25;
  fill("#23A41A");
  rect(0, height * 0.625, width, height * 0.375);
  image(tree, margin, margin / 2, (height * 0.75 - margin) / 3 * 2, (height * 0.75 - margin));

  image(fruitCanvas, 0, 0);
  
  push();
  strokeWeight(10);
  stroke(0);
  line(mouseX, mouseY, mouseX - 10, mouseY - 100);
  pop();

  persimmon.fruit(fruitCanvas);

}
