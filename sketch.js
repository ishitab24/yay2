const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var R1,R2,R3,R4,R5;
var B1,B2,B3,B4,B5;
var world;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
    var ball_options={
		isStatic:false,
		restitution:1.1,
		friction:1,
		density:0.7
	}
	B1=Bodies.circle(320,380,20,ball_options);
	World.add(world,B1);

	B2=Bodies.circle(360,380,20,ball_options);
	World.add(world,B2);

	B3=Bodies.circle(400,380,20,ball_options);
	World.add(world,B3);

	B4=Bodies.circle(440,380,20,ball_options);
	World.add(world,B4);

	B5=Bodies.circle(480,380,20,ball_options);
	World.add(world,B5);

	R1=new rope(B1,roof,-80,0);

	R2=new rope(B2,roof,-40,0);

	R3=new rope(B3,roof,0,0);

	R4=new rope(B4,roof,40,0);

	R5=new rope(B5,roof,80,0);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#a9ebbe");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  R1.display();
  R2.display();
  R3.display();
  R4.display();
  R5.display();
  //create ellipse shape for multiple bobs here
  fill(78, 140, 181);
  ellipse(B1.position.x,B1.position.y,40);
  fill(78, 140, 181);
  ellipse(B2.position.x,B2.position.y,40);
  fill(78, 140, 181);
  ellipse(B3.position.x,B3.position.y,40);
  fill(78, 140, 181);
  ellipse(B4.position.x,B4.position.y,40);
  fill(78, 140, 181);
  ellipse(B5.position.x,B5.position.y,40);
 
}
function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(B5,{x:0,y:0},{x:50,y:0});
    }
}
//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
