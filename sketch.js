
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone
function preload()
{
	boy= loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(1300, 650);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	tree = new Tree (1050,580)
	stone= new Stone(208,425,30)
	ground = new Ground(width/2,600,width,20)
	
	
	
	SlingShot = new Launch(stone.body,{x:208,y:425})
	
	mango1 = new Mango(900,126,60,60)
	mango2 = new Mango(1000,133,60,60)
	mango3 = new Mango(852,260,60,60)
	mango4 = new Mango(968,240,60,60)
	mango5 = new Mango(1139,190,60,60)
	mango6 = new Mango(1082,60,60,60)
	mango7 = new Mango(990,33,60,60)
	
	Engine.run(engine);
  
}


function draw() {
	background(220);
//   rectMode(CENTER);

ground.display()
 image(boy ,200,390,100,200);
 
 SlingShot.show()
tree.display()
stone.display()
mango1.display()

mango2.display()
mango3.display()
mango4.display()
mango5.display()
mango6.display()
mango7.display()
text(mouseX +"," + mouseY,mouseX,mouseY)

detectollision(stone,mango1);
detectollision(stone,mango2);
detectollision(stone,mango3);
detectollision(stone,mango4);
detectollision(stone,mango5);
detectollision(stone,mango6);
detectollision(stone,mango7);

  //drawSprites();
 
}
 


function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased() {
    SlingShot.fly()
 }

 function keyPressed(){
	if(keyCode === 32){
	  Matter.Body.setPosition(stone.body,{x:208, y:425});
	  SlingShot.attach(stone.body);
	}
}
function detectollision(lstone,lmango){
// 	var collision = Matter.SAT.collides(lstone,lmango);
// 	if(collision.collided){
// 		console.log("collided");
// 		Matter.Body.setStatic(lmango,false);	
// 	}
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
console.log(distance)
console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }