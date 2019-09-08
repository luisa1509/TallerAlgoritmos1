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

/*no se realizaron las pantallas e interacciones con los demas platillos en interes de simplicidad 
del codigo*/

}


function setup(){
    createCanvas(750,1334);
    screen=0;
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
   
    switch(screen){
        case 0: // pantalla del LOGIN
            screenL.paint();
            resumeScreen.hoyFecha();
            
            break;

        case 1:// pantalla de registro
            screenR.paint();
            break;

        case 2://pantalla del HOME o INICIO 

            break;

        case 3:// pantalla de seleccion de platillo ENTRADAS

            break;

        case 4: // pantalla de seleccion de platillo RAPIDOS

            break;

        case 5:// pantalla de seleccion de platillo POSTRES

            break;

        case 6:// pantalla de seleccion de platillo PICANTE  TICO 

            break;

        case 7: //pantalla de PERFIL 

            break;

        case 8: //pantalla de HISTORIAL

            break;

        case 9: //pantalla de un platillo seleccionado PICANTE TICO

            break;

        case 10: //pantalla de un platillo seleccionado ENCHILADAS ROJAS

            break;

        case 11: // pantalla de  REALIZAR PEDIDO

            break;

        case 12: //pantalla de ADICIONES

            break;

        case 13: //pantalla de RESUMEN del PEDIDO

            break;

        case 14: //pantalla de REALIZAR EL PAGO CON TARJETA

            break;

        case 15: // pantalla de CONFIRMACION de PAGO

            break;

        

    }
    
    textSize(19);
    text("X"+mouseX +" "+ "Y"+mouseY,mouseX,mouseY);

}


function mouseIsPressed(){

}

function keyPressed(){

}