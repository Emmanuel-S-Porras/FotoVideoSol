function actualizarTotal() {
    let precioBase = 100;
    let extraHoras = parseInt(document.getElementById('extraHoras').value) * 10;
    let fotosAdicionales = parseInt(document.getElementById('fotosAdicionales').value) * 10;
    let videosAdicionales = parseInt(document.getElementById('videosAdicionales').value) * 10;
    let total = precioBase + extraHoras + fotosAdicionales + videosAdicionales;
    document.getElementById('total').innerText = "$" + total.toFixed(2);
}