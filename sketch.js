const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ball;
var ground;
var cBall;

function setup() {
  createCanvas(400,400);
 engine = Engine.create();
world = engine.world;

 ball = Bodies.rectangle(100,100,50,50);
 World.add(world,ball);
/*
var Bounce = {
  restitution: 2,
  friction: 0.5,
  density: 50
}
*/
 cBall = Bodies.circle(300,100,20,{restitution:1});
 World.add(world,cBall);

var options = {
  isStatic: true
}

 ground = Bodies.rectangle(200,380,width,20,options);
 World.add(world,ground);

 console.log(ball);
 console.log(ball.type);
 console.log(ball.position.x);
 console.log(ball.position.y);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ball.position.x,ball.position.y,50,50);
  rect(ground.position.x,ground.position.y,width,20);

  ellipseMode(RADIUS);
  ellipse(cBall.position.x,cBall.position.y,20,20);

  drawSprites();
}