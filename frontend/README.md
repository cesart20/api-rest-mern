# Frontend de la API de Gestión de Publicaciones y Usuarios

Este es el frontend de la API de Gestión de Publicaciones y Usuarios, creado con **React** y **Vite**. Esta aplicación permite a los usuarios registrarse, iniciar sesión, gestionar publicaciones, y más. Utiliza el contexto para la gestión del estado de la autenticación y las publicaciones.

## Tecnologías Utilizadas

- **React**: Librería para la construcción de interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para aplicaciones de React.
- **React Router**: Para el enrutamiento de la aplicación y gestión de rutas.
- **Context API**: Para la gestión del estado de autenticación y datos relacionados con las publicaciones.

## Instalación

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/cesart20/api-rest-mern
    ```

    ```npm install```


    ```npm run dev```




   ## Estructura de Rutas

La aplicación está organizada en diferentes rutas, algunas protegidas por autenticación y otras públicas.

### Rutas Disponibles

#### Páginas Públicas
- **/login**: Iniciar sesión con un usuario existente.
- **/register**: Crear un nuevo usuario.

#### Páginas Protegidas (requieren autenticación)
- **/dashboard**: Ver el panel de control del usuario.
- **/create**: Crear una nueva publicación.
- **/update**: Actualizar una publicación existente.

## Estructura del Proyecto

- **pages**: Contiene las páginas de la aplicación (Login, Register, Dashboard, etc.).
- **Routes**: Gestiona las rutas protegidas (AuthRoutes, GuestRoutes).
- **components**: Componentes reutilizables como el Layout.
- **context**: Contiene el contexto para la gestión del estado de autenticación y publicaciones.

