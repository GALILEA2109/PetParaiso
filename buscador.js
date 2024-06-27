function buscarProductos() {
    var input = document.getElementById('barra-busqueda').value.toLowerCase();
    var productos = document.querySelector('.productos');
    var items = productos.getElementsByClassName('producto');
    
    for (var i = 0; i < items.length; i++) {
        var producto = items[i].getElementsByTagName("h2")[0];
        if (producto.innerText.toLowerCase().indexOf(input) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}
function buscarSecciones() {
    var input = document.getElementById('barra-busqueda').value.toLowerCase();
    var secciones = document.getElementById('secciones');
    var items = secciones.getElementsByClassName('imagen-contenedor');
    
    var seccionPerros = document.getElementById('seccion-perros');
    var productos = seccionPerros ? seccionPerros.getElementsByClassName('producto') : [];

    // Buscar en las secciones
    for (var i = 0; i < items.length; i++) {
        var boton = items[i].getElementsByTagName("a")[0];
        if (boton.innerText.toLowerCase().indexOf(input) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }

    // Buscar en los productos
    for (var j = 0; j < productos.length; j++) {
        var productoNombre = productos[j].getElementsByTagName("h2")[0];
        if (productoNombre.innerText.toLowerCase().indexOf(input) > -1) {
            productos[j].style.display = "";
        } else {
            productos[j].style.display = "none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var buscarBtn = document.querySelector('.barra-busqueda button');
    buscarBtn.addEventListener('click', buscarProductos);

    var buscarInput = document.getElementById('barra-busqueda');
    buscarInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            buscarProductos();
        }
    });
});
