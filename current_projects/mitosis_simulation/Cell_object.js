function Cell(pos, r, c, vel) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width),random(height));
  }
  
  this.r = r || 80;
  this.c = c || color(random(100,255), 0, random(100,255), 80);
  
  if (vel) {
    this.vel = vel.copy();
  } else {
    this.vel = p5.Vector.random2D();
  }

  this.acc = createVector(-this.vel.x*0.01,-this.vel.y*0.01)

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.edges = function() {
    if (this.pos.y >= height - this.r/2) {
      this.pos.y = height - this.r/2;
      this.vel.y *= -1;
    } else if (this.pos.y <= this.r/2) {
      this.pos.y = this.r/2;
      this.vel.y *= -1;
    }
    if (this.pos.x >= width - this.r/2) {
      this.pos.x = width - this.r/2;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.r/2) {
      this.pos.x = this.r/2;
      this.vel.x *= -1;
    }
  }

  this.clicked = function(x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r /2) {
      return true;
    } else {
      return false;
    }
  }
  
  this.move = function() {
    // add some rand giggle
    var giggle = p5.Vector.random2D();
    this.pos.add(giggle);
    // update pos, vel, acc
    this.pos.add(this.vel);
    var temp_vel = this.vel.copy().add(this.acc); // notice we had to add a copy!
    if (mag(temp_vel.x, temp_vel.y) > 0.9) {
      this.vel = temp_vel;
    }
    this.acc.set(-this.vel.x*0.01, -this.vel.y*0.01); // opposite to motion
  }

  this.show = function() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }
}
