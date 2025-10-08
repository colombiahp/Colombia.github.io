// Datos de los cursos
const cursos = [
    {
        id: 1,
        titulo: "ESPIONAJE DE DISPOSITIVOS MÓVILES",
        descripcion: "Aprende técnicas avanzadas de espionaje móvil. Accede a cualquier dispositivo remotamente, monitorea mensajes, ubicación y actividades en tiempo real. Conviértete en un experto en vigilancia digital.",
        precio_original: 99.99,
        precio_descuento: 29.99,
        duracion: "-",
        nivel: "BÁSICO",
        caracteristicas: [
         "✅ Monitoreo remoto en tiempo real",
         "✅ Acceso a mensajes y redes sociales",
         "✅ Geolocalización y seguimiento de ubicación",
         "✅ Control de cámaras y micrófonos",
         "✅ Espionaje de llamadas y conversaciones",
         "✅ Monitoreo de aplicaciones de mensajería",
         "✅ Acceso a fotos y archivos del dispositivo",
         "✅ Control remoto de funciones del teléfono",
         "✅ Ocultamiento total de la aplicación",
         "✅ Compatibilidad con iOS y Android"
        ],
        redes: {
            whatsapp: "https://wa.me/51994180170",
            telegram: "https://t.me/OSITO_101",
            instagram: "https://instagram.com/_proveedor.g5_",
            tiktok: "https://tiktok.com/@_proveedor.g5_"
        }
    },
    {
        id: 2,
        titulo: "CREAR PAGINAS WEB",
        descripcion: "Aprende a crear páginas web como un profesional.",
        precio_original: 110,
        precio_descuento: 50,
        duracion: "-",
        nivel: "INTERMEDIO",
        caracteristicas: [
         "✅ **HTML5 y CSS3 desde CERO**",
         "✅ **JavaScript para interactividad**",
         "✅ **Diseño Responsive** (móviles, tablets, PC)",
         "✅ **Soporte 24/7** en grupo privado",
         "✅ **Proyectos REALES** para tu portafolio",
         "✅ **Técnicas SEO** para aparecer en Google",
         "✅ **Deployment** (subir tu web a internet)",
        ],
        redes: {
            whatsapp: "https://wa.me/51994180170",
            telegram: "https://t.me/OSITO_101",
            instagram: "https://instagram.com/_proveedor.g5_",
            tiktok: "https://tiktok.com/@_proveedor.g5_"
        }
    },
    {
        id: 3,
        titulo: "HACKING ÉTICO PROFESIONAL",
        descripcion: "Aprende técnicas ilegales de hacking para proteger sistemas y detectar vulnerabilidades. Conviértete en un experto en ciberseguridad con métodos éticos y profesionales.",
        precio_original: 200,
        precio_descuento: 90,
        duracion: "-",
        nivel: "Avanzado",
        caracteristicas: [
         "✅ Análisis de vulnerabilidades web",
         "✅ Pruebas de penetración éticas",
         "✅ Seguridad de redes y sistemas",
         "✅ Hacking de aplicaciones móviles",
         "✅ Forensic digital e investigación",
         "✅ Técnicas de pentesting avanzado",
         "✅ Certificación internacional incluida",
         "✅ Soporte 24/7 con expertos",
         "✅ Laboratorio virtual práctico",
         "✅ Acceso a herramientas profesionales"
        ],
        redes: {
            whatsapp: "https://wa.me/51994180170",
            telegram: "https://t.me/OSITO_101",
            instagram: "https://instagram.com/_proveedor.g5_",
            tiktok: "https://tiktok.com/@_proveedor.g5_"
        }
    }
];

// Crear partículas de fondo
function crearParticulas() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (3 + Math.random() * 3) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Mostrar cursos en el grid
function mostrarCursos() {
    const grid = document.getElementById('cursosGrid');
    console.log('Mostrando cursos...');
    
    // Limpiar el grid primero
    grid.innerHTML = '';
    
    cursos.forEach((curso, index) => {
        const cursoCard = document.createElement('div');
        cursoCard.className = 'curso-card';
        cursoCard.onclick = () => mostrarModal(curso);
        
        cursoCard.innerHTML = `
            <div class="curso-imagen">
                <div class="texto-imagen">${curso.titulo.split(' ')[0].charAt(0)}</div>
            </div>
            <h3 class="curso-titulo">${curso.titulo}</h3>
            <p class="curso-descripcion">${curso.descripcion}</p>
            <div class="curso-precio">
                <span style="text-decoration: line-through; color: #ccc; font-size: 0.8em;">$${curso.precio_original}</span>
                <br>
                <span style="color: #FFD700;">$${curso.precio_descuento}</span>
            </div>
            <p style="color: #25D366; margin-top: 10px;">🕒 ${curso.duracion} | ⚡ ${curso.nivel}</p>
            <button style="margin-top: 15px; padding: 10px 20px; background: #FFD700; color: black; border: none; border-radius: 5px; font-weight: bold; cursor: pointer;">
                🛒 Comprar Ahora
            </button>
        `;
        
        grid.appendChild(cursoCard);
    });
    
    console.log('Cursos mostrados correctamente');
}

// Mostrar modal con detalles del curso
function mostrarModal(curso) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';
    modal.style.position = 'fixed';
    modal.style.zIndex = '1000';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    modal.style.overflowY = 'auto'; // Permitir scroll
    
    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, #1a1a2e, #16213e); margin: 2% auto; padding: 40px; border: 3px solid #FFD700; border-radius: 20px; width: 95%; max-width: 900px; position: relative; color: white; min-height: 90vh;">
            <span style="color: #FFD700; float: right; font-size: 35px; font-weight: bold; cursor: pointer; position: sticky; top: 10px; background: rgba(0,0,0,0.8); border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; z-index: 1001;" onclick="this.parentElement.parentElement.remove()">&times;</span>
            
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #FFD700; margin-bottom: 10px; font-size: 2.5em; text-shadow: 0 0 10px rgba(255,215,0,0.5);">${curso.titulo}</h2>
                <p style="color: #25D366; font-size: 1.2em;">🕒 ${curso.duracion} | ⚡ ${curso.nivel}</p>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 40px;">
                <div style="background: rgba(255,215,0,0.1); padding: 25px; border-radius: 15px; border: 2px solid #FFD700;">
                    <h3 style="color: #FFD700; margin-bottom: 20px; text-align: center; font-size: 1.8em;">🚀 ¡Oferta Especial!</h3>
                    <div style="font-size: 2.5em; color: #FFD700; font-weight: bold; text-align: center;">
                        <span style="text-decoration: line-through; color: #ccc; font-size: 0.7em;">$${curso.precio_original}</span>
                        <br>
                        <span style="color: #FFD700; text-shadow: 0 0 10px rgba(255,215,0,0.5);">$${curso.precio_descuento}</span>
                    </div>
                    <p style="text-align: center; color: #25D366; margin-top: 15px; font-size: 1.3em; font-weight: bold;">
                        💰 Ahorras $${curso.precio_original - curso.precio_descuento}
                    </p>
                </div>
                
                <div style="background: rgba(0,255,0,0.1); padding: 25px; border-radius: 15px; border: 2px solid #25D366;">
                    <h3 style="color: #25D366; margin-bottom: 15px; text-align: center; font-size: 1.8em;">🎯 Descripción</h3>
                    <p style="color: #ccc; line-height: 1.7; font-size: 1.1em; text-align: justify;">${curso.descripcion}</p>
                </div>
            </div>
            
            <div style="margin-bottom: 40px;">
                <h3 style="color: #FFD700; margin-bottom: 25px; text-align: center; font-size: 2em; border-bottom: 2px solid #FFD700; padding-bottom: 10px;">📋 Lo que incluye el curso:</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    ${curso.caracteristicas.map(caract => `
                        <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; border-left: 4px solid #FFD700;">
                            <p style="color: #ccc; margin: 0; font-size: 1.1em; line-height: 1.4;">${caract}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="background: rgba(255,0,0,0.1); padding: 25px; border-radius: 15px; border: 2px solid #ff6b6b; margin-bottom: 40px;">
                <h4 style="color: #ff6b6b; text-align: center; margin-bottom: 15px; font-size: 1.5em;">⚡ ¡Oferta por Tiempo Limitado!</h4>
                <p style="color: #ff6b6b; text-align: center; font-size: 1.2em; font-weight: bold;">
                    ⏰ Esta oferta especial termina en 48 horas
                </p>
            </div>
            
            <div style="text-align: center; background: rgba(255,215,0,0.1); padding: 30px; border-radius: 15px; border: 2px solid #FFD700;">
                <h3 style="color: #FFD700; margin-bottom: 25px; font-size: 2em;">💬 ¡Contáctame ahora y comienza!</h3>
                <p style="color: #ccc; margin-bottom: 25px; font-size: 1.2em;">
                    No pierdas esta oportunidad única. ¡Comienza tu camino hoy mismo!
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <a href="${curso.redes.whatsapp}" style="padding: 15px 25px; background: #25D366; color: white; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 1.1em; display: flex; align-items: center; justify-content: center; gap: 10px; transition: all 0.3s ease;" target="_blank" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 5px 15px rgba(37, 211, 102, 0.5)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                    <a href="${curso.redes.telegram}" style="padding: 15px 25px; background: #0088cc; color: white; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 1.1em; display: flex; align-items: center; justify-content: center; gap: 10px; transition: all 0.3s ease;" target="_blank" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 5px 15px rgba(0, 136, 204, 0.5)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                        <i class="fab fa-telegram"></i> Telegram
                    </a>
                    <a href="${curso.redes.instagram}" style="padding: 15px 25px; background: #E4405F; color: white; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 1.1em; display: flex; align-items: center; justify-content: center; gap: 10px; transition: all 0.3s ease;" target="_blank" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 5px 15px rgba(228, 64, 95, 0.5)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                        <i class="fab fa-instagram"></i> Instagram
                    </a>
                    <a href="${curso.redes.tiktok}" style="padding: 15px 25px; background: #000000; color: white; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 1.1em; display: flex; align-items: center; justify-content: center; gap: 10px; border: 2px solid #FF0050; transition: all 0.3s ease;" target="_blank" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 5px 15px rgba(255, 0, 80, 0.5)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                        <i class="fab fa-tiktok"></i> TikTok
                    </a>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Cerrar modal al hacer click fuera
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.remove();
        }
    };
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function closeModalOnEsc(event) {
        if (event.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', closeModalOnEsc);
        }
    });
}

// Inicializar cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página cargada - Iniciando...');
    crearParticulas();
    mostrarCursos();
    console.log('Página completamente cargada y cursos mostrados');
});