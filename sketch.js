var canvas;
var backgroundImage, car1_img, car2_img, battleground;
var fuelImage, powerCoinImage, lifeImage, obstacle1Image, obstacle2Image;
var blastImage; //C42// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, pl1, pl2, fuels, powerCoins, obstacles;
var pls = [];
var bullets 

function preload() {
  backgroundImage = loadImage("./assets/bg.jpg");
  car1_img = loadImage("./assets/h1.png");
  car2_img = loadImage("./assets/h2.png");
  battleground = loadImage("./assets/bgg.jpg");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  blastImage = loadImage("./assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  bullets = new Group();
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
