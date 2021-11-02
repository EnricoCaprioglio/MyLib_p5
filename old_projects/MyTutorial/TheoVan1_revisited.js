function setup() {
    createCanvas(1010/2, 1010/2);
    // saveCanvas('myCanvas', 'jpg');
    }

function test(wid, n, angl, O_x, O_y) {

    c_1 = color(17);
    c_2 = color(25);

    push();
    translate(O_x,O_y);
    // back squares
    stroke(100);
    strokeWeight(1);
    noFill();
    rotate(angl);
    var i;
    // for (i = 1; i <= n; i++) {
    //     if (i%2 == 0) {
    //         fill(c_1);
    //     } else {
    //         fill(80);
    //     }
    //     rect(-wid/2, -wid/2, wid/Math.pow(2,i), wid/Math.pow(2,i));
    // }
    pop();

    push();
    // front squares
    translate(O_x,O_y);
    stroke(255);
    let strokew = 0.3;
    strokeWeight(strokew);
    fill(200);

    let diag_1 = (sqrt(2*wid*wid))/3;
    // let diag_2 = diag_1/(sqrt(2));
    let x1_b = -diag_1/2; 
    let y1_b = 0;
    let x2_b = diag_1/2;
    let y2_b = 0;
    let x3_b = diag_1/2;
    let y3_b = diag_1;
    let x4_b = -diag_1/2;
    let y4_b = diag_1;
    quad(x1_b+strokew, y1_b+strokew, 
        x2_b-strokew,y2_b+strokew, x3_b-strokew,
        y3_b-strokew, x4_b+strokew, y4_b-strokew);

    for (i = 1; i <= n; i++) {
        // if (i%2 == 0) {
        //     fill(c_1);
        // } else {
        //     fill(c_2);
        // }
        fill(17+i*6);

        translate(0,-((sqrt(2*wid*wid))/2)/2);
        new_width = wid/2;
        let diag_2 = (sqrt(2*new_width*new_width))/3;
        let x1_b1 = -diag_2/2; 
        let y1_b1 = 0;
        let x2_b1 = diag_2/2;
        let y2_b1 = 0;
        let x3_b1 = diag_2/2;
        let y3_b1 = diag_2;
        let x4_b1 = -diag_2/2;
        let y4_b1 = diag_2;
        quad(x1_b1+strokew, y1_b1+strokew, 
            x2_b1-strokew,y2_b1+strokew, x3_b1-strokew,
            y3_b1-strokew, x4_b1+strokew, y4_b1-strokew);

        wid = new_width;
    }
    pop();
}

function draw() {

    c_1 = color(50,50,60);
    c_2 = color(40,40,60);
    background(c_2);

    // test, backrgound square
    strokeWeight(1);
    stroke(100);
    fill(17);
    quad(0,0, width,0, width,width, 0,width);

    // back squares
    strokeWeight(0.3);
    stroke(100);
    // 1
    // fill(80);
    fill(25);
    rect(0,0,width/2, width/2);
    //2
    fill(40);
    rect(0,0, width/4,width/4);
    // 3
    fill(50);
    rect(0,0,width/8, width/8);

    // front squares
    stroke(255);
    let strokew = 0.2;
    strokeWeight(strokew);
    fill(20);

    // 1
    // set new origin
    let O_x_0 = width/2;
    let O_y_0 = width/2;
    translate(O_x_0, O_y_0);
    // set some values
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
    quad(x1 + strokew, y1, x2, y2+strokew, x3 - strokew, y3, x4, y4 - strokew);

    // 2
    let O_x_1 = O_x_0/2;
    let O_y_1 = O_y_0/2;
    translate(-O_x_1, -O_y_1);
    let d_3 = (sqrt(2*O_x_1*2*O_y_1*2))/3;
    let d_4 = d_3/(sqrt(2));

    let x1_1 =  O_x_1 - d_4*2;
    let y1_1 = O_y_1 - d_4;
    let x2_1 = O_x_1 - d_4;
    let y2_1 = O_y_1 - d_4*2;
    let x3_1 = O_x_1;
    let y3_1 = O_y_1 - d_4;
    let x4_1 = O_x_1 - d_4;
    let y4_1 = O_y_1;
    quad(x1_1 + strokew, y1_1, x2_1, y2_1+strokew, x3_1 - strokew, y3_1, x4_1, y4_1 - strokew);

    // 3
    let O_x_2 = O_x_1/2;
    let O_y_2 = O_y_1/2;
    translate(-O_x_2, -O_y_2);
    let d_5 = (sqrt(2*O_x_2*2*O_y_2*2))/3;
    let d_6 = d_5/(sqrt(2));

    let x1_2 =  O_x_2 - d_6*2;
    let y1_2 = O_y_2 - d_6;
    let x2_2 = O_x_2 - d_6;
    let y2_2 = O_y_2 - d_6*2;
    let x3_2 = O_x_2;
    let y3_2 = O_y_2 - d_6;
    let x4_2 = O_x_2 - d_6;
    let y4_2 = O_y_2;
    quad(x1_2 + strokew, y1_2, x2_2, y2_2+strokew, x3_2 - strokew, y3_2, x4_2, y4_2 - strokew);

    // 4
    let O_x_3 = O_x_2/2;
    let O_y_3 = O_y_2/2;
    translate(-O_x_3, -O_y_3);
    let d_7 = (sqrt(2*O_x_3*2*O_y_3*2))/3;
    let d_8 = d_7/(sqrt(2));

    let x1_3 =  O_x_3 - d_8*2;
    let y1_3 = O_y_3 - d_8;
    let x2_3 = O_x_3 - d_8;
    let y2_3 = O_y_3 - d_8*2;
    let x3_3 = O_x_3;
    let y3_3 = O_y_3 - d_8;
    let x4_3 = O_x_3 - d_8;
    let y4_3 = O_y_3;
    quad(x1_3 + strokew, y1_3, x2_3, y2_3+strokew, x3_3 - strokew, y3_3, x4_3, y4_3 - strokew);

    let reset_x = O_x_3 + O_x_2 + O_x_1 - O_x_0;
    let reset_y = O_y_3 + O_y_2 + O_y_1 - O_y_0;
    translate(reset_x, reset_y);

    // add border to whole frame
    strokeWeight(1);
    stroke(100);
    noFill();
    quad(0+1,0+1, width-1,0+1, width-1,width-1, 0+1,width-1);

    Big = test(d_1, 6, PI/4.0, width-d_2, width-d_2);
    Medium = test(d_3, 6, PI/4.0, width/2-d_4, width/2-d_4);
    Small = test(d_5, 6, PI/4.0, width/4-d_6, width/4-d_6);
    Smallest = test(d_7, 5, PI/4.0, width/8-d_8, width/8-d_8);

    // testiamo = test(d_1/3, 5, PI/4, width-d_2, width-d_2+120);
}