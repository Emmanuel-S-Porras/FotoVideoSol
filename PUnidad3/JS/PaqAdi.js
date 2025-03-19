function seleccionarPaquete(nombre, detalles) {
    console.log("Paquete seleccionado:", nombre, detalles); // Verifica si se ejecuta
    localStorage.setItem('paqueteNombre', nombre);
    localStorage.setItem('paqueteDetalles', detalles);
    window.location.href = 'infoAdicional.html'; // Redirigir a la página Adicionales
}
