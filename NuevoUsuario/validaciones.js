// Función para validar el formulario antes de enviarlo
document.getElementById('formulario-usuario').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validar el campo "Nombre"
    if (nombre === '') {
        alert('El campo "Nombre" no puede estar vacío.');
        return;
    }
    if (nombre.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        return;
    }

    // Validar el campo "Correo"
    if (correo === '') {
        alert('El campo "Correo" no puede estar vacío.');
        return;
    }
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo
    if (!regexCorreo.test(correo)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Validar el campo "Contraseña"
    if (password === '') {
        alert('El campo "Contraseña" no puede estar vacío.');
        return;
    }
    if (password.length < 8) {
        alert('La contraseña debe tener al menos 8 caracteres.');
        return;
    }
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // Expresión regular para validar contraseña
    if (!regexPassword.test(password)) {
        alert('La contraseña debe contener al menos una letra mayúscula, una minúscula y un número.');
        return;
    }

    // Si todas las validaciones pasan, enviar el formulario
    alert('Formulario válido. Enviando datos...');
    this.submit();
});