function setup() {
    createCanvas(800, 800);
  }

let L_1 = 700;
let h_2 = 160;
let right_x = 190;
let left_x = 140;
let bott_m = 100;
let plane_top_y = L_1/2-bott_m*2;
let plane_bott_y = L_1/2-bott_m;
let n = 7;
let b = L_1-left_x;
let c = L_1-right_x;

function draw() {
	let a = dist(-left_x, -h_2, right_x, -h_2);
	background(30);
	push();
	strokeWeight(1);
	rectMode(CENTER);
	translate(400,400);
	rect(0,0,800,800);
	pop(); 

    translate(400,400);
    stroke(100);
	strokeWeight(4);
	point(0,350); // test point

    rectMode(CENTER);
    strokeWeight(4);
    noFill();
    rect(0,0,L_1,L_1);

    strokeWeight(0.5);
	quad(-left_x,L_1/2-bott_m,right_x,L_1/2-bott_m,right_x,-h_2, -left_x,-h_2);

	strokeWeight(0.5);
    line(-left_x,L_1/2-bott_m, -L_1/2,L_1/2); // down left
	line(right_x,L_1/2-bott_m, L_1/2,L_1/2); // down right
	line(-left_x,-h_2, -L_1/2, -L_1/2); // up left
	line(right_x,-h_2, L_1/2, -L_1/2); // up right

	
	push();
	fill(255,0,255);
	strokeWeight(3);
	stroke(0, 255, 204);
	circle(27, 120, a-100);
	pop();

	push();
	fill(40, 0, 70);
	quad(-L_1/2, plane_bott_y,L_1/2, plane_bott_y,right_x, plane_top_y,-left_x, plane_top_y);
	pop();

	// circle shadow
	push();
	noStroke();
	fill(255,0,255,5);
	for (i = 1; i <= 70; i++) {
		circle(27, 120, (a-40)-i*4);
	}
	pop();


	push();
	strokeWeight(3);
	stroke(0, 255, 204);

	line(-left_x,plane_top_y, -L_1/2, plane_bott_y);
	for (i = 1; i <= n; i++) {
		line(-left_x+i*a/n,plane_top_y, -L_1/2 + i*L_1/(n), plane_bott_y);
	}
	let dx_l = b/n-50;
	let dx_r = c/n-50;
	let dy = bott_m/n; 
	line(-L_1/2, plane_bott_y, L_1/2, plane_bott_y);
	for (i = 1; i <= n-1; i++) {
		line(-L_1/2+i*dx_l, plane_bott_y-i*(dy),
		L_1/2-i*dx_r, plane_bott_y-i*(dy));
	}
	line(-left_x, plane_top_y, right_x, plane_top_y);
	pop();

	push();
	stroke(0, 255, 0);
	strokeWeight(3);
	arc(-L_1/2+3.7*dx_l, plane_bott_y-3.7*(dy), 160, 300, PI-0.45, 2*PI-0.45);

	line(-L_1/2+2*dx_l, plane_bott_y-2*(dy),-L_1/2+2*dx_l, 82);
	line(-L_1/2+3*dx_l, plane_bott_y-3*(dy),-L_1/2+3*dx_l, 52);
	line(-L_1/2+4*dx_l, plane_bott_y-4*(dy),-L_1/2+4*dx_l, 48);
	line(-L_1/2+5*dx_l, plane_bott_y-5*(dy),-L_1/2+5*dx_l, 67);

	rotate(PI);
	let b2 = L_1-left_x;
	let bott_m2 = 82;
	let dx_l2 = b2/n-50;
	let dx_r2 = c/n-50;
	let dy2 = bott_m2/n;
	
	arc(-L_1/2+3.7*dx_r2, h_2+3.7*(dy2)+50, 110, 250, PI-0.8, 2*PI-0.93, CHORD);

	line(-L_1/2+2*dx_r2, plane_bott_y-2*(dy2)+66,-L_1/2+2*dx_r2, 165);
	line(-L_1/2+3*dx_r2, plane_bott_y-3*(dy2)+51,-L_1/2+3*dx_r2, 134);
	line(-L_1/2+4*dx_r2, plane_bott_y-4*(dy2)+35,-L_1/2+4*dx_r2, 130);
	line(-L_1/2+5*dx_r2, plane_bott_y-5*(dy2)+20,-L_1/2+5*dx_r2, 149);

	let somex1 = -L_1/2+5*dx_r2;
	let somey1 = plane_bott_y-5*(dy2)+20;
	let somex2 = -L_1/2+4*dx_r2;
	let somex3 = -L_1/2+3*dx_r2;
	let somex4 = -L_1/2+2*dx_r2;
	let somey2 = plane_bott_y-4*(dy2)+35;
	let somey3 = plane_bott_y-3*(dy2)+51;
	let somey4 = plane_bott_y-2*(dy2)+66;

	line(somex1, somey1, -90,somey1);
	line(somex2, somey2, 90,somey2);
	line(somex3, somey3, 20,somey3);
	line(somex4, somey4, 200,somey4);
	line(somex4-11, somey4+15, -160,somey4+15);
	line(somex1+19, somey1-19, -20,somey1-19);

	line(-90, somey1-60, -90,somey1);
	line(90, somey2-20, 90,somey2);
	line(20, somey3-95, 20,somey3);
	line(200, somey4-60, 200,somey4);
	line(-160, somey4+15-55, -160,somey4+15);
	line(somex1+19, somey1-19, -20,somey1-19);

	pop();

	push();
	rotate(-PI/28);
	strokeWeight(2);
	stroke(255,0,255);
	fill(20);
	ellipse(right_x+80, 40, 55, 80);
	pop();
}
