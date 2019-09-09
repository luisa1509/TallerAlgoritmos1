class ScreenRegister{
  
    constructor(){
    this.nameInput= new Input();
    this.passInput= new Input();
    this.emailInput= new Input();   
    }

    focusInputs(){

    }

    writeTextInput(){

    }

    paint(){
        image(b, 0,0, width, height);
    }

    validateRegister(){
        
    }

    toLoginBack(){
        if(mouseX >= 264 && mouseX <= 484 && mouseY >= 1070 && mouseY <= 1152 ){
            screen = 0;
        }
    }

    
}