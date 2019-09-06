class Input {
   focus= new Boolean(false);
   
    
    constructor(posX, posY, focus, text, parent){
        this.focus= focus;
        this.text= text;
        this.posX= posX;
        this.posY=posY;
    }

    paint(){
        if(focus==false){
            stroke(255,0,0);
        }else{
            stroke(0);
        }

        fill(255);
        rect(posX, posY,200,30);
        
        fill(0);
        textSize(16);
        text(text, posX+10,posY+20);
    }

    getPosX(){
        return this.posX;
    }

    setPosX(posX) {
		this.posX = posX;
    }

    getPosY(){
        return this.posY;
    }

    setPosY(posY) {
		this.posY = posY;
    }

    isFocus() {
		return focus;
    }

    setFocus(focus) {
		this.focus = focus;
	}

	getText() {
		return text;
	}

	setText(text) {
		this.text = text;
	}


}