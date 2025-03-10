// Función para validar el formulario antes de enviarlo
document.getElementById('formulario-editar').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Validar campos vacíos
    const productoId = document.getElementById('producto_id').value.trim();
    const productoNombre = document.getElementById('producto_nombre_edit').value.trim();
    const descripcion = document.getElementById('descripcion_edit').value.trim();
    const precio = document.getElementById('precio_edit').value.trim();
    const imagen = document.getElementById('imagen_edit').files[0];

    if (!productoId || !productoNombre || !descripcion || !precio) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    // Validar que el precio sea un número mayor que cero
    if (isNaN(precio) || parseFloat(precio) <= 0) {
        alert('El precio debe ser un número válido y mayor que cero.');
        return;
    }

    // Validar la imagen (si se subió una)
    if (imagen) {
        const tiposPermitidos = ['image/jpeg', 'image/png', 'image/gif'];
        const tamañoMaximo = 2 * 1024 * 1024; // 2 MB

        if (!tiposPermitidos.includes(imagen.type)) {
            alert('El archivo debe ser una imagen (JPEG, PNG o GIF).');
            return;
        }

        if (imagen.size > tamañoMaximo) {
            alert('La imagen no debe exceder los 2 MB.');
            return;
        }
    }

    // Si todas las validaciones pasan, enviar el formulario
    alert('Formulario válido. Enviando datos...');
    this.submit();
});
