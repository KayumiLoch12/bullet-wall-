var  wall, thickness;
var  bullet ,wheight, speed;


function setup() {
  createCanvas(800,400);

speed = random(55,90);
weight = random(400,1500);
thickness = random(22, 83);

bullet = createSprite(50, 200, 20, 5);
bullet.velocityX = speed;
bullet.shapeColor = "pink";

  wall = createSprite(750,200,thickness,height/2);
  wall.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 *  weight * speed * speed/(thickness * thickness * thickness );
    
    if (damage>10){
    wall.shapeColor = color(255,0,0) 
    }
    if(damage<10){
    wall.shapeColor = color(0,255,0);
    }
   
 // bullet.velocityX = speed;
//if(wall.x - bullet.x < (bullet.width/2 + wall.width/2)){
  //bullet.velocityX = 0;

//var deformation = 0.5 * weight * speed * speed/22509;

//if (deformation>180 ){
  //wall.shapeColor = wall (255,0,0);
  
//}
//if (deformation<180 && deformation>100){
  
  //wall.shapeColor = color (230, 230,0);
//}
//if (deformation<100){
  //wall.shapeColor = color (255,0,0);
//}

//bullet.collide(wall)

  

  drawSprites();


}
  

function hasCollided(bullet, wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge){

    return true
  }
  return false;






}
}





