var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(200,300,100,100);
  movingRect.shapeColor="red";
  fixedRect=createSprite(400,200,100,50);
  fixedRect.shapeColor="red";
}

function draw() {
  background(255,255,255);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2
    && movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2
    && fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2
    &&movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";
  }
  else { 
        movingRect.shapeColor="red";
       fixedRect.shapeColor="red";
  }
  drawSprites();
}