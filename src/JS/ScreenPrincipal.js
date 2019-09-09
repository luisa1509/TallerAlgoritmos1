class ScreenPrincipal{
    constructor(){
        
    }

    paint(){
        image(c,0,0,width, height);
    }

    goFastFood(){
        if(mouseX >= 0 && mouseX <= 700 && mouseY >= 843 && mouseY <= 933){
            screen = 5;

        }

    }

    goPrincipalFood(){
        if(mouseX >= 0 && mouseX <= 700 &&  mouseY >= 934 && mouseY <= 1014){
            screen = 4;
        }
    }

    goSweetFood(){
        if(mouseX >= 0 && mouseX <= 700 && mouseY >= 1015 && mouseY <= 1099 ){
            screen = 6;
        }
    }

    goEspecial(){
        if(mouseX >= 0 && mouseX <= 700 && mouseY >= 1100 && mouseY <= 1185 ){
            screen = 14;
        }
    }
    
    goHistory(){
        if(mouseX >= 362 && mouseX <= 546 && mouseY >= 1239 && mouseY <= 1333 ){
            screen = 11;
        }  
    }
    goProfile(){
        if(mouseX >= 546 && mouseX <= 720 && mouseY >= 1239 && mouseY <= 1333 ){
            screen = 3;
        }  
    }
}
