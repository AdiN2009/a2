const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var j;
var k;
var l;
var m;
var o;
var p;
var q;
var r;
var s;
var t;
var u; 
var v; 
var w,x,y,z;
var A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z;
var LA1;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a19,a20,a21,a22,a23,a24,a25,a26
var flag;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  a = createSprite(380,20,700,20);
      b = createSprite(380,780,700,20);
    a1 = createSprite(20,400,20,800);
    d = createSprite(760,400,20,800);
      g = createSprite(500,100,20,200);
      h = createSprite(550,190,100,20);
      i = createSprite(600,150,20,100);
      j = createSprite(260,150,20,300);
      k = createSprite(310,100,100,20);
      l = createSprite(380,305,20,210);
      m = createSprite(490,305,240,20);
      n = createSprite(600,350,20,110);
      o = createSprite(660,395,120,20);
      p = createSprite(200,200,100,20);
      q = createSprite(155,295,20,210);
      r = createSprite(80,100,110,20);
      s = createSprite(205,395,120,20);
      t = createSprite(255,450,20,130);
      u = createSprite(315,505,140,20);
      v = createSprite(490,520,20,240);
      w = createSprite(335,630,300,20);
      x = createSprite(610,640,20,280);
      y = createSprite(90,510,120,20);
      z = createSprite(320,700,20,140);
      
    

	e = createSprite(550,220,40,40)

	c = createSprite(Math.round(random(20,350)),Math.round(random(20,780)),40,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  e.collide(a);
  e.collide(b);
  e.collide(a1);
  e.collide(d);
  
  e.collide(e);
 
  e.collide(g);
  e.collide(h);
  e.collide(i);
  e.collide(j);
  
  e.collide(k);
  e.collide(l);
  e.collide(m);
  e.collide(n);
  e.collide(o);
  e.collide(p);
  e.collide(q);
  e.collide(r);
  e.collide(s);
  e.collide(t);
  e.collide(u);
  e.collide(v);
  e.collide(w);
  e.collide(x);
  e.collide(y);
  e.collide(z);
  
  c.collide(a);
  c.collide(b);
  
  
  c.collide(e);
  
  c.collide(g);
  c.collide(h);
  c.collide(i);
  c.collide(j);
  
  c.collide(k);
  c.collide(l);
  c.collide(m);
  c.collide(n);
  c.collide(o);
  c.collide(p);
  c.collide(q);
  c.collide(r);
  c.collide(s);
  c.collide(t);
  c.collide(u);
  c.collide(v);
  c.collide(w);
  c.collide(x);
  c.collide(y);
  c.collide(z);


  if(e.collide(c)){
	flag = createSprite(400,400,800,800);
 }


  drawSprites();
keyPressed();
}

function keyPressed(){
	if (keyCode === 37){
		e.x = e.x-6
	}
	if (keyCode === 39){
		e.x = e.x+6
	}
	if (keyCode === 40){
		e.y = e.y+6
	}
	if (keyCode === 38){
		e.y = e.y-6
	}
}
