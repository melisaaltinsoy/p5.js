let angle=0;

function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  background(100);
  rectMode(CENTER);
  noStroke();
  fill(0,0,255);
  rotateX(angle);
  rect(0,0,80,80);
  angle += 0.07;
}
