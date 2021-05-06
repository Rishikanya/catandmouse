var bg,backgroundImage;
var cat, cat1Img,cat2Img,cat3Img;
var mouse,mouse1Img,mouse2Img,mouse3Img;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    cat1Img=loadAnimation("images/cat1.png");
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png");
    cat3Img=loadAnimation("images/cat4.png");
    mouse1Img=loadAnimation("images/mouse1.png");
    mouse2Img=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Img=loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    cat=createSprite(870,600);
    cat.addAnimation("catSleeping",cat1Img);
    cat.scale=0.2;
    mouse=createSprite(200,600);
    mouse.addAnimation("mouseStanding",mouse1Img);
    mouse.scale=0.15;

   // background = createSprite(0,0,0,0);
  //background.addImage(backgroundImage);
    //create tom and jerry sprites here

}

function draw() {
    background(bg);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
      cat.addAnimation("last",cat3Img);
      cat.velocityX=0;
      cat.x=300;
      cat.changeAnimation("last");
      mouse.addAnimation("mlast",mouse3Img);
      mouse.changeAnimation("mlast");
    }


    
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===RIGHT_ARROW){
  mouse.addAnimation("mouseTeasing",mouse2Img);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay=25;

}
if(keyCode===LEFT_ARROW){
  cat.velocityX=-5;
  cat.addAnimation("catRunning",cat2Img);
cat.changeAnimation("catRunning");


}


}
