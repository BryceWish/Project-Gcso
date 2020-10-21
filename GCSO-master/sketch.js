

var ccc,wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)


	ccc=createSprite(50, 200, 50,50);   

	ccc.velocityX = speed;

	ccc.shapeColor=color(255);


  
  	wall=createSprite(1500,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-ccc.x < (ccc.width+wall.width)/2)
  {
  	ccc.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		ccc.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		ccc.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		ccc.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}


