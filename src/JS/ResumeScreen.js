class ResumeScreen{
    constructor(){
        this.date= new Date();
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

    get Date(){
        return this.date;
    }

}