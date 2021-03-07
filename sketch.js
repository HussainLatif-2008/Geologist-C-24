
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer
var stone1,stone2;
var rubber1,rubber2,rubber3,rubber4,rubber5;
var plane;

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer= new Hammer(200,200,50,100);
	
	stone1= new Stone(200,200,100,100);
	stone2= new Stone(700,200,100,100);
	plane= new Plane(600,500,1200,30);
	rubber1= new Rubber(400,200,30,30);
	rubber2= new Rubber(440,200,30,30);
	rubber3= new Rubber(480,200,30,30);
	rubber4= new Rubber(520,200,30,30);
	rubber5= new Rubber(560,200,30,30);
      
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("pink");

  hammer.display();
  stone1.display();
  stone2.display();
  plane.display();
  rubber1.display();
  rubber2.display();
  rubber3.display();
  rubber4.display();
  rubber5.display();

  drawSprites();
 
}



