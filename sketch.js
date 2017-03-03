var x = 1;
var y = 1;

var xspeed = 6;
var yspeed = 2;

var r = 255;
var g = 0;
var b = 0;

function setup() {
  createCanvas(700, 600);

}

function draw() {
  background(255, 0, 0);

  if (x >= 600 || x <= 0) {
    xspeed = -xspeed;
  }


  if (y >= height || y <= 0) {
    yspeed = -yspeed;
  }

  x = x + xspeed;
  y = y + yspeed;


  fill(r, g, b);
  ellipse(x, y, 50, 50);
  


  fill(0, 255, 255);
  rect(600, 0, 100, 600);

}

  function mousePressed() {

    xspeed = xspeed + 1;

    r = random(255);
    g = random(255);
    b = random(255);
  }