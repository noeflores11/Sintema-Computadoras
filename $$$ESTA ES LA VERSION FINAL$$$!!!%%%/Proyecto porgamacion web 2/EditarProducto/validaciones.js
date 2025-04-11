document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        alert('Producto no encontrado');
        window.location.href = '../ListaProductos/index.html'; // Cambia esta ruta si es necesario
        return;
    }

    document.getElementById('nombre').value = producto.nombre;
    document.getElementById('descripcion').value = producto.descripcion;
    document.getElementById('precio').value = producto.precio;
    document.getElementById('stock').value = producto.stock;
    document.getElementById('imagen').value = producto.imagen;

    document.getElementById('formulario-editar').addEventListener('submit', function (e) {
        e.preventDefault();

        const errores = ['nombre', 'descripcion', 'precio', 'stock', 'imagen'];
        errores.forEach(id => document.getElementById(`error-${id}`).textContent = '');

        const nombre = document.getElementById('nombre').value.trim();
        const descripcion = document.getElementById('descripcion').value.trim();
        const precio = parseFloat(document.getElementById('precio').value);
        const stock = parseInt(document.getElementById('stock').value);
        const imagen = document.getElementById('imagen').value.trim();

        let valido = true;

        if (nombre === '') {
            document.getElementById('error-nombre').textContent = 'El nombre es obligatorio.';
            valido = false;
        }

        if (descripcion === '') {
            document.getElementById('error-descripcion').textContent = 'La descripción es obligatoria.';
            valido = false;
        }

        if (isNaN(precio) || precio < 0) {
            document.getElementById('error-precio').textContent = 'El precio debe ser mayor o igual a 0.';
            valido = false;
        }

        if (isNaN(stock) || stock < 0) {
            document.getElementById('error-stock').textContent = 'El stock debe ser mayor o igual a 0.';
            valido = false;
        }

        if (imagen !== '' && !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(imagen)) {
            document.getElementById('error-imagen').textContent = 'URL de imagen no válida.';
            valido = false;
        }

        if (!valido) return;

        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.precio = precio;
        producto.stock = stock;
        producto.imagen = imagen;

        localStorage.setItem('productos', JSON.stringify(productos));

        alert('Producto editado correctamente');
        window.location.href = '../ListaProductos/index.html'; // Cambia esta ruta si es necesario
    });
});
