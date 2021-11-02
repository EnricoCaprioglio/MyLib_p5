// init empty array to store the alive agents
let agents = [];

function setup() {
  createCanvas(600, 600);
  console.log(random(0.5, 2))
}

function draw() {
  background(38);
  for (let i = 0; i < 10; i++) {
    agents.push(new Agent(300, 550));
  }

  for (let agent of agents) {
    let gravity = createVector(0, -0.2);
    agent.applyForce(gravity);
    agent.update();
    agent.show();
  }
  // start from last one since we remove dead agents
  for (let i = agents.length - 1; i >= 0; i--) {
    if (agents[i].isDead()) {
        agents.splice(i, 1);
    }
  }
}