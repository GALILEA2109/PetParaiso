let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(nombre, precio, imagen) {
    const cantidad = parseInt(document.querySelector('.cantidad input').value);
    const producto = { nombre, precio, cantidad, imagen };
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    window.location.href = 'carrito.html';
}

function cargarCarrito() {
    const carritoItems = document.getElementById('carrito-items');
    const carritoTotal = document.getElementById('carrito-total');
    carritoItems.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
        const item = document.createElement('div');
        item.className = 'carrito-item';
        item.innerHTML = `
            <img src="imagenes/${producto.imagen}" alt="${producto.nombre}">
            <h3><a href="producto_individual.html">${producto.nombre}</a></h3>
            <p>Precio: $${producto.precio}</p>
            <label for="cantidad-${index}">Cantidad:</label>
            <input type="number" id="cantidad-${index}" name="cantidad" min="1" value="${producto.cantidad}" onchange="actualizarCantidad(${index}, this.value)">
            <button onclick="quitarProducto(${index})">Quitar</button>
        `;
        carritoItems.appendChild(item);
        total += producto.precio * producto.cantidad;
    });

    carritoTotal.innerText = total.toFixed(2);
}

function actualizarCantidad(index, cantidad) {
    carrito[index].cantidad = parseInt(cantidad);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

function quitarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    cargarCarrito();
}

function realizarCompra() {
    const formulario = `
        <form id="form-compra">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
            <label for="domicilio">Domicilio:</label>
            <input type="text" id="domicilio" name="domicilio" required>
            <label for="ciudad">Ciudad:</label>
            <input type="text" id="ciudad" name="ciudad" required>
            <label for="contacto">Teléfono o Correo:</label>
            <input type="text" id="contacto" name="contacto" required>
            <button type="submit">Comprar</button>
        </form>
    `;
    document.querySelector('.carrito-compras').innerHTML = formulario;
    document.getElementById('form-compra').addEventListener('submit', enviarCompra);
}

function enviarCompra(event) {
    event.preventDefault();
    // Aquí podrías agregar la lógica para enviar los datos a un servidor
    alert('Tu pedido está en camino, ¡gracias por comprar en Pet Paraiso!');
    vaciarCarrito();
}

document.addEventListener('DOMContentLoaded', cargarCarrito);
