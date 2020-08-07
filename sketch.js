var helicopterIMG, helicopterSprite, packageSprite,packageIMG,r1,r2,r3,rs1,rs2,rs3;
var packageBody,ground
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

	rs1=createSprite(400,660,80,10);
	rs1.shapeColor=color(255,0,0);

	rs2=createSprite(355,635,10,60);
	rs2.shapeColor=color(255,0,0);

	rs3=createSprite(445,635,10,60);
	rs3.shapeColor=color(255,0,0);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, 800, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	r1=Bodies.rectangle(400,660,80,10,{isStatic:true});
	World.add(world,r1);

	r2=Bodies.rectangle(355,635,10,60,{isStatic:true});
	World.add(world,r2);

	r3=Bodies.rectangle(445,635,10,60,{isStatic:true});
	World.add(world,r3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
Matter.Body.setStatic(packageBody,false);
  }

}



