class Agent {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.diameter = random(10, 30);
    this.velocity = p5.Vector.random2D();
    this.velocity.setMag(random(0.5,2));
    this.acceleration = createVector();
    this.maxForce = 0.2;
    this.maxSpeed = 2;
  }

  edges() { // this is just pacman effect
    if (this.position.x > width) {
      this.position.x = 0;
    } else if(this.position.x < 0) {
      this.position.x = width;
    }
    if (this.position.y > height) {
      this.position.y = 0;
    } else if(this.position.y < 0) {
      this.position.y = height;
    }
  }

  // So we have three forces:
  // steer to align
  // steer to cohesion
  // steer to avoid collision

  align(agents) {
    let visionR = 50;
    let steerForce = createVector(); // average friend's velocities
    let total = 0;
    for (let friend of agents) {
      let d = dist(
        this.position.x, 
        this.position.y, 
        friend.position.x, 
        friend.position.y
        ); 
      if (friend != this && d < visionR) {
        steerForce.add(friend.velocity);
        total++;
      }
    }
    if (total > 0) {
      steerForce.div(total);
      steerForce.setMag(this.maxSpeed)
      steerForce.sub(this.velocity);
      steerForce.limit(this.maxForce);
    }
    return steerForce;
  }

  cohesion(agents) {
    let visionR = 50;
    let cohesionForce = createVector(); // average friend's positions
    let total = 0;
    for (let friend of agents) {
      let d = dist(
        this.position.x, 
        this.position.y, 
        friend.position.x, 
        friend.position.y
        ); 
      if (friend != this && d < visionR) {
        cohesionForce.add(friend.position);
        total++;
      }
    }
    if (total > 0) {
      cohesionForce.div(total);
      cohesionForce.sub(this.position);
      cohesionForce.setMag(this.maxSpeed)
      cohesionForce.sub(this.velocity);
      cohesionForce.limit(this.maxForce);
    }
    return cohesionForce;
  }

  separation(agents) {
    let visionR = 50;
    let cohesionForce = createVector(); // average friend's positions
    let total = 0;
    for (let friend of agents) {
      let d = dist(
        this.position.x, 
        this.position.y, 
        friend.position.x, 
        friend.position.y
        ); 
      if (friend != this && d < visionR) {
        let diff = p5.Vector.sub(this.position, friend.position);
        diff.div(d);
        cohesionForce.add(diff);
        total++;
      }
    }
    if (total > 0) {
      cohesionForce.div(total);
      cohesionForce.setMag(this.maxSpeed)
      cohesionForce.sub(this.velocity);
      cohesionForce.limit(this.maxForce);
    }
    return cohesionForce;
  }

  // now we add the forces to the acceleration
  // of the agent

  flock(agents) {
    let alignment = this.align(agents);
    let cohesion = this.cohesion(agents);
    let separation = this.separation(agents);

    separation.mult(separationSlider.value());
    alignment.mult(alignSlider.value());
    cohesion.mult(cohesionSlider.value());

    this.acceleration.add(alignment);
    this.acceleration.add(cohesion);
    this.acceleration.add(separation);
  }

  
  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.acceleration.set(0,0);
  }

  show() {
    ellipse(this.position.x, this.position.y, this.diameter, this.diameter);
  }
}