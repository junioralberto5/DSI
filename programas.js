// Filtrado de programas
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const programCards = document.querySelectorAll('.program-card');

    // Función para filtrar programas
    function filterPrograms(category) {
        programCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Event listeners para botones de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            // Filtrar programas
            filterPrograms(button.dataset.filter);
        });
    });

    // Modal de Plan de Estudios
    const planButtons = document.querySelectorAll('.btn-plan');
    const modals = document.querySelectorAll('.program-modal');

    // Datos de ejemplo para planes de estudio
    const studyPlans = {
        'ciclo-01': {
            title: 'Plan de Estudios - 01 CICLO',
            subjects: [
                'Arquitectura y Mantenimiento de Equipos de Computación',
                'Análisis y Diseño de Sistemas',
                'Fundamentos de Programación',
                'Gestión del Aprendizaje',
                'Ofimática y Herramientas TIC',
            ]
        },
        'ciclo-02': {
            title: 'Plan de Estudios - 02 CICLO',
            subjects: [
                'Diseño y Programación de Aplicaciones',
                'Base de Datos',
                'Desarrollo de Aplicaciones',
                'Metodología de Desarrollo de Software',
                'Gestión Empresarial',
                'Habilidades Comunicativas',
                'Habilidades Numéricas',
            ]
        },
        'ciclo-03': {
            title: 'Plan de Estudios - 03 CICLO',
            subjects: [
                'Desarrollo de Aplicaciones Web',
                'Desarrollo de Sistemas de Información',
                'Modelado de Procesos de Negocio',
                'Investigación e Innovación Tecnológica',
                'Pruebas y Calidad de Software',
                'Ética, Ciudadanía y Globalización',
            ]
        },
        'ciclo-04': {
            title: 'Plan de Estudios - 04 CICLO',
            subjects: [
                'Integración de Sistemas Empresariales',
                'Administración de Base de Datos',
                'Inteligencia de Negocios',
                'Comunicación Efectiva',
                'Iniciativa Empresarial',
            ]
        },
        'ciclo-05': {
            title: 'Plan de Estudios - 05 CICLO',
            subjects: [
                'Desarrollo de Aplicaciones Móviles',
                'Ingeniería Web',
                'Gestión de Proyectos',
                'Infraestructura de Sistemas de Información',
                'Proyecto de Investigación',
                'Comunicación y Argumentación',
            ]
        },
        'ciclo-06': {
            title: 'Plan de Estudios - 06 CICLO',
            subjects: [
                'Arquitectura Orientado a Servicios',
                'Inteligencia Artificial',
                'Cloud Computing',
                'Proyecto de Integración de Sistemas Empresariales',
                'Laboratorio de Liderazgo',
            ]
        },
    };

    // Función para generar el contenido del modal
    function generateModalContent(cycleId) {
        const plan = studyPlans[cycleId];
        if (!plan) return '';

        let content = `<h4>${plan.title}</h4><div class="semester-block">`;
        content += '<ul>';
        plan.subjects.forEach(subject => {
            content += `<li>${subject}</li>`;
        });
        content += '</ul></div>';

        return content;
    }

    // Event listeners para botones de plan de estudios
    planButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const programCard = button.closest('.program-card');
            const cycleId = programCard.id; // Asumiendo que cada tarjeta tiene un id único como 'ciclo-01', 'ciclo-02', etc.
            const modal = programCard.querySelector('.program-modal');

            // Generar contenido del modal
            const modalContent = modal.querySelector('.modal-content');
            modalContent.innerHTML = generateModalContent(cycleId);

            // Mostrar modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevenir scroll
        });
    });

    // Cerrar modal al hacer click fuera
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Restaurar scroll
            }
        });
    });

    // Animación de beneficios al hacer scroll
    const benefitCards = document.querySelectorAll('.benefit-card');

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const benefitsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    benefitCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        benefitsObserver.observe(card);
    });

    // Animación del CTA
    const ctaSection = document.querySelector('.programs-cta');
    const ctaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                ctaObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    ctaSection.style.opacity = '0';
    ctaSection.style.transform = 'translateY(20px)';
    ctaSection.style.transition = 'all 0.5s ease';
    ctaObserver.observe(ctaSection);
});

// Función para manejar el hover en las tarjetas de programas
document.querySelectorAll('.program-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 30px rgba(100, 255, 218, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});

// Funcionalidad para el botón CTA
document.querySelector('.cta-button').addEventListener('click', () => {
    // Aquí puedes añadir la lógica para manejar el proceso de admisión
    console.log('Iniciando proceso de admisión...');
    // Por ejemplo, redirigir a un formulario de admisión
    // window.location.href = '/admision';
});