var bg,sleep,brush,gym,gym1,eat,drink,move,bath;
var astronaut




function preload() {
    //load images 
    bg=loadImage("iss.png")
    sleep=loadImage("sleep.png")
    brush=loadImage("brush.png")

    gym=loadAnimation("gym12.png","gym11.png")
    gym1=loadAnimation("gym1.png","gym2.png")
    eat=loadAnimation("eat1.png","eat2.png")
    drink=loadAnimation("drink1.png","drink2.png")
    move=loadAnimation("move.png")
    bath=loadAnimation("bath1.png","bath2.png")
}

function setup(){
    createCanvas(400,400);
    //create Astronaut sprite 
  astronaut = createSprite (300,230)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1
}

function draw() {
 background(bg);
 drawSprites();

 textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Bathing",20, 85);
  text("Right Arrow = Eating",20, 100);
  text("M key = Moving",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
 
 if(keyDown("UP_ARROW")){
     astronaut.addAnimation("brushing",brush)
     astronaut.changeAnimation("brushing")
     astronaut.velocityX=0
     astronaut.velocityY=0
     astronaut.y = 350;
 }

if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym,gym1);
    astronaut.changeAnimation("gymming");
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    astronaut.y = 350;
     }
    
    
 if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    astronaut.y = 350;
                }

if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.velocityX=0;
    astronaut.velocityY=0;
    astronaut.y = 350;
}

if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
}
    
drawSprites();
}
