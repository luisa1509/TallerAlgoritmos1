class screenProfile{
    constructor(){

    }

    paint(){
        image(d,0,0, width, height);
    }

    goHistory(){
        if(mouseX >= 362 && mouseX <= 546 && mouseY >= 1239 && mouseY <= 1333 ){
            screen = 11;
        }  
    }

    goHome(){
        if(mouseX >= 11 && mouseX <= 180 && mouseY >= 1239 && mouseY <= 1333 ){
            screen = 2;
        }
    }

    logOut(){
        if(mouseX >= 256 && mouseX <= 487 && mouseY >= 858 && mouseY <= 938)
        screen=0;
    }
}