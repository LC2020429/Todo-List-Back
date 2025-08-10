# Todo List Backend

Este proyecto es el backend de una aplicación Todo List, desarrollado con Node.js, Express y MongoDB Atlas. Está desplegado en Vercel y permite gestionar tareas mediante una API REST.

## Características

- CRUD de tareas (crear, leer, actualizar, eliminar)
- Conexión segura a MongoDB Atlas
- Middleware de seguridad (Helmet, CORS, Morgan)
- Permite peticiones desde el frontend desplegado en Firebase

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/todo-list-back.git
   cd todo-list-back
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Crea un archivo `.env` con tus variables de entorno:
   ```
   MONGO_URI=tu_uri_de_mongodb_atlas
   ```

## Uso local

1. Ejecuta el servidor:
   ```
   npm run dev
   ```
2. El backend estará disponible en `http://localhost:3000` (o el puerto que configures).

## Despliegue en Vercel

- El backend está configurado para funcionar en Vercel sin necesidad de arrancar el servidor manualmente (`app.listen`).
- Exporta la instancia de Express para que Vercel maneje las rutas.
- Asegúrate de configurar las variables de entorno en el dashboard de Vercel.

## CORS

El backend permite peticiones desde:
- `http://localhost:5173` (desarrollo)
- `https://todo-list-2e0f8.web.app` (frontend en Firebase)

## Endpoints principales

- `GET /todo-api/to-do` - Listar tareas
- `POST /todo-api/to-do` - Crear tarea
- `PUT /todo-api/to-do/:id` - Actualizar tarea
- `DELETE /todo-api/to-do/:id` - Eliminar tarea
