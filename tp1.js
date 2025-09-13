//Herrera Abril Aylen - 121132/4
//Trabajo Práctico n°1
//Comisión 5 prof. Leonardo Garay

let tam;
let offsetX = 33;
let offsetY = 33;
let step = 10;

function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(255);
}

function draw() {
  background(0);
  grilla(offsetX, offsetY, 12, 12, 30); 
 
}

function grilla(xOffset, yOffset, cols, rows, sep) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      tam = 20;

      let cx = xOffset + i * sep;
      let cy = yOffset + j * sep;

      if (dist(mouseX, mouseY, cx, cy) < 150) {
        tam -= 10;
      } else if (dist(mouseX, mouseY, cx, cy) > 20 && dist(mouseX, mouseY, cx, cy) < 200) {
        tam -= 5;
      }

      if (dist(mouseX, mouseY, cx, cy) < 20) {
        tam -= 10;
      } else if (dist(mouseX, mouseY, cx, cy) > 20 && dist(mouseX, mouseY, cx, cy) < 100) {
        tam -= 15;
      }

      circle(cx, cy, tam);
    }
  }
}

function mousePressed() {
  fill(random(0, 255), random(0, 255), random(0, 255));
}

function keyPressed() {
  fill(255);
}
