//creates ground
var ground;
var upperGround;
//creates players and starts game
var form, player;
var game;

function setup() {
  createCanvas(800,400);

  ground = new Ground(400, 325, 800, 150);
  upperGround = new Ground(400, 265, 800, 30);
  
  game = new Game();
  game.start();
}

function draw() {
  background(173, 216, 230);  
  drawSprites();
  
  ground.display(rgb(54, 34, 4));
  upperGround.display(rgb(19, 80, 0));
}