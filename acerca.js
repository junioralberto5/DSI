// Animación de conteo para los números de logros
function animateNumbers() {
    const numbers = document.querySelectorAll('.achievement-number');
    
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-target'));
        const duration = 2000; // Duración de la animación en ms
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const updateNumber = () => {
            if (current < target) {
                current += increment;
                number.textContent = Math.round(current);
                requestAnimationFrame(updateNumber);
            } else {
                number.textContent = target;
            }
        };
        
        // Iniciar la animación cuando el elemento sea visible
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateNumber();
                observer.disconnect();
            }
        });
        
        observer.observe(number);
    });
}

// Ejecutar la animación cuando se carga la página
document.addEventListener('DOMContentLoaded', animateNumbers);