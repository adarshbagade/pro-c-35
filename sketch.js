const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;





function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

ground = new Ground(400,795,800,10);

Engine.run(engine);

}
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight= 300;

function draw() {
  background("black");  
  Engine.update(engine);
  strokeWeight(4);
  if (frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),15,15))
  }
  for (var k= 0; k <=innerWidth; k = k+80) {
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for (var j = 40;j <=innerWidth; j= j+50){
    plinkos.push(new Plinko(j,75,20));
  }
  for (var j = 25; j <=innerWidth-10;j=j+50)
  {
    plinkos.push(new Plinko(j,175,20));
  }
  for (var j = 10;j <=innerWidth; j= j+50){
    plinkos.push(new Plinko(j,125,20));
  }

ground.display();
for (var k= 0; k <divisions.length; k = k+1) {
  divisions[k].display();
}
for (var j =0;j < plinkos.length; j= j+1){
  plinkos[j].display();
}
for (var j =0;j < particles.length; j= j+1){
  particles[j].display();
}


//particles.display();
//divisions.display();

  drawSprites();
}