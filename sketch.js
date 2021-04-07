var dw, dh;
var w1, w2,w3,w4,w5;
var thief, cop1, cop2;
function preload(){
  thiefImg=loadImage("Images/Thief.png");
  cop1Img=loadImage("Images/Cop.png");
  cop2Img=loadImage("Images/Cop.png");
}
function setup(){
  dw=displayWidth;
  dh=displayHeight;
  createCanvas(dw-20, dh-40);
  thief=createSprite(dw/2-630,dh/2-360,10,10);
  thief.addImage("thief", thiefImg);
  thief.scale=.2;
  cop1=createSprite(dw-20, dh/2-360,10,10);
  cop1.addImage("cop", cop1Img);
  cop1.scale=.08;
  cop2=createSprite(dw-30, dh/2-360,10,10);
  cop2.addImage("cop", cop2Img);
  cop2.scale=.08;
  w1=createSprite(dw/2-570,dh/2-156,dw/75,dh/3);
  w2=createSprite(dw/2-645,dh/2-300,dw/10,dh/75);
  w3=createSprite(dw/2-400,dh/2-380,dw/6,dh/75);
  //w1=createSprite();
  //w1=createSprite();

  
}

function draw(){
  background("black");


  drawSprites();

}