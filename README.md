API Backend UTN

Este es un proyecto de backend para una API REST desarrollado como parte de un proyecto para la UTN.

Esta API gestiona el inventario de libros para el sistema de bibliotecas.

Índice

Tecnologías Utilizadas

Prerrequisitos

Instalación

Configuración

Ejecución de la Aplicación

Estructura de Comandos

Endpoints de la API (Ejemplo)

Tecnologías Utilizadas

Este proyecto está construido con las siguientes tecnologías:

Node.js: Entorno de ejecución para JavaScript.

Express.js: Framework para construir la API REST.

MongoDB: Base de datos NoSQL.

Mongoose: ODM para modelar los datos de MongoDB.

Zod: Librería para la validación de esquemas y tipos.

JSON Web Tokens (JWT): Para la autenticación y autorización.

Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

Node.js (se recomienda v18 o superior)

npm o yarn

MongoDB (una instancia local o un cluster en la nube como MongoDB Atlas)

Instalación

Clona el repositorio:

git clone <repository-url>


Navega al directorio del proyecto:

cd api-backend-utn


Instala las dependencias:

npm install


Configuración

Crea un archivo .env en la raíz del proyecto. Puedes copiar el archivo de ejemplo:

cp .env.example .env


Añade las siguientes variables de entorno al archivo .env con tus propios valores:

# Puerto en el que correrá el servidor (ej: 3000)
PORT=3000

# Clave secreta para firmar los tokens JWT (debe ser larga y segura)
JWT_SECRET=tu_secreto_jwt_aqui

# String de conexión a tu base de datos MongoDB
URI_DB=mongodb://localhost:27017/nombre_de_tu_bd


Ejecución de la Aplicación

Modo de Desarrollo

Para correr la aplicación en modo de desarrollo con recarga automática (hot-reloading) al detectar cambios:

npm run dev


Modo de Producción

Construye el proyecto (si estás usando TypeScript, esto compilará el código a JavaScript):

npm run build


Inicia el servidor en modo producción:

npm run start


El servidor estará corriendo en el puerto especificado en tu archivo .env (ej: http://localhost:3000).

Estructura de Comandos

npm install: Instala todas las dependencias.

npm run dev: Inicia el servidor en modo desarrollo (con nodemon o similar).

npm run build: Compila el proyecto para producción.

npm run start: Ejecuta la versión de producción compilada.

Endpoints de la API (Ejemplo)

A continuación, se documentan los principales endpoints.

Autenticación

POST /api/auth/login: Inicia sesión de un usuario.

POST /api/auth/register: Registra un nuevo usuario.

Libros (Ejemplo)

GET /api/books: Obtiene una lista de todos los libros.

GET /api/books/:id: Obtiene un libro específico por su ID.

POST /api/books: (Protegido) Crea un nuevo libro.

PUT /api/books/:id: (Protegido) Actualiza un libro existente.

DELETE /api/books/:id: (Protegido) Elimina un libro.