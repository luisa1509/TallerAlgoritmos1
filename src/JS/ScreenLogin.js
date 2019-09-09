class ScreenLogin{

    constructor(){

     this.nameInput= new Input();
     this.passInput= new Input();
    }


    focusInputs(){

    }

    writeTextInput(){

    }

    paint(){
        image(a, 0,0, width, height);
    }

    goHome(){
        if(mouseX >= 140 && mouseX <= 360 && mouseY >= 1019 && mouseY <= 1099 ){
            screen = 2;
        }
    }

    goRegister(){
        if(mouseX >= 386 && mouseX <= 599 && mouseY >= 1019 && mouseY <= 1099 ){
            screen = 1;
        }
    }
}