# 💻 SupportDesk - Frontend

Interfaz de usuario moderna y responsiva para el sistema de gestión de tickets **SupportDesk**. Construida con **React 19**, **Tailwind CSS v4**, **Framer Motion** para animaciones y comunicación en tiempo real mediante **WebSockets**.

## 🌐 Enlaces Rápidos

- 🚀 **Demo en Vivo:** [supportdesk-frontend-nine.vercel.app](https://supportdesk-frontend-nine.vercel.app/)
- ⚙️ **Repositorio Backend:** [jordantejadadev/supportdesk-backend](https://github.com/jordantejadadev/supportdesk-backend)

---

## ✨ Características de la Interfaz

- 🔐 **Autenticación y Rutas Protegidas:** Inicio de sesión y registro con decodificación de tokens JWT (`jwt-decode`) y manejo de contexto global (`AuthContext`).
- 📊 **Dashboard Dinámico:** Visualización interactiva de estadísticas de tickets mediante gráficos de barras y torta con **Recharts**.
- ⚡ **Actualizaciones en Tiempo Real:** Integración con WebSockets usando `@stomp/stompjs` y `sockjs-client` para la escucha e interacción inmediata de cambios en los tickets.
- 🎨 **Diseño Moderno & UI Fluida:** Estilizado con **Tailwind CSS v4**, iconografía con **Lucide React**, componentes animados mediante **Framer Motion** y notificaciones flotantes con `react-hot-toast`.
- 🔍 **Filtros y Búsqueda:** Búsqueda en tiempo real por asunto de ticket y filtrado según estado (`Abierto`, `En Progreso`, `Cerrado`).

---

## 🛠️ Tecnologías y Librerías

- **Core:** React 19, Vite, React Router DOM v7
- **Estilos & UI:** Tailwind CSS v4, `@tailwindcss/vite`, `@fontsource/inter`, Lucide React
- **Animaciones & Notificaciones:** Framer Motion, React Hot Toast
- **Visualización de Datos:** Recharts
- **Comunicación & WebSockets:** `@stomp/stompjs`, `sockjs-client`
- **Seguridad & Utilidades:** JWT Decode

---

## 📂 Estructura del Proyecto

```text
src/
├── api/                    # Configuración e instancias para HTTP
├── assets/                 # Recursos estáticos (imágenes, iconos)
├── components/             # Componentes reutilizables de la UI
│   ├── users/              # Componentes específicos de usuarios
│   │   └── CreateUserModal.jsx
│   ├── ConfirmModal.jsx
│   ├── ProtectedRoute.jsx
│   ├── StatCard.jsx
│   ├── StatusBadge.jsx
│   └── TicketModal.jsx
├── context/                # Estado global (AuthContext)
│   └── AuthContext.jsx
├── hooks/                  # Custom Hooks
│   ├── useAuth.js
│   ├── useDashboard.js
│   ├── useLogin.js
│   ├── useTickets.js
│   ├── useTicketSocket.js
│   └── useUsers.js
├── layouts/                # Contenedores principales (DashboardLayout)
│   └── DashboardLayout.jsx
├── pages/                  # Vistas principales de la app
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Stats.jsx
│   ├── Tickets.jsx
│   └── Users.jsx
├── services/               # Peticiones API (Auth, Tickets, Users, Dashboard)
│   ├── api.js
│   ├── auth.js
│   ├── authService.js
│   ├── dashboardService.js
│   ├── loginService.js
│   ├── ticketServices.js
│   └── userServices.js
└── utils/                  # Funciones auxiliares y utilidades
    └── auth.js
```

---

## 🚀 Instalación y Configuración Local

### Prerrequisitos

- **Node.js** (v18 o superior)
- **npm** o **yarn**

### 1. Clonar el Repositorio

```bash
git clone https://github.com/jordantejadadev/supportdesk-frontend.git
cd supportdesk-frontend
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz de tu proyecto e incluye la URL de tu API del backend:

```env
VITE_API_URL=http://localhost:8080
```

> **Nota:** Reemplaza el valor si deseas conectar con tu backend desplegado en producción (Render).

### 4. Ejecutar la Aplicación

```bash
npm run dev
```

La aplicación se ejecutará por defecto en `http://localhost:5173`.

---

## 📜 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Vite.
- `npm run build`: Compila la aplicación optimizada para producción.
- `npm run preview`: Sirve localmente la versión compilada de producción.
- `npm run lint`: Ejecuta el linter ESLint para detectar fallos de código.

---

## 👨‍💻 Autor

Desarrollado por **Jordan Tejada**

- **GitHub:** [@jordantejadadev](https://github.com/jordantejadadev)
- **Demo del Proyecto:** [supportdesk-frontend-nine.vercel.app](https://supportdesk-frontend-nine.vercel.app/)