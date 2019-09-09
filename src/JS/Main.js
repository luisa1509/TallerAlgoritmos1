let screen;
var screenR;
var screenL;
var screenP;
var screenPay;
var screenRec;
var screenO;
var resumeScreen;
var screenProf;
var screenFastt;
var screenDess;
var screenSpeciall;
var screenEntrada;
let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o;
var modal1, modal2;

function preload(){
a= loadImage("data/login.png"); //0
b= loadImage("data/registro.png") //1
c= loadImage("data/home.png"); //2
d= loadImage("data/perfil.png"); //3
e= loadImage("data/entradas.png");  //4
f= loadImage("data/rapidos.png");  //5
g= loadImage("data/postres.png");  //6
h= loadImage("data/realizarpedido.png");  //7
i= loadImage("data/pago.png");  //8
j= loadImage("data/confirmar pedido.png");  //9
k= loadImage("data/resumenPedido.png"); //10 
l= loadImage("data/historialLLenar.png");  //11
m= loadImage("data/adiciones.png");  //12
n= loadImage("data/platilloEnchiladas.png"); //el resumen y descripcion del platillo enchiladas
o= loadImage("data/especial.png"); //resumen y descripcion del platillo especial tico

/*no se realizaron las pantallas e interacciones con los demas platillos en interes de simplicidad 
del codigo*/

}


function setup(){
    createCanvas(750,1334);
    screen=0;
    screenFastt= new screenFast();
    screenEntrada= new screenEntradas();
    screenDess = new screenDessert();
    screenSpeciall = new screenSpecial();
    screenR = new ScreenRegister();
    screenL = new ScreenLogin();
    screenP = new ScreenPrincipal();
    screenPay = new ScreenPayment();
    screenRec = new ScreenRecord();
    screenO = new ScreenOrder();
    resumeScreen = new ResumeScreen();
    screenProf= new screenProfile();
    modal1 = new Modal();

     
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
            screenP.paint();
            break;

        case 3:// pantalla de seleccion de perfil
            screenProf.paint();
            break;

        case 4: // pantalla de seleccion de platillo ENTRADAS
            screenEntrada.paint();
            break;

        case 5:// pantalla de seleccion de platillo RAPIDOS
            screenFastt.paint();
            break;

        case 6:// pantalla de seleccion de platillo POSTRES 
            screenDess.paint();
            break;

        case 7: //pantalla de ORDENAR 
            screenO.paint();
            break;

        case 8: //pantalla de PAGO
            screenPay.paint();
            
            break;

        case 9: 

            break;

        case 10: //pantalla dE RESUMEN DEL PEDIDO
                resumeScreen.paint();
            break;

        case 11: // pantalla de  HISTORIAL
            screenRec.paint();
            break;

        case 12: 

            break;

        case 13: 

            break;

        case 14: //pantalla de PLATILLO ESPECIAL
            screenSpeciall.paint();
            break;


    }
    
    textSize(19);
    text("X"+mouseX +" "+ "Y"+mouseY,mouseX,mouseY);

}


function mousePressed(){
    switch(screen){
        case 0: // pantalla del LOGIN
            screenL.goHome();
            screenL.goRegister();
            
            
            
            break;

        case 1:// pantalla de registro
            screenR.toLoginBack();
            break;

        case 2://pantalla del HOME o INICIO 
            screenP.goProfile();
            screenP.goPrincipalFood();
            screenP.goSweetFood();
            screenP.goFastFood();
            screenP.goEspecial();
            screenP.goHistory();
            break;

        case 3:// pantalla de perfil
            screenProf.logOut();
            break;

        case 4: // pantalla de seleccion de platillo ENTRADAS
           
            break;

        case 5:// pantalla de seleccion de platillo RAPIDOS

            break;

        case 6:// pantalla de seleccion de platillo POSTRES 

            break;

        case 7: //pantalla de ORDENAR 

            break;

        case 8: //pantalla de PAGO

            break;

        case 9: 

            break;

        case 10: //pantalla de RESUMEN

            break;

        case 11: // pantalla de HISTORIAL

            break;

        case 12: 

            break;

        case 13: 

            break;

        case 14: //pantalla de PLATILLO ESPECIAL

            break;

     

        

    }

}

function keyPressed(){

}