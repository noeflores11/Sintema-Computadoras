document.addEventListener('DOMContentLoaded', function() {
    const btnGuardar = document.getElementById('btn-guardar');
    
    btnGuardar.addEventListener('click', function() {
        // Limpiar errores
        ['nombre', 'descripcion', 'precio', 'stock', 'imagen'].forEach(id => {
            document.getElementById(`error-${id}`).textContent = '';
        });

        // Obtener valores
        const nombre = document.getElementById('nombre').value.trim();
        const descripcion = document.getElementById('descripcion').value.trim();
        const precio = parseFloat(document.getElementById('precio').value);
        const stock = parseInt(document.getElementById('stock').value);
        const imagen = document.getElementById('imagen').value.trim();

        // Validación
        let valido = true;

        if (!nombre) {
            document.getElementById('error-nombre').textContent = 'Nombre obligatorio';
            valido = false;
        }

        if (!descripcion) {
            document.getElementById('error-descripcion').textContent = 'Descripción obligatoria';
            valido = false;
        }

        if (isNaN(precio) || precio <= 0) {
            document.getElementById('error-precio').textContent = 'Precio inválido';
            valido = false;
        }

        if (isNaN(stock) || stock < 0) {
            document.getElementById('error-stock').textContent = 'Stock inválido';
            valido = false;
        }

        if (imagen && !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(imagen)) {
            document.getElementById('error-imagen').textContent = 'URL de imagen no válida';
            valido = false;
        }

        if (!valido) return;

        // Crear producto
        const nuevoProducto = {
            id: Date.now(),
            nombre,
            descripcion,
            precio,
            stock,
            imagen: imagen || 'https://via.placeholder.com/300'
        };

        // Guardar en localStorage
        let productos = JSON.parse(localStorage.getItem('productos')) || [];
        productos.push(nuevoProducto);
        localStorage.setItem('productos', JSON.stringify(productos));

        // Redireccionar
        alert('Producto agregado con éxito!');
        window.location.href = '../index.html';
    });
});