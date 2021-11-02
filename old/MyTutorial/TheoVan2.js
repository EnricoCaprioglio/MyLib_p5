c_1 = color(135,137,153);
c_2 = color(132,132,137);

function float2int(value) {
    return value | 0;
}

// 1
// set new origin
let O_x_0 = width/2;
let O_y_0 = width/2;
let d_1 = (sqrt(2*O_x_0*2*O_y_0*2))/3; // a third of diagonal
let d_2 = d_1/(sqrt(2));

let x1 =  O_x_0 - d_2*2;
let y1 = O_y_0 - d_2;
let x2 = O_x_0 - d_2;
let y2 = O_y_0 - d_2*2;
let x3 = O_x_0;
let y3 = O_y_0 - d_2;
let x4 = O_x_0 - d_2;
let y4 = O_y_0;

// 2
let O_x_1 = O_x_0/2;
let O_y_1 = O_y_0/2;
let d_4 = (sqrt(2*O_x_1*2*O_y_1*2))/3;
let d_5 = d_4/(sqrt(2));
let x1_1 =  O_x_1 - d_5*2;
let y1_1 = O_y_1 - d_5;
let x2_1 = O_x_1 - d_5;
let y2_1 = O_y_1 - d_5*2;
let x3_1 = O_x_1;
let y3_1 = O_y_1 - d_5;
let x4_1 = O_x_1 - d_5;
let y4_1 = O_y_1;

// 3
let O_x_2 = O_x_1/2;
let O_y_2 = O_y_1/2;
let d_7 = (sqrt(2*O_x_2*2*O_y_2*2))/3;
let d_8 = d_7/(sqrt(2));

let x1_2 =  O_x_2 - d_8*2;
let y1_2 = O_y_2 - d_8;
let x2_2 = O_x_2 - d_8;
let y2_2 = O_y_2 - d_8*2;
let x3_2 = O_x_2;
let y3_2 = O_y_2 - d_8;
let x4_2 = O_x_2 - d_8;
let y4_2 = O_y_2;

// 4
let O_x_3 = O_x_2/2;
let O_y_3 = O_y_2/2;
let d_10 = (sqrt(2*O_x_3*2*O_y_3*2))/3;
let d_11 = d_10/(sqrt(2));

let x1_3 =  O_x_3 - d_11*2;
let y1_3 = O_y_3 - d_11;
let x2_3 = O_x_3 - d_11;
let y2_3 = O_y_3 - d_11*2;
let x3_3 = O_x_3;
let y3_3 = O_y_3 - d_11;
let x4_3 = O_x_3 - d_11;
let y4_3 = O_y_3;

let x_test = x2;
let y_test = y2;

function down_right(x,y,vel) {
    point(x,y);
    x = x + vel;
    y = y + vel;
}

function down_left(x,y,vel) {
    point(x,y);
    x = x - vel;
    y = y + vel;
}

function up_right(x,y,vel) {
    point(x,y);
    x = x + vel;
    y = y - vel;
}

function up_left(x,y,vel) {
    point(x,y);
    x = x - vel;
    y = y - vel;
}

function setup() {
    createCanvas(1010/2, 1010/2);
    // saveCanvas('myCanvas', 'jpg');
    }
    
function draw() {
    push();
    background(c_2);

    // test, backrgound square
    strokeWeight(1);
    stroke(100);
    fill(c_2);
    quad(0,0, width,0, width,width, 0,width);

    // back squares
    strokeWeight(1);
    stroke(100);
    // 1
    fill(c_1);
    rect(0,0,width/2, width/2);
    //2
    fill(c_2);
    rect(0,0, width/4,width/4);
    // 3
    fill(c_1);
    rect(0,0,width/8, width/8);

    // front squares
    stroke(255);
    let strokew = 1;
    strokeWeight(strokew);
    fill(17);

    // 1
    translate(O_x_0, O_y_0);
    // set some values
    quad(x1 + strokew, y1, x2, y2+strokew, x3 - strokew, y3, x4, y4 - strokew);

    // 2
    translate(-O_x_1, -O_y_1);
    quad(x1_1 + strokew, y1_1, x2_1, y2_1+strokew, x3_1 - strokew, y3_1, x4_1, y4_1 - strokew);

    // 3
    translate(-O_x_2, -O_y_2);
    quad(x1_2 + strokew, y1_2, x2_2, y2_2+strokew, x3_2 - strokew, y3_2, x4_2, y4_2 - strokew);

    // 4
    translate(-O_x_3, -O_y_3);
    quad(x1_3 + strokew, y1_3, x2_3, y2_3+strokew, x3_3 - strokew, y3_3, x4_3, y4_3 - strokew);
    pop();

    // add border to whole frame
    strokeWeight(1);
    stroke(100);
    noFill();
    quad(0+1,0+1, width-1,0+1, width-1,width-1, 0+1,width-1);

    translate(width/2,width/2);
    strokeWeight(20);
    stroke(255);
    ball = point(x_test,y_test);

    for (i = 1; i <= 1000; i++) {
        

    }


    // if (x_test > x2-1 && y_test > y2-1 && y_test < y3) {
    //     x_test = x_test + 1;
    //     y_test = y_test + 1;
    // }
    // if (x_test <= x3+1 && y_test > y3-1 ) {
    //     x_test = x_test - 1;
    //     y_test = y_test + 1;
    // }

}