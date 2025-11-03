// ChileTour - Sistema de Recomendaciones Turísticas
class ChileTourApp {
    constructor() {
        this.currentUser = null;
        this.currentQuestion = 0;
        this.quizAnswers = {};
        this.isLoggedIn = false;
        
        // Datos del quiz
        this.questions = [
            {
                id: 1,
                question: "¿Qué tipo de clima prefieres para tu viaje?",
                options: [
                    { id: 'tropical', text: 'Tropical y cálido', value: 'tropical' },
                    { id: 'temperate', text: 'Templado y agradable', value: 'temperate' },
                    { id: 'cold', text: 'Frío y nevado', value: 'cold' },
                    { id: 'desert', text: 'Desértico y seco', value: 'desert' }
                ]
            },
            {
                id: 2,
                question: "¿Qué región de Chile te interesa más?",
                options: [
                    { id: 'norte', text: 'Norte (Arica, Antofagasta, Atacama)', value: 'norte' },
                    { id: 'centro', text: 'Centro (Santiago, Valparaíso, Viña del Mar)', value: 'centro' },
                    { id: 'sur', text: 'Sur (Puerto Montt, Chiloé, Patagonia)', value: 'sur' },
                    { id: 'island', text: 'Islas (Rapa Nui, Juan Fernández)', value: 'island' }
                ]
            },
            {
                id: 3,
                question: "¿Qué tipo de atracciones prefieres?",
                options: [
                    { id: 'natural', text: 'Naturales (playas, montañas, desierto)', value: 'natural' },
                    { id: 'cultural', text: 'Culturales (museos, arquitectura, historia)', value: 'cultural' },
                    { id: 'adventure', text: 'Aventura (trekking, deportes extremos)', value: 'adventure' },
                    { id: 'relaxation', text: 'Relajación (spas, termas, tranquilidad)', value: 'relaxation' }
                ]
            },
            {
                id: 4,
                question: "¿Cuál es tu presupuesto aproximado por día?",
                options: [
                    { id: 'low', text: 'Menos de $50.000 CLP', value: 'low' },
                    { id: 'medium', text: '$50.000 - $100.000 CLP', value: 'medium' },
                    { id: 'high', text: '$100.000 - $200.000 CLP', value: 'high' },
                    { id: 'luxury', text: 'Más de $200.000 CLP', value: 'luxury' }
                ]
            },
            {
                id: 5,
                question: "¿Qué tipo de alojamiento prefieres?",
                options: [
                    { id: 'hostel', text: 'Hostal o camping', value: 'hostel' },
                    { id: 'hotel', text: 'Hotel estándar', value: 'hotel' },
                    { id: 'boutique', text: 'Hotel boutique o cabaña', value: 'boutique' },
                    { id: 'luxury', text: 'Hotel de lujo o resort', value: 'luxury' }
                ]
            }
        ];

        // Base de datos de destinos turísticos
        this.destinations = [
            // Norte
            {
                id: 1,
                name: "San Pedro de Atacama",
                region: "norte",
                climate: "desert",
                attractions: "natural",
                budget: "medium",
                accommodation: "boutique",
                description: "Desierto más árido del mundo con géiseres, salares y cielos estrellados únicos.",
                tags: ["Desierto", "Astronomía", "Géiseres", "Salares"],
                icon: "fas fa-mountain"
            },
            {
                id: 2,
                name: "Valle del Elqui",
                region: "norte",
                climate: "temperate",
                attractions: "natural",
                budget: "medium",
                accommodation: "boutique",
                description: "Valle místico perfecto para observación astronómica y turismo rural.",
                tags: ["Astronomía", "Pisco", "Turismo Rural", "Energía"],
                icon: "fas fa-star"
            },
            {
                id: 3,
                name: "Arica",
                region: "norte",
                climate: "tropical",
                attractions: "natural",
                budget: "low",
                accommodation: "hotel",
                description: "Ciudad más septentrional de Chile con playas cálidas y cultura andina.",
                tags: ["Playa", "Cultura Andina", "Historia", "Frontera"],
                icon: "fas fa-sun"
            },
            // Centro
            {
                id: 4,
                name: "Santiago",
                region: "centro",
                climate: "temperate",
                attractions: "cultural",
                budget: "medium",
                accommodation: "hotel",
                description: "Capital cultural y económica de Chile con museos, restaurantes y vida urbana.",
                tags: ["Cultura", "Gastronomía", "Museos", "Noche"],
                icon: "fas fa-city"
            },
            {
                id: 5,
                name: "Valparaíso",
                region: "centro",
                climate: "temperate",
                attractions: "cultural",
                budget: "low",
                accommodation: "hostel",
                description: "Puerto bohemio declarado Patrimonio de la Humanidad con coloridos cerros.",
                tags: ["Patrimonio", "Arte", "Bohemio", "Puerto"],
                icon: "fas fa-palette"
            },
            {
                id: 6,
                name: "Viña del Mar",
                region: "centro",
                climate: "temperate",
                attractions: "relaxation",
                budget: "high",
                accommodation: "luxury",
                description: "Ciudad jardín con playas, casinos y festivales internacionales.",
                tags: ["Playa", "Casino", "Festivales", "Jardines"],
                icon: "fas fa-tree"
            },
            // Sur
            {
                id: 7,
                name: "Torres del Paine",
                region: "sur",
                climate: "cold",
                attractions: "adventure",
                budget: "high",
                accommodation: "boutique",
                description: "Parque nacional con las torres más icónicas de la Patagonia chilena.",
                tags: ["Trekking", "Patagonia", "Glaciares", "Fauna"],
                icon: "fas fa-mountain"
            },
            {
                id: 8,
                name: "Chiloé",
                region: "sur",
                climate: "temperate",
                attractions: "cultural",
                budget: "medium",
                accommodation: "boutique",
                description: "Archipiélago mágico con iglesias de madera y mitología única.",
                tags: ["Iglesias", "Mitología", "Mariscos", "Tradición"],
                icon: "fas fa-church"
            },
            {
                id: 9,
                name: "Puerto Varas",
                region: "sur",
                climate: "temperate",
                attractions: "relaxation",
                budget: "medium",
                accommodation: "boutique",
                description: "Ciudad de los rosales con vista al volcán Osorno y lago Llanquihue.",
                tags: ["Volcán", "Lago", "Relajación", "Alemán"],
                icon: "fas fa-volcano"
            },
            // Islas
            {
                id: 10,
                name: "Rapa Nui (Isla de Pascua)",
                region: "island",
                climate: "tropical",
                attractions: "cultural",
                budget: "luxury",
                accommodation: "luxury",
                description: "Isla misteriosa con los famosos moáis y cultura polinésica única.",
                tags: ["Moáis", "Polinésico", "Misterio", "Aislado"],
                icon: "fas fa-monument"
            }
        ];

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.checkAuthStatus();
    }

    setupEventListeners() {
        // Botones de autenticación
        document.getElementById('loginBtn').addEventListener('click', () => this.showModal('loginModal'));
        document.getElementById('registerBtn').addEventListener('click', () => this.showModal('registerModal'));
        document.getElementById('logoutBtn').addEventListener('click', () => this.logout());
        document.getElementById('myResultsBtn').addEventListener('click', () => this.showMyResults());

        // Formularios
        document.getElementById('loginForm').addEventListener('submit', (e) => this.handleLogin(e));
        document.getElementById('registerForm').addEventListener('submit', (e) => this.handleRegister(e));

        // Cambio entre modales
        document.getElementById('switchToRegister').addEventListener('click', (e) => {
            e.preventDefault();
            this.hideModal('loginModal');
            this.showModal('registerModal');
        });

        document.getElementById('switchToLogin').addEventListener('click', (e) => {
            e.preventDefault();
            this.hideModal('registerModal');
            this.showModal('loginModal');
        });

        // Cerrar modales
        document.querySelectorAll('.close').forEach(closeBtn => {
            closeBtn.addEventListener('click', () => this.hideAllModals());
        });

        // Quiz
        document.getElementById('startQuizBtn').addEventListener('click', () => this.startQuiz());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('prevBtn').addEventListener('click', () => this.prevQuestion());
        document.getElementById('submitQuizBtn').addEventListener('click', () => this.submitQuiz());

        // Resultados
        document.getElementById('retakeQuizBtn').addEventListener('click', () => this.retakeQuiz());
        document.getElementById('saveResultsBtn').addEventListener('click', () => this.saveResults());
        document.getElementById('backToWelcomeBtn').addEventListener('click', () => this.showSection('welcomeSection'));
        document.getElementById('clearHistoryBtn').addEventListener('click', () => this.clearHistory());

        // Cerrar modales al hacer clic fuera
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.hideAllModals();
            }
        });
    }

    // Sistema de Autenticación
    showModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    }

    hideModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    }

    hideAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }

    async handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        try {
            // Simular autenticación (en producción sería una llamada a API)
            const user = await this.authenticateUser(email, password);
            if (user) {
                this.currentUser = user;
                this.isLoggedIn = true;
                this.updateAuthUI();
                this.hideAllModals();
                this.showNotification('¡Bienvenido!', 'success');
            } else {
                this.showNotification('Credenciales incorrectas', 'error');
            }
        } catch (error) {
            this.showNotification('Error al iniciar sesión', 'error');
        }
    }

    async handleRegister(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        try {
            // Simular registro (en producción sería una llamada a API)
            const user = await this.registerUser(name, email, password);
            if (user) {
                this.currentUser = user;
                this.isLoggedIn = true;
                this.updateAuthUI();
                this.hideAllModals();
                this.showNotification('¡Registro exitoso!', 'success');
            } else {
                this.showNotification('Error en el registro', 'error');
            }
        } catch (error) {
            this.showNotification('Error al registrarse', 'error');
        }
    }

    async authenticateUser(email, password) {
        // Simular llamada a API
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simular usuarios existentes
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                const user = users.find(u => u.email === email && u.password === password);
                resolve(user || null);
            }, 1000);
        });
    }

    async registerUser(name, email, password) {
        // Simular llamada a API
        return new Promise((resolve) => {
            setTimeout(() => {
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                
                // Verificar si el usuario ya existe
                if (users.find(u => u.email === email)) {
                    resolve(null);
                    return;
                }

                const newUser = {
                    id: Date.now(),
                    name,
                    email,
                    password,
                    createdAt: new Date().toISOString()
                };

                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                resolve(newUser);
            }, 1000);
        });
    }

    logout() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.updateAuthUI();
        this.showNotification('Sesión cerrada', 'info');
    }

    updateAuthUI() {
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const saveResultsBtn = document.getElementById('saveResultsBtn');
        const myResultsBtn = document.getElementById('myResultsBtn');
        const clearHistoryBtn = document.getElementById('clearHistoryBtn');

        if (this.isLoggedIn) {
            loginBtn.style.display = 'none';
            registerBtn.style.display = 'none';
            logoutBtn.style.display = 'inline-flex';
            myResultsBtn.style.display = 'inline-flex';
            saveResultsBtn.style.display = 'inline-flex';
            clearHistoryBtn.style.display = 'inline-flex';
        } else {
            loginBtn.style.display = 'inline-flex';
            registerBtn.style.display = 'inline-flex';
            logoutBtn.style.display = 'none';
            myResultsBtn.style.display = 'none';
            saveResultsBtn.style.display = 'none';
            clearHistoryBtn.style.display = 'none';
        }
    }

    checkAuthStatus() {
        // Verificar si hay una sesión activa
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.isLoggedIn = true;
            this.updateAuthUI();
        }
    }

    // Sistema de Quiz
    startQuiz() {
        this.currentQuestion = 0;
        this.quizAnswers = {};
        this.showSection('quizSection');
        this.loadQuestion();
    }

    loadQuestion() {
        const question = this.questions[this.currentQuestion];
        const container = document.getElementById('questionContainer');
        
        container.innerHTML = `
            <div class="question">
                <h3>${question.question}</h3>
                <div class="options">
                    ${question.options.map(option => `
                        <div class="option" data-value="${option.value}">
                            <input type="radio" name="question${question.id}" value="${option.value}" id="${option.id}">
                            <label for="${option.id}">${option.text}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        // Agregar event listeners a las opciones
        container.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', () => {
                const value = option.dataset.value;
                this.selectOption(question.id, value);
            });
        });

        this.updateProgress();
        this.updateNavigation();
    }

    selectOption(questionId, value) {
        this.quizAnswers[questionId] = value;
        
        // Actualizar UI
        document.querySelectorAll('.option').forEach(option => {
            option.classList.remove('selected');
        });
        
        const selectedOption = document.querySelector(`[data-value="${value}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }

        this.updateNavigation();
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.loadQuestion();
        }
    }

    prevQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadQuestion();
        }
    }

    updateProgress() {
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('questionCounter').textContent = 
            `Pregunta ${this.currentQuestion + 1} de ${this.questions.length}`;
    }

    updateNavigation() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitQuizBtn');

        prevBtn.disabled = this.currentQuestion === 0;
        
        if (this.currentQuestion === this.questions.length - 1) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-flex';
        } else {
            nextBtn.style.display = 'inline-flex';
            submitBtn.style.display = 'none';
        }
    }

    submitQuiz() {
        this.showLoading();
        
        // Simular procesamiento
        setTimeout(() => {
            const recommendations = this.generateRecommendations();
            this.showRecommendations(recommendations);
            this.hideLoading();
        }, 2000);
    }

    generateRecommendations() {
        // Algoritmo de recomendación basado en las respuestas
        const scores = {};
        
        this.destinations.forEach(destination => {
            let score = 0;
            
            // Pregunta 1: Clima
            if (this.quizAnswers[1] === destination.climate) score += 3;
            
            // Pregunta 2: Región
            if (this.quizAnswers[2] === destination.region) score += 3;
            
            // Pregunta 3: Atracciones
            if (this.quizAnswers[3] === destination.attractions) score += 2;
            
            // Pregunta 4: Presupuesto
            if (this.quizAnswers[4] === destination.budget) score += 2;
            
            // Pregunta 5: Alojamiento
            if (this.quizAnswers[5] === destination.accommodation) score += 1;
            
            scores[destination.id] = score;
        });

        // Ordenar por puntuación y tomar los mejores
        return this.destinations
            .sort((a, b) => scores[b.id] - scores[a.id])
            .slice(0, 3);
    }

    showRecommendations(recommendations) {
        const container = document.getElementById('recommendationsContainer');
        
        container.innerHTML = recommendations.map(destination => `
            <div class="recommendation-card">
                <div class="card-image">
                    <i class="${destination.icon}"></i>
                </div>
                <div class="card-content">
                    <h3>${destination.name}</h3>
                    <p>${destination.description}</p>
                    <div class="card-tags">
                        ${destination.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        this.showSection('resultsSection');
    }

    retakeQuiz() {
        this.showSection('welcomeSection');
    }

    saveResults() {
        if (!this.isLoggedIn) {
            this.showNotification('Debes iniciar sesión para guardar resultados', 'warning');
            return;
        }

        const results = {
            userId: this.currentUser.id,
            answers: this.quizAnswers,
            timestamp: new Date().toISOString(),
            recommendations: this.generateRecommendations().map(d => d.id)
        };

        // Guardar en localStorage (en producción sería en base de datos)
        const savedResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
        savedResults.push(results);
        localStorage.setItem('quizResults', JSON.stringify(savedResults));

        this.showNotification('Resultados guardados exitosamente', 'success');
    }

    // Funciones para Mis Resultados
    showMyResults() {
        if (!this.isLoggedIn) {
            this.showNotification('Debes iniciar sesión para ver tus resultados', 'warning');
            return;
        }

        this.showSection('myResultsSection');
        this.loadResultsHistory();
    }

    loadResultsHistory() {
        const savedResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
        const userResults = savedResults.filter(result => result.userId === this.currentUser.id);
        
        const container = document.getElementById('resultsHistoryContainer');
        
        if (userResults.length === 0) {
            container.innerHTML = `
                <div class="empty-history">
                    <i class="fas fa-history"></i>
                    <h3>No tienes resultados guardados</h3>
                    <p>Completa un quiz y guarda tus resultados para verlos aquí.</p>
                    <button class="btn btn-primary" onclick="app.showSection('welcomeSection')">
                        <i class="fas fa-play"></i>
                        Hacer Quiz
                    </button>
                </div>
            `;
            return;
        }

        // Ordenar por fecha (más recientes primero)
        userResults.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        container.innerHTML = userResults.map((result, index) => {
            const recommendations = this.getRecommendationsByIds(result.recommendations);
            const score = this.calculateScore(result.answers);
            const date = new Date(result.timestamp).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            return `
                <div class="history-item">
                    <div class="history-header">
                        <span class="history-date">Quiz #${userResults.length - index} - ${date}</span>
                        <span class="history-score">Puntuación: ${score}/11</span>
                    </div>
                    
                    <div class="history-answers">
                        <h4><i class="fas fa-question-circle"></i> Tus Respuestas</h4>
                        <div class="answers-grid">
                            ${this.questions.map(q => {
                                const answer = result.answers[q.id];
                                const option = q.options.find(opt => opt.value === answer);
                                return `
                                    <div class="answer-item">
                                        <div class="answer-question">${q.question}</div>
                                        <div class="answer-value">${option ? option.text : 'No respondida'}</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                    
                    <div class="history-recommendations">
                        <h4><i class="fas fa-map-marker-alt"></i> Recomendaciones</h4>
                        <div class="history-recommendations-grid">
                            ${recommendations.map(dest => `
                                <div class="history-recommendation-card">
                                    <h5><i class="${dest.icon}"></i> ${dest.name}</h5>
                                    <p>${dest.description}</p>
                                    <div class="history-recommendation-tags">
                                        ${dest.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    getRecommendationsByIds(ids) {
        return this.destinations.filter(dest => ids.includes(dest.id));
    }

    calculateScore(answers) {
        let score = 0;
        
        this.destinations.forEach(destination => {
            // Pregunta 1: Clima
            if (answers[1] === destination.climate) score += 3;
            
            // Pregunta 2: Región
            if (answers[2] === destination.region) score += 3;
            
            // Pregunta 3: Atracciones
            if (answers[3] === destination.attractions) score += 2;
            
            // Pregunta 4: Presupuesto
            if (answers[4] === destination.budget) score += 2;
            
            // Pregunta 5: Alojamiento
            if (answers[5] === destination.accommodation) score += 1;
        });

        return Math.min(score, 11); // Máximo 11 puntos
    }

    clearHistory() {
        if (!this.isLoggedIn) {
            this.showNotification('Debes iniciar sesión para limpiar el historial', 'warning');
            return;
        }

        if (confirm('¿Estás seguro de que quieres eliminar todo tu historial de resultados? Esta acción no se puede deshacer.')) {
            const savedResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
            const filteredResults = savedResults.filter(result => result.userId !== this.currentUser.id);
            localStorage.setItem('quizResults', JSON.stringify(filteredResults));
            
            this.loadResultsHistory();
            this.showNotification('Historial eliminado exitosamente', 'success');
        }
    }

    // Utilidades
    showSection(sectionId) {
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }

    showLoading() {
        document.getElementById('loadingSpinner').style.display = 'flex';
    }

    hideLoading() {
        document.getElementById('loadingSpinner').style.display = 'none';
    }

    showNotification(message, type = 'info') {
        // Crear notificación temporal
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 4000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Inicializar la aplicación cuando el DOM esté listo
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new ChileTourApp();
    window.app = app; // Hacer disponible globalmente
});

// Agregar estilos para las notificaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
