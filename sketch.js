// loosingggggg
var sadface,sadimg;
//Winning
var HMusk,happyimg,Wdone,goodimg;
//car Img
var ModelX,ModelXimg;
/////////car vars
var car, carfimg,carrimg,carlimg,carbimg;
//////vertical road vars
var road1,road2,road3,roadimg;
///horizontal road vars
var troad1,troad2,troadimg;
///parking vars
var pbumper,rightl,leftl,backl,parkingimg,parkingBG,parkingsign;
/// Restriction/instructions signs vars
var parkingh,parkinghimg,nocar,nocarimg;
///VERTICAL ROAD CRASH BUMPERS
var BrightBumper,BleftBumper,TrightBumper,TleftBumper,vrender,brender;
///Horizontal Road Crash Bumpers
var topLeft,topRight,BottomRight,BottomRRight,BottomLeft,lrender,Rrender;


function preload(){
 //losing
 sadimg=loadImage("SAD.png")
  //winning
 happyimg=loadImage("HappyMusk.png")
 goodimg=loadImage("welldone.png")
  //car img load
ModelXimg=loadImage("ModelX.png")
  //car
carfimg=loadImage("carfront.png");
carrimg=loadImage("carright.png");
carlimg=loadImage("carleft.png");
carbimg=loadImage("carback.png");
///vertical road
roadimg=loadImage("road.jpg");
///horizontal road
troadimg=loadImage("rotated road.webp");
///parking images
parkingimg=loadImage("parkin.png");
parkinghimg=loadImage("right parking.png");
///restrictions
nocarimg=loadImage("noCAR.png");
}
function setup() {
  createCanvas(1500,850);
  //////Vertical Road
    road1=createSprite(500,425,80,80)
    road1.addImage("roadimg",roadimg);
    road1.scale=0.65
    road2= createSprite(500,660,80,80)
    road2.addImage("roadimg",roadimg)
    road2.scale=0.65;
    road3=createSprite(500,70,80,80)
    road3.addImage("roadimg",roadimg)
    road3.scale=0.65;
   //////horizontal road
    troad1=createSprite(178,325,80,80)
    troad1.addImage("troadimg",troadimg);
    troad1.scale=0.5;
    troad2=createSprite(824,325,80,80)
    troad2.addImage("troadimg",troadimg)
    troad2.scale=0.5
    troad3=createSprite(1275,325,80,80)
    troad3.addImage("troadimg",troadimg)
    troad3.scale=0.5
   //////parking spot sprites
   parkingBG=createSprite(1125,604,240,325)
   leftl=createSprite(1000,600,10,350);
   leftl.shapeColor=(214, 215, 210);
   rightl=createSprite(1250,600,10,350);
   rightl.shapeColor=(214, 215, 210);
   backl=createSprite(1125,770,250,10);
   backl.shapeColor=(214, 215, 210)
   parkingsign=createSprite(1125,550,10,10)
   parkingsign.addImage("parkingimg",parkingimg)
   parkingsign.scale=0.50;
   pbumper=createSprite(1125,650,225,10)
   pbumper.shapeColor=("black")
   pbumper.visible=false
  /////// Help 
parkingh=createSprite(500,200,30,30)
parkingh.addImage("parkinghimg",parkinghimg)
parkingh.scale=0.07
//////restriction
nocar = createSprite(200,325,80,80);
nocar.addImage("nocarimg",nocarimg)
nocar.scale=0.3;


//Vertical Crash BUMPERS
BrightBumper=createSprite(600,700,10,510)
BrightBumper.shapeColor=("yellow");
BleftBumper=createSprite(400,700,10,510)
BleftBumper.shapeColor=("yellow");
TrightBumper=createSprite(600,60,10,300)
TrightBumper.shapeColor=("yellow");
TleftBumper=createSprite(400,60,10,300)
TleftBumper.shapeColor=("yellow");
vrender=createSprite(500,5,190,10)
vrender.shapeColor=("grey");
vrender.visible=false
brender=createSprite(500,845,190,10)
brender.visible=false;
//////Horizontal Crash Bumpers
topLeft=createSprite(160,225,500,5)
topLeft.shapeColor=("white")
topRight=createSprite(1050,225,905,5)
topRight.shapeColor=("white")
BottomRight=createSprite(795,426,400,5)
BottomRight.shapeColor=("white")
BottomRRight=createSprite(1450,426,400,5)
BottomRRight.shapeColor=("white")
BottomLeft=createSprite(160,426,500,5)
BottomLeft.shapeColor=("white")
Rrender=createSprite(1495,325,5,200)
Rrender.visible=false
lrender=createSprite(5,325,5,200)
lrender.visible=false
//////ModelXimg
ModelX=createSprite(200,700,30,30)
ModelX.addImage("ModelXimg",ModelXimg)
ModelX.scale=0.3;
//car
car=createSprite(500,700,100,100);
car.addImage("carfimg",carfimg);
car.setCollider("rectangle", 0, 0, 250,300);
car.scale=0.3;
///Winning
HMusk=createSprite(500,500,0.01,0.01)
HMusk.addImage("happyimg",happyimg)
HMusk.scale=0.5;
HMusk.visible=false;
Wdone=createSprite(900,400,0.01,0.01)
Wdone.addImage("goodimg",goodimg)
Wdone.visible=false;
//losing
sadface=createSprite(750,400,0.01,0.01)
sadface.addImage("sadimg",sadimg);
sadface.visible=false;
}

function draw() {
  background("green");  


if(keyWentDown("UP_ARROW")){
car.velocityY=-3
car.addImage("carfimg",carfimg)
}
if(keyWentUp("UP_ARROW")){
car.velocityY=0;
}
if(keyWentDown("DOWN_ARROW")){
car.velocityY=3;
car.addImage("carfimg",carbimg)
}
if(keyWentUp("DOWN_ARROW")){
car.velocityY=0
}
if(keyWentDown("RIGHT_ARROW")){
car.velocityX=3;
car.addImage("carfimg",carrimg)
}
if(keyWentUp("RIGHT_ARROW")){
  car.velocityX=0
}
if(keyWentDown("LEFT_ARROW")){
  car.velocityX=-3;
  car.addImage("carfimg",carlimg);

}
if(keyWentUp("LEFT_ARROW")){
  car.velocityX=0
}
//Winning
if(car.isTouching(pbumper)){
HMusk.visible=true;
textSize(40)
fill("black")
text("More Levels Coming Soon!!",900,100)
Wdone.visible=true;
}
///Losing if statements
if(car.isTouching(BrightBumper)){
sadface.visible=true;
fill("black")
textSize(30)
text("To Try Again At Impressing Elon Musk Again Refresh Your Page",625,100)
}
if(car.isTouching(BleftBumper)){
  sadface.visible=true;
  fill("black")
  textSize(30)
  text("To Try Again At Impressing Elon Musk Again Refresh Your Page",625,100)
}
if(car.isTouching(TrightBumper)){
  sadface.visible=true;
  fill("black")
  textSize(30)
  text("To Try Again At Impressing Elon Musk Again Refresh Your Page",625,100)
}
if(car.isTouching(TleftBumper)){
  sadface.visible=true;
  fill("black")
  textSize(30)
  text("To Try Again At Impressing Elon Musk Again Refresh Your Page",625,100)
}
if(car.isTouching(vrender)){
  sadface.visible=true;
  fill("black")
  textSize(30)
  text("To Try Again At Impressing Elon Musk Again Refresh Your Page",625,100)
}
if(car.isTouching(brender)){
  sadface.visible=true;
  fill("black")
  textSize(30)
  text("To Try Again At Impressing Elon Musk Again Refresh Your Page",625,100)
}
if(car.isTouching(topLeft)){
  sadface.visible=true;
  fill("black")
  textSize(30)
  text("To Try Again At Impressing Elon Musk Again Refresh Your Page",625,100)
}
if(car.isTouching(topRight)){
  sadface.visible=true;
  fill("black")
  textSize(30)
  text("To Try Again At Impressing Elon Musk Again Refresh Your Page",625,100)
}
if(car.isTouching(BottomRight)){
  sadface.visible=true;
  fill("black")
  textSize(30)
  text("To Try Again At Impressing Elon Musk Again Refresh Your Page",625,100)
}
if(car.isTouching(BottomRRight)){
  sadface.visible=true;
  fill("black")
  textSize(30)
  text("To Try Again At Impressing Elon Musk Again Refresh Your Page",625,100)
}
if(car.isTouching(BottomLeft)){
  sadface.visible=true;
  fill("black")
  textSize(30)
  text("To Try Again At Impressing Elon Musk Again Refresh Your Page",625,100)
}
if(car.isTouching(Rrender)){
  sadface.visible=true;
  fill("black")
  textSize(30)
  text("To Try Again At Impressing Elon Musk Again Refresh Your Page",625,100)
}
if(car.isTouching(lrender)){
  sadface.visible=true;
  fill("black")
  textSize(30)
  text("To Try Again At Impressing Elon Musk Again Refresh Your Page",625,100)
}
textSize(20)
fill("black")
text("Hey There, Elon Musk Needs You to Park",10,500)
text("His Tesla Model 3 legally at the nearest",10,525)
text("parking Space. DO NOT crash or He Will",10,550)
text("be Angry. He Might Give You A Free Tesla!",8,575)

text("Use The Arrow Keys On your KeyBoard To Drive The Car ",630,800)



drawSprites();
}