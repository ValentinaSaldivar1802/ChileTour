# ChileTour - Sistema de Recomendaciones Turísticas

## Descripción
ChileTour es un sistema web que proporciona recomendaciones personalizadas de destinos turísticos en Chile basadas en un quiz de preferencias de viaje. El sistema permite a los usuarios registrarse o usar la aplicación sin registro, completar un quiz de 5 preguntas y recibir recomendaciones adaptadas a sus preferencias.

## Características Principales

### 🔐 Sistema de Autenticación
- **Login/Registro**: Los usuarios pueden crear una cuenta o iniciar sesión
- **Acceso sin registro**: También se puede usar la aplicación sin crear cuenta
- **Persistencia de sesión**: Los usuarios registrados pueden guardar sus resultados

### 📝 Quiz de Preferencias
El quiz incluye 5 preguntas sobre:
1. **Clima preferido**: Tropical, templado, frío o desértico
2. **Región de Chile**: Norte, centro, sur o islas
3. **Tipo de atracciones**: Naturales, culturales, aventura o relajación
4. **Presupuesto diario**: Desde económico hasta lujo
5. **Tipo de alojamiento**: Desde hostal hasta hotel de lujo

### 🎯 Sistema de Recomendaciones
- **Algoritmo inteligente**: Calcula puntuaciones basadas en las respuestas
- **Top 3 destinos**: Muestra los destinos más compatibles
- **Información detallada**: Cada recomendación incluye descripción y características

### 🗺️ Base de Datos de Destinos
Incluye 10 destinos turísticos representativos de Chile:
- **Norte**: San Pedro de Atacama, Valle del Elqui, Arica
- **Centro**: Santiago, Valparaíso, Viña del Mar
- **Sur**: Torres del Paine, Chiloé, Puerto Varas
- **Islas**: Rapa Nui (Isla de Pascua)

## Estructura del Proyecto

```
ChileTour/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS responsivos
├── app.js             # Lógica JavaScript principal
└── README.md          # Este archivo
```

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsivo con gradientes y animaciones
- **JavaScript ES6+**: Lógica de la aplicación con clases
- **Font Awesome**: Iconos
- **LocalStorage**: Persistencia de datos local

## Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desarrollo)

### Instalación
1. Descarga todos los archivos del proyecto
2. Coloca los archivos en una carpeta
3. Abre `index.html` en tu navegador web

### Para desarrollo local:
```bash
# Opción 1: Usar Python
python -m http.server 8000

# Opción 2: Usar Node.js
npx http-server

# Opción 3: Usar PHP
php -S localhost:8000
```

Luego visita `http://localhost:8000` en tu navegador.

## Funcionalidades Detalladas

### Sistema de Autenticación
- **Registro**: Nombre, email y contraseña
- **Login**: Email y contraseña
- **Validación**: Verificación de credenciales
- **Persistencia**: Sesión mantenida entre visitas

### Quiz Interactivo
- **Navegación**: Botones anterior/siguiente
- **Progreso visual**: Barra de progreso
- **Validación**: Debe responder todas las preguntas
- **UI responsiva**: Adaptado a móviles

### Algoritmo de Recomendación
```javascript
// Puntuación por criterio:
// - Clima: 3 puntos
// - Región: 3 puntos  
// - Atracciones: 2 puntos
// - Presupuesto: 2 puntos
// - Alojamiento: 1 punto
```

### Diseño Responsivo
- **Desktop**: Layout completo con sidebar
- **Tablet**: Adaptación de columnas
- **Mobile**: Stack vertical optimizado

## Personalización

### Agregar Nuevos Destinos
Edita el array `destinations` en `app.js`:

```javascript
{
    id: 11,
    name: "Nuevo Destino",
    region: "centro",
    climate: "temperate",
    attractions: "cultural",
    budget: "medium",
    accommodation: "hotel",
    description: "Descripción del destino",
    tags: ["Tag1", "Tag2"],
    icon: "fas fa-icon"
}
```

### Modificar Preguntas del Quiz
Edita el array `questions` en `app.js`:

```javascript
{
    id: 6,
    question: "Nueva pregunta",
    options: [
        { id: 'option1', text: 'Opción 1', value: 'value1' },
        { id: 'option2', text: 'Opción 2', value: 'value2' }
    ]
}
```

### Personalizar Estilos
Modifica `styles.css` para cambiar:
- Colores del tema
- Tipografías
- Espaciados
- Animaciones

## Base de Datos

### Estructura de Usuario
```javascript
{
    id: number,
    name: string,
    email: string,
    password: string,
    createdAt: string
}
```

### Estructura de Resultados
```javascript
{
    userId: number,
    answers: object,
    timestamp: string,
    recommendations: number[]
}
```

## Arquitectura del Sistema

El sistema está basado en el diagrama UML proporcionado e implementa las siguientes clases:

### Clases Principales
- **usuarioNoRegistrado**: Usuario que puede hacer el quiz sin registro
- **usuarioRegistrado**: Usuario con cuenta que puede guardar resultados
- **Seguridad**: Manejo de contraseñas y autenticación
- **Quiz**: Sistema de preguntas y respuestas
- **destinoTuristico**: Base de datos de destinos
- **Preguntas**: Gestión de preguntas del quiz
- **Opcion**: Opciones de respuesta
- **Respuesta**: Respuestas del usuario

### Flujo de la Aplicación
1. Usuario accede a la aplicación
2. Puede registrarse o usar sin registro
3. Completa el quiz de 5 preguntas
4. Recibe recomendaciones personalizadas
5. Puede guardar resultados (si está registrado)

## Mejoras Futuras

### Funcionalidades Adicionales
- [ ] Integración con APIs de clima en tiempo real
- [ ] Sistema de calificaciones de destinos
- [ ] Compartir resultados en redes sociales
- [ ] Mapa interactivo de destinos
- [ ] Sistema de favoritos
- [ ] Recomendaciones de hoteles y restaurantes

### Mejoras Técnicas
- [ ] Backend con Node.js/Express
- [ ] Base de datos PostgreSQL/MongoDB
- [ ] Autenticación JWT
- [ ] API REST para destinos
- [ ] Tests unitarios
- [ ] PWA (Progressive Web App)

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## Contacto

Para preguntas o sugerencias, contacta al desarrollador.

---

**ChileTour** - Descubre las maravillas de Chile 🇨🇱
