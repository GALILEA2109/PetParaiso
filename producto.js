document.addEventListener('DOMContentLoaded', function() {
    var btnAgregarCarrito = document.querySelector('.btn-agregar-carrito');
    if (btnAgregarCarrito) {
        btnAgregarCarrito.addEventListener('click', function() {
            var nombre = document.querySelector('.producto-detalles h1').innerText;
            var precio = parseFloat(document.querySelector('.producto-detalles .precio').innerText.replace('Precio: $', ''));
            var cantidad = parseInt(document.getElementById('cantidad').value);
            
            var producto = {
                nombre: nombre,
                precio: precio,
                cantidad: cantidad
            };

            // Guardar producto en localStorage
            var carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito));

            // Redirigir al carrito
            window.location.href = 'carrito.html';
        });
    }
});



