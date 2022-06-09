const flock = [];
let alignSlider, cohesionSlider, separationSlider;


function setup() {
  createCanvas(640, 360);
  alignSlider = createSlider(0,5,1,0.1);
  cohesionSlider = createSlider(0,5,1,0.1);
  separationSlider = createSlider(0,5,1,0.1);
  // Create objects
  for (let i = 0; i < 200; i++) {
    flock.push(new Agent());
  }
}

function draw() {
  background(38);
  for (let agent of flock) {
    agent.edges();
    agent.flock(flock)
    agent.update();
    agent.show();
  }
}