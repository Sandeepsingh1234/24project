
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
	
var world;
var paper1,dustbin1,ground1

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
dustbin1=new dustbin(1200,650)
paper1=new paper(200,450,40)
ground1= new ground(800,670,2000,20)
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
 paper1.display();
dustbin1.display();
ground1.display();
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





