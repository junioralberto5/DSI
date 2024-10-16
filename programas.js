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
            }else{
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
       'plan de estudio': {
            title: 'Plan de Estudios - 01 CICLO',
            semesters: [
                {
                    number: 1,
                    subjects: [
                        'Arquitectura y Mantenimiento de Equipos de Computación',
                        'Análisis y Diseño de Sistemas',
                        'Fundamentos de Programación',
                        'Gestión del Aprendizaje',
                        'Ofimática y Herramientas TIC',
                    ]
                },
                // Añadir más semestres según sea necesario
            ]
        },
        'plan de estudio': {
            title: 'Plan de Estudios - 02 CICLO',
            semesters: [
                {
                    number: 2,
                    subjects: [
                        'Diseño y Programación de Aplicaciones',
                        'Base de Datos',
                        'Desarrollo de Aplicaciones',
                        'Metodología de Desarrollo de Software',
                        'Gestión Empresarial',
                        'Habilidades Comunicativa',
                        'Habilidades Numéricas',
                    ]
                },
                // Añadir más semestres según sea necesario
            ]
        },
        'plan de estudio': {
            title: 'Plan de Estudios - 03 CICLO',
            semesters: [
                {
                    number: 3,
                    subjects: [
                        'Desarrollo de Aplicaciones Web',
                        'Desarrollo de Sistemas de Información',
                        'Modelado de Procesos de Negocio',
                        'Investigación e Innovación Tecnológica',
                        'Pruebas y Calidad de Software',
                        'Ética, Ciudadanía y Globalización',
                    ]
                },
                // Añadir más semestres según sea necesario
            ]
        },
        'plan de estudio': {
            title: 'Plan de Estudios - 04 CICLO',
            semesters: [
                {
                    number: 4,
                    subjects: [
                        'Integración de Sistemas Empresariales',
                        'Administración de Base de Datos',
                        'Inteligencia de Negocios',
                        'Comunicación Efectiva',
                        'Iniciativa Empresarial',
                    ]
                },
                // Añadir más semestres según sea necesario
            ]
        },
        'plan de estudio': {
            title: 'Plan de Estudios - 05 CICLO',
            semesters: [
                {
                    number: 5,
                    subjects: [
                        'Desarrollo de Aplicaciones Móviles',
                        'Ingeniería Web',
                        'Gestión de Proyectos',
                        'Infraestructura de Sistemas de Información',
                        'Proyecto de Investigación',
                        'Comunicación y Argumentación',
                    ]
                },
                // Añadir más semestres según sea necesario
            ],
        },
        'plan de estudio': {
            title: 'Plan de Estudios - 06 CICLO',
            semesters: [
                {
                    number: 6,
                    subjects: [
                        'Arquitectura Orientado a Servicios',
                        'Inteligencia Artificial',
                        'Cloud Computing',
                        'Proyecto de Integración de Sistemas Empresariales',
                        'Laboratorio de Liderazgo',
                    ]
                },
                // Añadir más semestres según sea necesario
            ]
        },

    };

    // Función para generar el contenido del modal
    function generateModalContent(programType) {
        const plan = studyPlans[programType];
        if (!plan) return '';

        let content = `<h4>${plan.title}</h4><div class="semester-grid">`;

        plan.semesters.forEach(semester => {
            content += `
                <div class="semester-block">
                    <h5>Semestre ${semester.number}</h5>
                    <ul>
                        ${semester.subjects.map(subject => `<li>${subject}</li>`).join('')}
                    </ul>
                </div>
            `;
        });

        content += '</div>';
        return content;
    };

    // Event listeners para botones de plan de estudios
    planButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const programCard = button.closest('.program-card');
            const programType = programCard.dataset.category;
            const modal = programCard.querySelector('.program-modal');

            // Generar contenido del modal
            const modalContent = modal.querySelector('.modal-content');
            modalContent.innerHTML = generateModalContent(programType);

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