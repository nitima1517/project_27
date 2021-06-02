
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1200, 750);


	engine = Engine.create();
	world = engine.world;

	roof =new Roof(width/2,height/4,width/7,20);
	roof.shapeColor = ("red");
	
	bob1 = new Bob(480,500,50);
	bob2 = new Bob(530,500,50);
	bob3 = new Bob(580,500,50);
	bob4 = new Bob(630,500,50);
	bob5 = new Bob(680,500,50);

	rope1 = new Rope(bob1.body, roof.body, 50*2, 0);
	rope2 = new Rope(bob2.body, roof.body, 50*2, 0);
	rope3 = new Rope(bob3.body, roof.body, 50*2, 0);
	rope4 = new Rope(bob4.body, roof.body, 50*2, 0);
	rope5 = new Rope(bob5.body, roof.body, 50*2, 0);

	Engine.run(engine);

	keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

 // rope1(bird.body.position.x, bird.body.position.y, log6.body.position.x, log6.body.position.y);
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:85})
	}
}

