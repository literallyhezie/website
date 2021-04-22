let canvas = { width: 1400, height: 800 };

let boxes = {
}

var setup = function () {
  createCanvas(canvas.width, canvas.height);

  for (let index = 0; index < 500; index++) {
    boxes.push {x: 100, y:100, w: 150, h:200, s: 5});
};

var draw = function () {
  background(100);

  //   box.x = random(box.x - 10, box.x + 10);
  //   box.y = random(box.x - 10, box.x + 10);
  //   box.w = random(box.x - 10, box.x + 10);
  //   box.h = random(box.x - 10, box.x + 10);

  text("Secret message", canvas.width / 2, canvas.height / 2);

  box.x = random(
    max(box.x - box.s, 0),
    min(box.x + box.s, canvas.width - box.w)
  );
  box.y = random(
    max(box.y - box.s, 0),
    min(box.y + box.s, canvas.height - box.h)
  );

  //   box.x = random(max(box.x - box.s, 0), min(box.x + box.s, canvas.height));
  //   box.x = random(max(box.x - box.s, 0), min(box.x + box.s, canvas.height));

  rect(box.x, box.y, box.w, box.h);
};
