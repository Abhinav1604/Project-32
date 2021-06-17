
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2, stand3;
var ball;
var slingShot; 
//var slingShot;
var polygon_img;
var bg;
var backgroundImg;
var bg = "pexels-photo-912110.jpeg";
var score = 0;

function preload(){
 getBackgroundImg();
  polygon_img = loadImage("polygon.png");

}

function setup() {

  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  polygon = Bodies.circle(50,50,20);
  World.add(world, polygon);

  slingShot = new Slingshot(this.polygon,{x:100,y:200});

  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //top
  block16 = new Block(390,155,30,40);

  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,250,10);

  //new level one
  block17 = new Block(610,175,30,40);
  block18= new Block(640,175,30,40);
  block19 = new Block(670,175,30,40);
  block20 = new Block(700,175,30,40);
  block21 = new Block(730,175,30,40);
  block22 = new Block(760,175,30,40);
  block23 = new Block(790,175,30,40);

  //new level two
  block24 = new Block(640,135,30,40);
  block25 = new Block(670,135,30,40);
  block26 = new Block(700,135,30,40);
  block27 = new Block(730,135,30,40);
  block28 = new Block(760,135,30,40);

  //new level three
  block29 = new Block(670,95,30,40);
  block30 = new Block(700,95,30,40);
  block31 = new Block(730,95,30,40);

  //new top
  block32 = new Block(700,55,30,40);

}
function draw() {
   if(backgroundImg)
    background(backgroundImg);
   
   
 
  fill("white")
  textSize(20);
  textFont("georgia");
  text("Press SpaceBar to reset the slingshot", 30, 65);

  fill("white");
  textSize(20);
  textFont("georgia");
  text("Score: " + score, 30, 45);

  fill("yellow");

  slingShot.display();
  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("cyan");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("red");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("yellow");
  block13.display();
  block14.display();
  block15.display();
  fill("white");
  block16.display();

  fill("cyan");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("blue");
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  fill("gold");
  block29.display();
  block30.display();
  block31.display();
  fill("white");
  block32.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block16.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
  block26.score();
  block27.score();
  block28.score();
  block29.score();
  block30.score();
  block31.score();
  block32.score();


  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
 
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "pexels-photo-912110.jpeg";
  }
  else{
      bg = "QRnFPH.jpg";
  }

  backgroundImg = loadImage(bg);
 // console.log(backgroundImg);
}
