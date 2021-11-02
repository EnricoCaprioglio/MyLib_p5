// define functions
function create_grid(row, col) {
  let arr = new Array(row);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(col);
  }
  return arr;
}

// classes
class Thing {
    constructor(y_pos, x_pos, temp_value, temp_counter = 0) {
      this.x = x_pos;
      this.y = y_pos;
      this.value = temp_value;
      this.friends = 0;
      this.counter = temp_counter;
    }
    show() {
      strokeWeight(0.05);
      if(this.counter >= death_time) {
        let death_color = floor(this.counter-death_time);
        if (death_color >= death_colors.length) {
          death_color = death_colors.length-1;
        }
        fill(death_colors[death_color]);
        stroke(255);
        rect(this.x, this.y, resolution - 1, resolution - 1);
      }
      else {
        if (this.value == 1 && this.counter < n_colors - 1) {
          fill(colors1[this.counter]);
          stroke(0);
          rect(this.x, this.y, resolution - 1, resolution - 1);
        } else if (this.value == 1 && this.counter >= n_colors - 1) {
          fill(color(17));
        } else if (this.value == 0) {
          fill(10);
          stroke(255);
          rect(this.x, this.y, resolution - 1, resolution - 1);
        }
      }
    }
  
    // method that returns the sum of neighbours' opinion
    neighbours(friends, x, y) {
      let sum = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          let temp_row = (y + i + row) % row;
          let temp_col = (x + j + col) % col;
          sum += friends[temp_row][temp_col].value;
        }
      }
      sum -= this.value;
      this.friends = sum;
    }
  
    update() {
      if (this.counter >= death_time) {
        this.counter += 0.5;
      }
      else {
        if (this.value == 0 && this.friends == 3 && this.counter < death_time) {
        this.counter += 1;
        this.value = 1;
        } else if (this.value == 1 && (this.friends < 2 || this.friends > 3) && this.counter < death_time) {
          this.value = 0;
        } else if (this.value == 1 && (this.friends == 2 || this.friends == 3) && this.counter < death_time) {
          this.counter += 1;
        } else {
          this.value = this.value;
      }
    }
  }
}