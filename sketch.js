let angle=0;

function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  background(105);
  
  rectMode(CENTER);
  noStroke();
  fill(0,250,250);
  translate(mouseX-width/2,mouseY-height/2);
  rotateX(angle);
  rotateY(angle * 0.3);
  //rotateZ(angle * 1.2);
  //rect(0,0,150,150);
  box(10,50,100);
  angle += 0.07;
}
