let per;

function setup(){
createCanvas(900,600);
per= new Personaje(500,400);
} 

function draw(){
background(0);
fill(255,0,0);
rect(per.posx,per.posy,50,50);
per.moverse();
}