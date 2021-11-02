var cells =[];

function setup() {
  createCanvas(600,600);
  cells.push(new Cell()); // same as: cell = new Cell(); then push cell
  cells.push(new Cell());
}

function draw() {
  background(38);
  for (var i = 0; i < cells.length; i++) {
    cells[i].move();
    cells[i].show();
  }
}

function mousePressed() {
  for (var i = cells.length - 1; i >= 0; i--) {
    if (cells[i].clicked(mouseX, mouseY)) {
      // cells.push(cells[i].mitosis());
      // cells.push(cells[i].mitosis());
      var offset = createVector(random(-cells[i].r, cells[i].r),random(-cells[i].r, cells[i].r));
      cells.push(new Cell(cells[i].pos.add(offset), cells[i].r*0.8, cells[i].c))
      cells.push(new Cell(cells[i].pos.add(-offset), cells[i].r*0.8, cells[i].c))
      cells.splice(i, 1);
    }   
  }
}
