  var car,wall;
  var speed,weight;


  function setup() {
    createCanvas( 1600,400 );
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);
  speed=(55,90);
  weight=random(400,1500)

  car.velocityX=speed;

  }

  function draw() {
    background("black");  

    if(wall.x-car.x<(car.width+wall.width)/2)
    {
      car.velocityX=0;
      var defomation=0.5*weight*speed*speed/2
      if(defomation>180)
      {
        car.shapeColor=colour(255,0,0);
    
      }
    
  if(defomation<180 && deformation>100){
    car.shapeColor=color(230,230,0);
  }

  if(deformation>100){
    car.shapeColor=color(0,255,0)
  }

    }
    drawSprites();
  }