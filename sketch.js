var dog1,dog1Img;
var dog2,dog2Img;
var dog3,dog3Img;
var dog4,dog4Img;
var form,player,game;
var gameState = 0;
var playerCount = 0;
var database;



function preload(){
  dog1Img = loadAnimation("Images/Dog1.png","Images/Dog2.png","Images/Dog3.png","Images/Dog4.png");
  dog2Img = loadAnimation("Images/Dog5.png","Images/Dog6.png","Images/Dog7.png","Images/Dog8.png");
  dog3Img = loadAnimation("Images/Dog9.png","Images/Dog10.png","Images/Dog11.png","Images/Dog12.png");
  dog4Img = loadAnimation("Images/Dog13.png","Images/Dog14.png","Images/Dog15.png","Images/Dog16.png");
}

function setup() {
  createCanvas(1400,800);
  database = firebase.database();
 dog1 = createSprite(400, 200, 50, 50);
 dog1.addAnimation("d1",dog1Img);

 dog2 = createSprite(800,200,50,50);
 dog2.addAnimation("d2",dog2Img);
 dog2.scale = 1.2;

 dog3 = createSprite(400,400,50,50);
 dog3.addAnimation("d3",dog3Img);
 dog3.scale = 0.7;

 dog4 = createSprite(800,400,50,50);
 dog4.addAnimation("d4",dog4Img);

 game = new Game();
 game.start();
}



function draw() {
  background("aqua");  
  drawSprites();
}