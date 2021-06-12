const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
 
var myEngine,myWorld;
var ground;

function setup() {
  createCanvas(400,400);
myEngine= Engine.create();
myWorld= myEngine.world;

var ground_options= {
  isStatic: true
}
ground= Bodies.rectangle(200,390,400,20,ground_options);
World.add(myWorld,ground);
console.log(ground);
var option = { 
  restitution: 1.0
}
ball = Bodies.circle(200,200,40,option);
World.add(myWorld,ball);

}

function draw() {
  Engine.update(myEngine);
  background(0);  
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,20);
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
}