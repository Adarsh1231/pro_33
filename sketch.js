const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bckImage;
var engine, world;

var snows = [];
var maxSnows = 150;

var randomx, randomy;

function preload() {
  bckImage = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1280, 608);

  engine = Engine.create();
  world = engine.world;


  for (var i = 0; i < maxSnows; i++) {
    snows.push(new snow(random(0, 1280), random(0, 228), 20));
  }
}

function draw() {
  background(bckImage);
  Engine.update(engine);

  for (var i = 0; i < maxSnows; i++) {
    snows[i].display();
  }

  drawSprites();
}