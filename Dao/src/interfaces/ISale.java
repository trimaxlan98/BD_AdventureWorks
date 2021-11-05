package interfaces;

public interface ISale<T> {
	T[] obtenerOfertas();

	T obtenerOferta(int idOferta);
}
