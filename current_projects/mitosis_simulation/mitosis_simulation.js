var cells =[];

function setup() {
  createCanvas(600,600);
  for (var i = 0; i < 2; i++) {
    cells.push(new Cell());
  }
}

function draw() {
  background(38);
  for (var i = 0; i < cells.length; i++) {
    cells[i].move();
    cells[i].show();
    cells[i].edges();
  }
}

function mousePressed() {
  angleMode(DEGREES)
  for (var i = cells.length - 1; i >= 0; i--) {
    if (cells[i].clicked(mouseX, mouseY)) {
      var temp_pos = createVector(cells[i].pos.x+0.1, cells[i].pos.y+0.1);
      var temp_r = cells[i].r*0.8;
      var temp_c = cells[i].c;
      var temp_vel = cells[i].vel.copy();
      var perp_acc1 = createVector(-temp_vel.y, temp_vel.x);
      var perp_acc2 = perp_acc1.copy().mult(-1);
      cells.push(new Cell(temp_pos, temp_r, temp_c, temp_vel.copy().add(perp_acc1)));
      cells.push(new Cell(temp_pos, temp_r, temp_c, temp_vel.copy().add(perp_acc2)));
      cells.splice(i, 1);
      // console.log("this is mag", mag(cells[i].vel.x, cells[i].vel.y));
      // console.log("vel ", cells[i].vel.x, cells[i].vel.y);
    }
  }
}
