// Script para manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Recoger los datos del formulario
    const formData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        asunto: document.getElementById('asunto').value,
        mensaje: document.getElementById('mensaje').value
    };
    
    // Aquí normalmente enviarías los datos a un servidor
    // Por ahora solo mostraremos un mensaje de éxito
    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
    
    // Limpiar el formulario
    this.reset();
});

// Validación del número de teléfono (opcional)
document.getElementById('telefono').addEventListener('input', function(e) {
    // Permitir solo números y algunos caracteres especiales
    this.value = this.value.replace(/[^0-9+\-() ]/g, '');
});

// Animación suave para el scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});