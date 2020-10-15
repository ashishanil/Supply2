const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var supplyPackage,package,box,box2,box3;
var world,engine;
var helicopter,ground;

function preload(){
helicopterImage=loadImage("helicopter.jpg");
packageImage=loadImage("package.png");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world;
  var properties={
    isStatic:true
  }
  supplyPackage=Bodies.rectangle(400,30,30,30,properties);
  helicopter=createSprite(400,30,20,20);
  helicopter.addImage(helicopterImage);
  helicopter.scale=0.2;
  box=new Box(400,370,40,10);
  box2=new Box(375,360,10,25);
  box3=new Box(425,360,10,25);
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,800,10,options);
  World.add(world,supplyPackage);
  World.add(world,ground);
}

function draw(){
  background(255,255,255);
  Engine.update(engine)
  if(keyDown("down_arrow")){
   Matter.Body.setStatic(supplyPackage,false)
  } 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)
  imageMode(CENTER)
  image(packageImage,supplyPackage.position.x,supplyPackage.position.y,30,30)
  box.display();
  box2.display();
  box3.display();
  drawSprites();
}