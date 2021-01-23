const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var ball, heimg;
var slingshot;

function preload()
{
 heimg = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(width/2-100, height/2+150, 450, 20);
 

  ball = Bodies.circle(50, 200, 10);
  World.add(world, ball);

  slingshot = new SlingShot(this.ball, {x: 100, y: 200});

  block1 = new box(280,275,30,40);  
  block2 = new box(310,275,30,40);
  block3 = new box(340,275,30,40);
  block4 = new box(370,275,30,40);
  block5 = new box(400,275,30,40);
  block6 = new box(430,275,30,40);
  block7 = new box(460,275,30,40);
  block8 = new box(490,275,30,40);
 
  block9 = new box(310,235,30,40);
  block10 = new box(340,235,30,40);
  block11 = new box(370,235,30,40);
  block12 = new box(400,235,30,40);
  block13 = new box(430,235,30,40);
  block14 = new box(460,235,30,40);

  block15 = new box(340,195,30,40);
  block16 = new box(370,195,30,40);
  block17 = new box(400,195,30,40);
  block18 = new box(430,195,30,40);
 
  block19 = new box(370,155,30,40);
  block20 = new box(400,155,30,40);
  
  block21 = new box(385,115,30,40);

}

function draw() {
  background(57,43,44);  
  Engine.update(engine);
  drawSprites();
  ground1.display();

  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  stroke(15)
  fill("yellow")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
 stroke(15)
 fill("grey")
  block15.display();
  block16.display();
  block17.display();
  block18.display();
    stroke(15)
    fill("pink")
  block19.display();
  block20.display();
 stroke(15)
 fill("cyan")
  block21.display();

 fill("white")
  text("hit it think of it as your enemy you can do it!!!",10,10)
  slingshot.display();

  imageMode(CENTER);
  image(heimg, ball.position.x, ball.position.y, 40, 40);

}

function mouseDragged(){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly(); 
  }