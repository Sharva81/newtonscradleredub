
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(400, 100, 300, 50);

	bob1 = new bob(300,350, 50);
	bob2 = new bob(350,350, 50);
	bob3 = new bob(400,350, 50);
	bob4 = new bob(450,350, 50);
	bob5 = new bob(500,350, 50);

	chain1 = new chain(bob1.body,roof1.body,-50*2,0);
	chain2 = new chain(bob2.body,roof1.body,-25*2,0);
	chain3 = new chain(bob3.body,roof1.body,0*2,0);
	chain4 = new chain(bob4.body,roof1.body,25*2,0);
	chain5 = new chain(bob5.body,roof1.body,50*2,0);

	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode == UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 


