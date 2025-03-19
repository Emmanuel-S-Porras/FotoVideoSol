function seleccionarPaquete(nombre, detalles) {
    localStorage.setItem('paqueteNombre', nombre);
    localStorage.setItem('paqueteDetalles', detalles);
    window.location.href = 'PaquetesAdi.html'; // Redirige a la página de confirmación
}