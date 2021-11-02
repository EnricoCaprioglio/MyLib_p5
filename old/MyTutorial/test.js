function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    background(220);
    strokeWeight(1);
    rect(0,0,800,800);


    translate(400, 400);
    strokeWeight(10);
    point(0,0);
    line(0,0,200, 400);
  }
  