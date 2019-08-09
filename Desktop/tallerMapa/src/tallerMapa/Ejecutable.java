package tallerMapa;

import java.util.ArrayList;

import processing.core.PApplet;
import processing.core.PImage;

public class Ejecutable extends PApplet{
	
	
	static Usuario usuario1;
	static Usuario usuario2;
    static ArrayList<Vehiculo> carroUsuario1;
    static ArrayList<Vehiculo> carroUsuario2;
    private boolean[][] espacioUno= {
    		{true,false,false,true,true},
    		{true,false,false,true,true},
    		{true,false,false,true,true},
    		{true,false,false,true,true},
    		{true,false,false,true,true},
    };
    private boolean[][] espacioDos= {
    		{true,false,false,true,true},
    		{true,false,false,true,true},
    		{true,false,false,true,true},
    		{true,false,false,true,true},
    		{true,false,false,true,true},
    };
    private boolean[][] espacioTres= {
    		{true,false,false,true,true},
    		{true,false,false,true,true},
    		{true,false,false,true,true},
    		{true,false,false,true,true},
    		{true,false,false,true,true},
    };
	ArrayList<Parqueadero> parqueaderos;
	



	public static void main(String[] args) {
		// TODO Auto-generated method stub}
		PApplet.main(Ejecutable.class.getName());
		

		
		
		
	}


int pantalla;
PImage comenzar,mapa,parque;
boolean par;

public void settings() {
	size(900,600);
}

public void setup() {
	//aparece pantalla
	
	
	comenzar=loadImage("Recurso 1.png");
	mapa=loadImage("Recurso 2.png");
	parque=loadImage("Recurso 3.png");
	
	
	
	parqueaderos = new ArrayList<Parqueadero>();
	parqueaderos.add(new Parqueadero(5,5,"carro",50,59,espacioUno));
	parqueaderos.add(new Parqueadero(5,5,"carro",20,29,espacioDos));
	parqueaderos.add(new Parqueadero(5,5,"carro",40,20,espacioTres));
	
	
	for (int i = 0; i < parqueaderos.size(); i++) {
		for (int k = 0; k < parqueaderos.get(i).getEspacio().length; k++)  {
				println(parqueaderos.get(i).getEspacio()[k][i]);
			}		
	}
	
	
	carroUsuario1=new ArrayList<Vehiculo>();
	carroUsuario1.add(new Vehiculo("AAA-111"));
	
	

	carroUsuario2=new ArrayList<Vehiculo>();
	carroUsuario2.add(new Vehiculo("BBB-222"));
	
	
	usuario1= new Usuario("Fernando Orozco",carroUsuario1);
	usuario2= new Usuario("Andrea Chamorro",carroUsuario2);
	System.out.println(usuario1.getNombre());
	
	for(int i=0;i<usuario1.getCarros().size();i++) {
		System.out.println(usuario1.getCarros().get(i).getPlaca());
	}

	
	
	
}

public void draw() {
	switch (pantalla) {
	case 0:
		
		background(0);
		image(comenzar,0,0);
		
		break;
		
	case 1:
		image(mapa,0,0); 
		fill(255,0,0);
		rect(400,300,10,10);
		rect(500,200,10,10);
		rect(450,500,10,10);
		break;
		
	case 2:
		
			image(parque,0,0);
			for (int fila = 0; fila < parqueaderos.get(1).getEspacio().length; fila++) {
				for (int col = 0; col < parqueaderos.get(1).getEspacio()[1].length; col++) {
					{if(espacioUno[fila][col]==false) 
					{
						fill(255,0,0);}
					else
					{
						fill(0,255,0);
					
					}
					rect(col*100+200,fila*80+130,50,50);
				}
				}
			}
		
		
	
	}
	
	
	
	textSize(10);
	 text("mouseX:"+mouseX+", mouseY:"+mouseY, mouseX, mouseY);
}

public void mousePressed() {
	{if( pantalla==0 && mouseX>286 && mouseX<602 && mouseY>384 && mouseY<465) {
		pantalla=1;
	}
	
}
	if(pantalla==1 && mouseX>400 && mouseX<410 && mouseY>300 && mouseY<310) {
		pantalla=2;
		for (int k = 0; k < parqueaderos.get(0).getEspacio().length; k++) {
			for (int j = 0; j < parqueaderos.get(0).getEspacio()[1].length; j++) {
				println(parqueaderos.get(0).getEspacio()[k][j]);
			}
		}
		}

		if(pantalla==1 && mouseX>500 && mouseX<510 && mouseY>200 && mouseY<210) {
			pantalla=2;
			for (int k = 0; k < parqueaderos.get(0).getEspacio().length; k++) {
				for (int j = 0; j < parqueaderos.get(0).getEspacio()[1].length; j++) {
					println(parqueaderos.get(0).getEspacio()[k][j]);
				}
			}
		}

		if(pantalla==1 && mouseX>450 && mouseX<460 && mouseY>500 && mouseY<510) {
			pantalla=2;
			for (int k = 0; k < parqueaderos.get(0).getEspacio().length; k++) {
				for (int j = 0; j < parqueaderos.get(0).getEspacio()[1].length; j++) {
					println(parqueaderos.get(0).getEspacio()[k][j]);
				}
			}
		}

}
}
