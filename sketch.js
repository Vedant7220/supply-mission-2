var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var redblock1,redblock2,redblock3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redblock1=createSprite(440, 640, 10, 40);
	redblock1.shapeColor="red";
	
	redblock2=createSprite(300, 640, 10, 40);
	redblock2.shapeColor="red";
	
	redblock3=createSprite(370, 655, 140, 10);
    redblock3.shapeColor="red";



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();

 
}

function keyPressed() {
 if (keyDown === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
	
    packageBody.restitution=0.5;
    
  }
}



