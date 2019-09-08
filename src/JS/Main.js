let screen;
var screenR;
var screenL;
var screenP;
var ScreenPay;
var screenRec;
var screenO;
var resumeScreen;
let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o;

function preload(){
a= loadImage("data/login.png");
b= loadImage("data/registro.png")
c= loadImage("data/home.png");
d= loadImage("data/perfil.png");
e= loadImage("data/entradas.png");
f= loadImage("data/rapidos.png");
g= loadImage("data/postres.png");
h= loadImage("data/realizarpedido.png");
i= loadImage("data/pago.png");
j= loadImage("data/confirmar pedido.png");
k= loadImage("data/resumenPedido.png");
l= loadImage("data/historialLLenar.png");
m= loadImage("data/adiciones.png");
n= loadImage("data/platilloEnchiladas.png"); //el resumen y descripcion del platillo enchiladas
o= loadImage("data/especial.png"); //resumen y descripcion del platillo especial tico
}


function setup(){
    createCanvas(750,1334);
     screenR = new ScreenRegister();
     screenL = new ScreenLogin();
     screenP = new ScreenPrincipal();
     ScreenPay = new ScreenPayment();
     screenRec = new ScreenRecord();
     screenO = new ScreenOrder();
     resumeScreen = new ResumeScreen();
}

function draw(){
    background(255);
    ellipse(width/2, height/2, 50,50);
    
    
    

}