
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(400,400,30);
	bob2 = new Bob(340,400,30);
	bob3 = new Bob(280,400,30);
	bob4 = new Bob(460,400,30);
	bob5 = new Bob(520,400,30);
	roof1 = new Roof(405,200,350,30);
	rope1 = new Rope(bob1.body, roof1.body,-5,0);
	rope2 = new Rope(bob2.body, roof1.body,-65,0);
	rope3 = new Rope(bob3.body, roof1.body,-125,0);
	rope4 = new Rope(bob4.body, roof1.body, 55,0);
	rope5 = new Rope(bob5.body, roof1.body, 115,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope1.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode == LEFT_ARROW){
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-30,y:-30});
	}
}

