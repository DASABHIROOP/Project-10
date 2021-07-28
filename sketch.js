var seaImage,shipImage,sea,ship;
function preload()
{
  seaImage = loadImage("sea.png");
  shipImage = loadImage("ship-1.png");
}

function setup()
{
  createCanvas(400,400);
  sea = createSprite(200,200,400,400);
  sea.addImage(seaImage);
  sea.scale = 0.5;
  sea.velocityX = 5;

  ship = createSprite(200,250);
  ship.addImage(shipImage);
  ship.scale = 0.2;
}
function draw() {
  background(0);
   sea.velocityX = 3;
   //code to reset the background 
   if(sea.x < 0){
      sea.x = sea.width/8; 
  } 
  drawSprites(); 
}