class ResumeScreen{
    constructor(){
        this.dd =  day();
        this.mm =  month();
        this.yyyy =  year();

    }

    


    hoyFecha(){

        text(""+ this.dd + "/" + this.mm + "/"+ this.yyyy,50,50,50,50);
        
    }

    paint(){
        image(k, 0,0, width, height);
    }


}