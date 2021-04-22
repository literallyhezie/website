var setup = function () {
  createCanvas(2000, 2000);
  //   background(100);
  //   noLoop();
};

var draw = function () {
  for (let index = 0; index < 1; index++) {
    fill(random(255), random(255), random(255));
    ellipse(600, 365, 2500);
  }
};
