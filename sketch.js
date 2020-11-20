
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,box;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var ball;
var rope;


function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700,750,2000,50);
    box = new Box(1500,400,20,20);

    box1 = new Box(900,100,90,90);
    box2 = new Box(900,100,90,90);
    box3 = new Box(900,100,90,90);
    box4 = new Box(900,100,90,90);
    box5 = new Box(900,100,90,90);
    box6 = new Box(900,100,90,90);
    box7 = new Box(800,100,90,90);
    box8 = new Box(800,100,90,90);
    box9 = new Box(800,100,90,90);
    box10 = new Box(800,100,90,90);
    box11 = new Box(800,100,90,90);
    box12 = new Box(800,100,90,90);
    box13 = new Box(700,100,90,90);
    box14 = new Box(700,100,90,90);
    box15 = new Box(700,100,90,90);
    box16 = new Box(700,100,90,90);
    box17 = new Box(700,100,90,90);
    box18 = new Box(700,100,90,90);

    ball = new Ball(200,200,80,80);
    rope = new Rope(ball.body,{x:500 ,y:50});
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    ball.display();
    rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX,y: mouseY});
}
