// game of life, inspired by daniel kauffmann video (the coding train)

// define global variables
let grid;
let next;
let col;
let row;
let resolution = 20;
let fr = 60;
// colors settings
let colors1 = [];
let divisor = 5;
let death_colors = [];
let number_explosion = 15; // use mulpiple of three
// death settings
let death_time = 150;

// setup
function setup() {
  createCanvas(1000, 1000);
  col = width / resolution;
  row = height / resolution;
  n_colors = (255-17)/divisor;
  for (let i = 0; i < n_colors; i++) {
    colors1.push(color(255 - i*divisor));
  }
  // death colors
  let multiplicator = floor(255/number_explosion);
  for ( let i = 0; i < number_explosion; i++) {
    if (i < number_explosion/3) {
      let s = i*multiplicator*number_explosion/3;
      death_colors.push(color(0+s, 0 + s ,255));
      if (i == number_explosion/3-1) {
        death_colors.push(color(10),color(10),color(10),color(10),color(10));
          }
    } else if (i >= number_explosion/3 && i < 2*number_explosion/3) {
      let j = i - number_explosion/3;
      death_colors.push(color(255, 0 + j*multiplicator*number_explosion/3, 0));
    } else {
      let k = i - 2*number_explosion/3;
      death_colors.push(color(255, 255, 0+ k*multiplicator*number_explosion/3));
    }
  }
  death_colors.push(color(200));
  death_colors.push(color(150));
  death_colors.push(color(100));
  death_colors.push(color(50));
  death_colors.push(color(10));

  grid = create_grid(row, col);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let y = i * resolution;
      let x = j * resolution;
      let casual;
      if (i > 0 && j > 0 && grid[i-1][j-1].value ) {
        casual = floor(random(2));
      } else {
      casual = floor(random(20));
      }
      let value;
      if (casual < 1) {
        value = 1;
      } else {
        value = 0;
      }
      grid[i][j] = new Thing(y, x, value);
    }
  }
}

// start drawing
function draw() {
  background(0);
  frameRate(fr);

  // show grid
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      grid[i][j].show();
    }
  }
  // create copy of grid
  next = create_grid(row, col);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      next[i][j] = new Thing(grid[i][j].y, grid[i][j].x, grid[i][j].value, grid[i][j].counter);
    }
  }
  // update values of new grid
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      next[i][j].neighbours(grid, j, i);
      next[i][j].update();
    }
  }
  // update old grid
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      grid[i][j] = next[i][j];
      if (next[i][j].counter == death_time) {
        for (let k = -5; k < 6; k++) {
          for (let m = -5; m < 6; m++) {
            let temp_row = (i + k + row) % row;
            let temp_col = (j + m + col) % col;
            let distante = (abs(k)+abs(m))/2;
            grid[temp_row][temp_col].counter = death_time + 1 + distante;
            next[temp_row][temp_col].counter = death_time + 1 + distante;
            if (distante == 2.5) {
              grid[temp_row][temp_col].counter = death_time + death_colors.length -3;
              next[temp_row][temp_col].counter = death_time + death_colors.length -3;
            } else if (distante > 2.5) {
              let casual = floor(random(30));
              if (casual > 1) {
                grid[temp_row][temp_col].counter = death_time + death_colors.length;
                next[temp_row][temp_col].counter = death_time + death_colors.length;
              } else if (casual <2) {
                grid[temp_row][temp_col].counter = 0;
                next[temp_row][temp_col].counter = 0;
                grid[temp_row][temp_col].value = 1;
                next[temp_row][temp_col].value = 1;
              } 
            } else if (distante == 1.5) {
              let casual = floor(random(2));
              if (casual == 0) {
                grid[temp_row][temp_col].counter = death_time + 5;
                next[temp_row][temp_col].counter = death_time + 5;
              } else {

              }
            }
          }
        }
      }
    }
  }
}