# 🎮 Tres en Raya con React

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Rogercode97/tres-en-raya-react)

Juego clásico de Tres en Raya (Tic-Tac-Toe) implementado con React, incluyendo efectos de confetti al ganar y seguimiento del historial de movimientos.

## ✨ Características Principales

- 🎯 **Juego Clásico**: Implementación fiel del juego Tres en Raya
- 🎊 **Efectos Visuales**: Confetti animado cuando un jugador gana
- 📜 **Historial Completo**: Navega por todos los movimientos anteriores
- 🔄 **Viaje en el Tiempo**: Vuelve a cualquier punto del juego
- 📱 **Responsive**: Se adapta a diferentes tamaños de pantalla
- 🎨 **Interfaz Amigable**: Diseño moderno y atractivo

## 🚀 Cómo Ejecutar Localmente

### Requisitos Previos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/Rogercode97/tres-en-raya-react.git

# 2. Navegar al directorio del proyecto
cd tres-en-raya-react

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev

# 5. Abrir en el navegador
# La aplicación estará disponible en http://localhost:5173

Comandos Adicionales
bash

# Construir para producción
npm run build

# Vista previa de la build de producción
npm run preview

# Ejecutar linter
npm run lint

🎮 Cómo Jugar

    Inicio: El jugador X siempre comienza primero

    Turnos: Los jugadores alternan turnos (X y O)

    Objetivo: Formar una línea de 3 símbolos iguales (horizontal, vertical o diagonal)

    Historial: Usa la lista de movimientos para volver a jugadas anteriores

    Fin del Juego: El juego termina cuando hay un ganador o empate

📁 Estructura del Proyecto
text

tres-en-raya-react/
├── public/          # Archivos estáticos
├── src/
│   ├── assets/      # Imágenes y recursos
│   ├── components/  # Componentes React
│   │   ├── Board.jsx       # Tablero principal
│   │   ├── Square.jsx      # Casilla individual
│   │   ├── Confetti.jsx    # Efecto de confetti
│   │   └── Confetti.css    # Estilos del confetti
│   ├── App.jsx      # Componente principal
│   ├── App.css      # Estilos principales
│   └── main.jsx     # Punto de entrada
├── index.html       # Plantilla HTML
├── vite.config.js   # Configuración de Vite
└── package.json     # Dependencias y scripts

🛠 Tecnologías Utilizadas

    React 18+: Biblioteca principal para la interfaz de usuario

    Vite: Herramienta de construcción rápida y servidor de desarrollo

    CSS3: Estilos personalizados y efectos visuales

    JavaScript ES6+: Lógica del juego

    Git & GitHub: Control de versiones y hosting

👤 Autor

Roger

    GitHub: @Rogercode97

    Proyecto: Tres en Raya con React

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!