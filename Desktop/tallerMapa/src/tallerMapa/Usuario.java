package tallerMapa;

import java.util.ArrayList;

public class Usuario {
	private String nombre;
	private ArrayList<Vehiculo> carros;
	
	public Usuario(String nombre,ArrayList<Vehiculo> carros) {
		this.nombre=nombre;
		this.carros=carros;
		
	}
	public String getNombre(){
		return nombre;
	}
	public String setNombre(){
		return nombre;
	}
	public ArrayList<Vehiculo> getCarros(){
		return carros;
	}
	public ArrayList<Vehiculo> setCarros(){
		return carros;
	}

}
