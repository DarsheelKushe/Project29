const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7;
var  block8, block9,block10,block11,block12;
var player;
var ground1, ground2, ground3;

var block13, block14,block15;
var block16;
var sling;
var player;

var ball;
var img;

function preload(){
  img = loadImage("polygon.png");

}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground();
    stand1 = new Stand(590,300,250,10);
    

//level one 
  block1 = new Block(500,275,30,40);
  block2 = new Block(530,275,30,40);
  block3 = new Block(560,275,30,40);
  block4 = new Block(590,275,30,40);
  block5 = new Block(620,275,30,40);
  block6 = new Block(650,275,30,40);
  block7 = new Block(680,275,30,40);


  //level two
  block8 = new Block(530,235,30,40);
  block9 = new Block(560,235,30,40);
  bolck10 = new Block(590,235,30,40);
  block11 = new Block(620,235,30,40);
  block12 = new Block(650,235,30,40);

//leavel three
  block13 = new Block(560,195,30,40);
  block14 = new Block(590,195,30,40);
  block15 = new Block(620,195,30,40);

  //top
  block16 = new Block(590,155,30,40);
  
  

  player = new Player(80,200,40,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  sling = new Chain(this.ball,{x:150, y:160});

}

function draw() {
  background(56,44,44);

  Engine.update(engine);

  fill("lightyellow");
ground.display();
stand1.display();
  
  strokeWeight(2);
  stroke(20);
  fill(rgb(135, 205, 236));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("lime");
  block8.display();
  block9.display();
  bolck10.display();
  block11.display();
  block12.display();

  fill("lightPink");
  block13.display();
  block14.display();
  block15.display();

  fill("lightGreen");
  block16.display();

 

 
  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  sling.display();
}



function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}


