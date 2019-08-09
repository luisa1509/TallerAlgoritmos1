package tallerMapa;

public class Parqueadero {
	private int capacidad;
	private int espaciosOcupados;
	private String tipoVehiculo;
	private double lat;
	private double lon;
	private boolean espacio [][];
	
	public Parqueadero(int capacidad,int espaciosOcupados,String tipoVehiculo, int lat, int lon,boolean espacio[][]) 
	{
		this.capacidad = capacidad;
		this.espaciosOcupados = espaciosOcupados;
		this.tipoVehiculo = tipoVehiculo;
		this.lat = lat;
		this.lon= lon;
		this.espacio = espacio;
		
	}
	
	public void disponibilidad() {
		
	}
	
	public void separarEspacio() {
		System.out.println("Listo");
	}
	
	public int getCapacidad() {
		return capacidad;

	}
	
	public void setCapacidad(int capacidad) {
		this.capacidad=capacidad; 
	}
	
	public int getEspaciosOcupados() {
		return espaciosOcupados;
	}
	
	public void setEspaciosOcupados(int espaciosOcupados) {
		this.espaciosOcupados=espaciosOcupados;
	}
	
	public String getTipoVehiculo() {
		return tipoVehiculo; 
	}
	
	public void setTipoVehiculo(String tipoVehiculo) {
		this.tipoVehiculo=tipoVehiculo;
		
	}
	
	public double getLat() {
		return lat;
	}
	
	public void setLat(double lat) {
		this.lat=lat;
	}

	public double getLon() {
		return lon;
	}
	
	public void setLon(double lon) {
		this.lon=lon;
	}
	
	public boolean[][] getEspacio(){
		return espacio;
	}
	public void setEspacio(boolean[][] espacio) {
		this.espacio=espacio;
	}

}
