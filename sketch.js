function setup() {
  createCanvas(400, 400)
  x_pos = 200;
  y_pos = 200;
  Score = 0
  timer = 60
  x_pos = 200
  y_pos = 200
  
}

function draw() {
  background(240);
  
  textAlign(CENTER, CENTER);
  textSize(25);
  text("Score:", 40, 15);
  text(Score, 96, 17);
  text("Timer:", 40, 40);
  text(timer, 96, 42)
  frameRate(1);
  Timer();
  strokeWeight(7);
  point(x_pos, y_pos);
}

function mousePressed() {
  
  if (mouseIsPressed && ((x_pos - 5) <= mouseX && mouseX <= (x_pos + 5) ) && ((y_pos - 5) <= mouseY && mouseY <= (y_pos + 5))){
    
    Score += 1;
    x_pos = random(50, 250);
    y_pos = random(50, 250);
  }
}
  
function Timer(){

  if (timer == 0){
    text("Score:", 170, 200);
    text(Score, 225, 201);
    x_pos = -5;
    y_pos = -5;
  } else {
    timer -= 1;
  }
}












