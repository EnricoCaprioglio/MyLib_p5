function setup() {
  createCanvas(400, 400);
}

function draw() {
  rect(0,0,width,width);
  background(220);
  translate(width/2, width/2);
  strokeWeight(10);
  point(0,0);
  line(0,0, 400, 400);
}
