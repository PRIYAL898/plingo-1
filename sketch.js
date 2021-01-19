const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var ground,plingo,particle;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(400,785,800,9);

    plingo=new Plingo(200,69,20);

    particle=new Particle(200,6,20);

    //division1=new Division(1,680,4,300);
    //division2=new Division(96,680,4,300);
    //division3=new Division(191,680,4,300);
    //division4=new Division(286,680,4,300);
    //division5=new Division(381,680,4,300);
    //division6=new Division(476,680,4,300);
    
   
    
    
}

//var particle=particle[];
//var plingo=plingo[];
//var division=division[];



function draw(){
    background("black");
    Engine.update(engine);

    ground.display();
    
    plingo.display();

    particle.display();
 
    distance();
   
 }

 function distance(){
    if(frameCount%60===0){
        particles.push(new Particle(random(width/2-10,width/2+10),10,10) )
    }
}

 

 