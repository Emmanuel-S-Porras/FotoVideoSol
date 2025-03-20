function seleccionarPaquete(nombre, detalles, precio, tipo) {
    console.log("Paquete seleccionado:", nombre, detalles, precio, tipo); // Verifica si se ejecuta
    localStorage.setItem('paqueteNombre', nombre);
    localStorage.setItem('paqueteDetalles', detalles);
    localStorage.setItem('paquetePrecio', precio);//Separar el valor del precio en variable int para poder sumarlo y agregar $ dlls fuera de variable como string
    localStorage.setItem('paqueteTipo', tipo);
    window.location.href = 'infoAdicional.html'; // Redirigir a la página Adicionales
}

detalleDeDiam1 = document.getElementById('detallDiam1').textContent;
detalleDeDiam2 = document.getElementById('detallDiam2').textContent;
detalleDeDiam3 = document.getElementById('detallDiam3').textContent;
detalleDeEnsue = document.getElementById('detallEnsue').textContent;
detalleDeCinem = document.getElementById('detallCinem').textContent;
detalleDeEstre = document.getElementById('detallEstre').textContent;
detalleDeConce = document.getElementById('detallConce').textContent;