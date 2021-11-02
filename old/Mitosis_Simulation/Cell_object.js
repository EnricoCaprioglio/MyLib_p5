function Cell(pos, r, c) {
  
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width),random(height));
  }
  
  this.r = r || 60;
  this.c = c || color(random(100,255), 0, random(100,255), 100);
  
  this.mitosis = function() {
    var offset = random(-this.r, this.r);
    this.pos.x += offset;
    var cellA = new Cell(this.pos, this.r*0.8, this.c);
    // var cellB = new Cell(this.pos, this.r/2, this.c);
    return cellA;
  };
  
  this.clicked = function(x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  };
  
  
  this.move = function() {
    var v = p5.Vector.random2D();
    this.pos.add(v);
  };
  
  this.show = function() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  };
}
