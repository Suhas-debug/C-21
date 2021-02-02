
var bullet,wall;
var speed,weight;
 var thickness


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,5);
 wall=createSprite(1500,200,60,thickness,height/2)
 wall.shapeColor=(80,80,80)
 speed=random(223,321);
weight=random(30,51);
bullet.velocityX = speed;
thickness=random(22,83)
}

function draw() {
  background(255,255,255);  
  
  if(wall.x - bullet.x < (bullet.width+wall.width)/2)
  {
      bullet.velocityX=0;
      var deformation=0.5 * weight * speed * speed/22509;
      if(deformation>180)
      {
          bullet.shapeColor=color(255,0,0);
      }
  }   

  if(deformation<180 && deformation>100)
  {
       bullet.shapeColor=color(230,230,0);
  }
  
  if(deformation<100)
  {
    bullet.shapeColor=color(0,255,0)
  }
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();



}