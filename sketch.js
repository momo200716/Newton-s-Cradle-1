
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(100,80,20);
	bob2 = new Bob(140,80,20);
	bob3 = new Bob(220,80,20);
	bob4 = new Bob(220,80,20);

	//Create the Bodies Here.

	var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    //var option = {
     //   restitution: 0.8
   // }

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
bob1.display();
bob2.display();
bob3.display();
bob4.display();

  drawSprites();
 
}



