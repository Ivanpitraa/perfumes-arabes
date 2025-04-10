document.addEventListener('DOMContentLoaded', () => {
    const filtros = document.querySelectorAll('.filtro');
    const productos = document.querySelectorAll('.producto');
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
    const cartCount = document.getElementById('cart-count');

    let carrito = [];

    // FILTROS
    filtros.forEach(filtro => {
        filtro.addEventListener('click', () => {
            const nota = filtro.getAttribute('data-nota');
            productos.forEach(producto => {
                const notas = producto.getAttribute('data-notas');
                if (notas.includes(nota)) {
                    producto.style.display = 'block';
                } else {
                    producto.style.display = 'none';
                }
            });
        });
    });

    // AGREGAR AL CARRITO
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', e => {
            const producto = e.target.parentElement;
            const nombre = producto.querySelector('h3').textContent;

            carrito.push(nombre);
            actualizarCarrito();
        });
    });

    // VACIAR CARRITO
    vaciarCarritoBtn.addEventListener('click', () => {
        carrito = [];
        actualizarCarrito();
    });

    // ACTUALIZAR CARRITO EN PANTALLA
    function actualizarCarrito() {
        listaCarrito.innerHTML = '';
        carrito.forEach((producto, index) => {
            const li = document.createElement('li');
            li.textContent = producto;
            listaCarrito.appendChild(li);
        });
        cartCount.textContent = carrito.length;
    }
});
