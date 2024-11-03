# Shadow Decks 👻🎃

Shadow Decks es una aplicación web para visualizar y explorar una galería de cartas de monstruos. Cada carta muestra una descripción básica y detalles del monstruo, los cuales se pueden ver en profundidad al hacer clic en cada carta. La aplicación incluye una barra de navegación, un diseño responsive y un modal para mostrar información detallada.

## Tabla de Contenidos
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribuciones](#contribuciones)

## Características
- Listado de cartas con información de monstruos.
- Visualización de detalles en un modal al hacer clic en cada carta.
- Diseño responsive para una mejor experiencia en dispositivos móviles.
- Barra de navegación y pie de página configurables.

## Tecnologías
- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para estilos rápidos y personalizables.
- **Vite**: Herramienta de desarrollo rápida para construir aplicaciones web modernas.

## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

```plaintext
src
├── Components         # Componentes reutilizables
│   ├── Navbar         # Barra de navegación
│   ├── Layout         # Componente de diseño general que envuelve las páginas
│   ├── Card           # Carta que muestra información básica del monstruo
│   ├── CardDetail     # Modal con detalles completos de cada monstruo
│   └── Footer         # Pie de página
├── Context            # Proveedor de contexto para compartir valores entre componentes
├── Pages              # Páginas de la aplicación
│   ├── App            # Configuración de rutas y lógica de la aplicación
│   ├── Home           # Página principal de la aplicación
│   └── NotFound       # Página de error 404
└── main.jsx           # Punto de entrada principal de la aplicación
```

## Instalación
Sigue estos pasos para descargar y ejecutar el proyecto en tu máquina local:

Clona el repositorio
```bash
git clone https://github.com/usuario/monster-card-showcase.git
```

Accede a la carpeta del proyecto
```bash
cd monster-card-showcase
```

Instala las dependencias
```bash
npm install
```

Inicia el proyecto
```bash
npm run dev
```

Abre la aplicación en tu navegador en la siguiente URL: http://localhost:5173

## Uso
En la pantalla principal, verás una serie de cartas que representan diferentes monstruos.
Haz clic en una carta para abrir un modal con más detalles sobre el monstruo.
Usa la barra de navegación para acceder a las secciones de la aplicación.
El diseño es responsive, por lo que puedes ver y probar la aplicación en dispositivos de diferentes tamaños de pantalla.

## Contribuciones
Si deseas contribuir al proyecto, sigue estos pasos:

Haz un fork del proyecto.
Crea una rama con una nueva funcionalidad (git checkout -b nueva-funcionalidad).
Realiza tus cambios y haz un commit (git commit -m 'Añadir nueva funcionalidad').
Envía los cambios a tu fork (git push origin nueva-funcionalidad).
Abre un Pull Request para revisar tus cambios.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
