API Backend UTN

Este es un proyecto de backend para una API REST desarrollado como parte de un proyecto para la UTN.
 
 Esta API gestiona el inventario de libros para el sistema de bibliotecas 


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
URI_DB=mongodb://localhost:27017/nombre_de_tu_db


Ejecución de la Aplicación

Modo de Desarrollo

Para correr la aplicación en modo de desarrollo con recarga automática (hot-reloading) al detectar cambios:

npm run dev: Inicia el servidor en modo desarrollo.

El servidor estará corriendo en el puerto especificado en tu archivo .env (ej: http://localhost:3000).

Endpoints de la API (Ejemplo)

A continuación, se documentan los principales endpoints.

Autenticación

POST /auth/login: Inicia sesión de un usuario.

POST /auth/register: Registra un nuevo usuario.

Libros (Ejemplo)

GET /books: Obtiene una lista de todos los libros.

GET /books/:id: Obtiene un libro específico por su ID.

POST /books: (Protegido) Crea un nuevo libro.

PATCH /books/:id: (Protecido) Actualiza un libro existente.

DELETE /books/:id: (Protecido) Elimina un libro.