class Personaje{
    constructor(posx,posy,tamx,tamy){
        this.posx=posx;
        this.posy=posy;
        this.tamx=tamx;
        this.tamy=tamy;
        tamx=50;
        tamy=50;
        
    }

    moverse(){
        if(keyIsDown(LEFT_ARROW)&& this.x>0){
             this.posx -= 10;
        }

        if(keyIsDown(RIGHT_ARROW)&& this.x<1000){
            this.posx += 10;
                }
        
       
                    
    }
}