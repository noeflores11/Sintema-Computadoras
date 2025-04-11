document.getElementById('formulario-usuario').addEventListener('submit', function (e) {
    e.preventDefault();

    // Limpiar mensajes de error
    document.getElementById('error-nombre').textContent = '';
    document.getElementById('error-correo').textContent = '';
    document.getElementById('error-password').textContent = '';

    // Obtener valores
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value;

    let valido = true;

    // Validar nombre
    if (nombre === '') {
        document.getElementById('error-nombre').textContent = 'El nombre es obligatorio.';
        valido = false;
    }

    // Validar correo
    const regexCorreo = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (correo === '') {
        document.getElementById('error-correo').textContent = 'El correo es obligatorio.';
        valido = false;
    } else if (!regexCorreo.test(correo)) {
        document.getElementById('error-correo').textContent = 'Correo no válido.';
        valido = false;
    }

    // Validar contraseña
    if (password === '') {
        document.getElementById('error-password').textContent = 'La contraseña es obligatoria.';
        valido = false;
    } else if (password.length < 6) {
        document.getElementById('error-password').textContent = 'Debe tener al menos 6 caracteres.';
        valido = false;
    }

    // Si pasa todo, enviar
    if (valido) {
        this.submit();
    }
});
