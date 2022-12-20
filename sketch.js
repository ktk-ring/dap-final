let tree;
let fruitCanvas;

let x, y, w;

let count = 10;

let persimmon = [];

function preload() {
  tree = loadImage("data/tree.png");
}

function setup() {
  createCanvas(windowWidth, windowWidth / 2.5);
  fruitCanvas = createGraphics(windowWidth, windowWidth / 2.5);
  noStroke();

  x = width / 2 - 125;
  y = 175;
  w = 100 / 3;
}

function draw() {
  background("skyblue");

  fill("#23A41A");
  rect(0, height * 0.625, width, height * 0.375);
  image(tree, width / 2 - 150, height * 0.625-300, 300, 400);

  image(fruitCanvas, 0, 0);

  for (; y < 400; y += w) {
    for (; x <= width / 2 + 125; x += w) {
      if (random() < 0.3) {
        if (random() < 0.75) {
          persimmon.push(new Fruits(x, y, w, random(20, 250)));
        } else {
          persimmon.push(new Riped(x, y, w, random(20, 250)));
        }
      }
    }
    x = width / 2 - 150;
  }

  for (fruit of persimmon) {
    fruit.touch();
    fruit.update();
    fruit.ground();
    fruit.show();
  }

  push();
  strokeCap(SQUARE);
  strokeWeight(25);
  stroke(110, 50, 25);
  line(mouseX + 12.5, mouseY + 25, mouseX - 125, mouseY - 250);
  pop();
}
