let tree;
let fruitC;

let x, y, w;

let count = 10;

let persimmon = [];

function preload() {
  tree = loadImage("data/tree.png");
}

function setup() {
  createCanvas(displayWidth / 2.5, displayWidth / 3);
  fruitCanvas = createGraphics(displayWidth / 2.5, displayWidth / 3);
  noStroke();

  x = 50;
  y = 50;
  w = 100 / 3;
}

function draw() {
  background(220);

  let margin = 25;
  fill("#23A41A");
  rect(0, height * 0.625, width, height * 0.375);
  image(tree, margin, margin / 2, (height * 0.75 - margin) / 3 * 2, (height * 0.75 - margin));

  image(fruitCanvas, 0, 0);

  for (; y < 275; y += w) {
    for (; x <= 325; x += w) {
      if (random() < 0.5) {
        fill(255, 165, 0);
        persimmon.push(new Fruits(x, y, w));
      }
    }
    x = 50;
  }

  for (fruit of persimmon) {
    fruit.touch();
    fruit.update();
    fruit.ground();
    fruit.show();
  }

  push();
  strokeWeight(10);
  stroke(0);
  line(mouseX, mouseY, mouseX - 100, mouseY - 250);
  pop();


}
