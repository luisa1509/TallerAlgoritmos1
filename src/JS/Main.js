let x;
let posX;
let posY;
let vel;

function setup(){
    createCanvas(600,600);
    x=50;
    posX=50;
    posY= 50;
    vel=10;
}

function draw(){
    background(0);
    fill(255);
    ellipse(posX,posY,x,x);

    if(keyIsDown(RIGHT_ARROW)){
        posX= posX+vel;
    }
    if(keyIsDown(LEFT_ARROW)){
        posX= posX-vel;
    }
    if(keyIsDown(UP_ARROW)){
        posY= posY-vel;
    }
    if(keyIsDown(DOWN_ARROW)){
        posY= posY+vel;
    }

}