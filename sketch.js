const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2,ground3,ground4;
var holder;
var box1,bgi;
var ball;
var polygon;
var sling;
var polygonIMG;
var score = 0;
function preload()
{
   polygonIMG=loadImage("polygon.png");
   bgi = loadImage("back.png");
}

function setup() {
  createCanvas(1350,605);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  //ball = createSprite(100,200,20)

  ground1 = new Ground(500,520,250,20);
  ground2 = new Ground(900,250,250,20);
  ground3 = new Ground(680,600,1360,20);
  ground4 = new Ground(80,600,20,10);

  box1 = new Box(410,500,30,40);
  box2 = new Box(440,500,30,40);
  box3 = new Box(470,500,30,40);
  box4 = new Box(500,500,30,40);
  box5 = new Box(530,500,30,40);
  box6 = new Box(560,500,30,40);
  box7 = new Box(590,500,30,40);

  box8 = new Box(440,460,30,40);
  box9 = new Box(470,460,30,40);
  box10 = new Box(500,460,30,40);
  box11 = new Box(530,460,30,40);
  box12 = new Box(560,460,30,40);

  box13 = new Box(470,420,30,40);
  box14 = new Box(500,420,30,40);
  box15 = new Box(530,420,30,40);

  box16 = new Box(500,380,30,40);

  box17 = new Box(840,225,30,40);
  box18 = new Box(870,225,30,40);
  box19 = new Box(900,225,30,40);
  box20 = new Box(930,225,30,40);
  box21 = new Box(960,225,30,40);

  box22 = new Box(870,185,30,40);
  box23 = new Box(900,185,30,40);
  box24 = new Box(930,185,30,40);

  box25 = new Box(900,145,30,40);

  ball = Bodies.circle(80,530,20);
  slingshot = new SlingShot(this.ball,{x:100,y:200});
  
  World.add(world,ball);


  

  //Engine.run(engine);
}

function draw() {
  background(bgi); 
  fill("black");
  stroke("red")
  strokeWeight(1.5);
  textSize(20);
  text("Score: " + score,1240,40);
  rectMode(CENTER);

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  
  fill("lightgreen");
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  fill("lightblue");
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  fill("pink")
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  fill("orange");
  box16.display();
  box16.score();
  fill("lightgreen");
  box17.display();
  box17.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  fill("lightblue");
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();
  fill("pink");
  box25.display();
  box25.score();

  imageMode(CENTER)
  image(polygonIMG ,ball.position.x,ball.position.y,40,40);
  //drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}

function keyPressed()
{
  if (keyCode === 32)
  {
  slingShot.attach(this.polygon)
}
}