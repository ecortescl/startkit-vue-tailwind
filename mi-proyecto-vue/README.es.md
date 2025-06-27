# 🚀 StartKit Vue + Tailwind

> Un starter kit moderno para aplicaciones Vue.js con Tailwind CSS, construido siguiendo principios de Clean Code y SOLID.

[![Vue.js](https://img.shields.io/badge/Vue.js-v3.5.17-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.11-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-v7.0.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

## ✨ Características

- **🎨 Interfaz Moderna**: Diseño responsivo con Tailwind CSS y gradientes atractivos
- **🏗️ Arquitectura Limpia**: Organizado siguiendo principios SOLID y Clean Code
- **⚡ Desarrollo Rápido**: Configurado con Vite para hot-reload instantáneo
- **🧩 Componentes Reutilizables**: Biblioteca de iconos Tabler Icons integrada
- **📱 Responsive**: Optimizado para dispositivos móviles y desktop
- **🔧 DevTools**: Vue DevTools integrado para debugging
- **📦 Modular**: Estructura escalable por características (features)

## 🛠️ Tecnologías

- **Frontend Framework**: Vue.js 3 (Composition API)
- **Styling**: Tailwind CSS 4.x
- **Build Tool**: Vite 7.x
- **Icons**: Tabler Icons Vue
- **Router**: Vue Router 4
- **Development**: Vue DevTools

## 📁 Estructura del Proyecto

```
src/
├── core/                    # Núcleo de la aplicación
│   ├── constants/          # Constantes globales
│   ├── router/             # Configuración de rutas
│   └── types/              # Definiciones de tipos
├── shared/                 # Recursos compartidos
│   ├── components/         # Componentes reutilizables
│   ├── composables/        # Composables Vue
│   ├── services/           # Servicios de negocio
│   └── utils/              # Utilidades
├── features/               # Características por dominio
│   ├── home/               # Página principal
│   └── about/              # Página acerca de
├── layout/                 # Layouts de la aplicación
└── assets/                 # Recursos estáticos
    ├── images/             # Imágenes
    ├── icons/              # Iconos SVG
    └── styles/             # Estilos CSS
```

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/startkit-vue-tailwind.git
   cd startkit-vue-tailwind
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **¡Listo!** Abre [http://localhost:5173](http://localhost:5173) en tu navegador

## 📜 Scripts Disponibles

```bash
# Desarrollo - Inicia el servidor con hot-reload
npm run dev

# Construcción - Genera la build de producción
npm run build

# Preview - Previsualiza la build de producción
npm run preview

# Formato - Formatea el código con Prettier
npm run format
```

## 🏗️ Arquitectura

Este proyecto sigue los **principios SOLID** y **Clean Code**:

### Principios Implementados

- **🎯 SRP**: Cada módulo tiene una responsabilidad única
- **🔓 OCP**: Abierto para extensión, cerrado para modificación
- **🔄 LSP**: Los componentes son intercambiables
- **🧩 ISP**: Interfaces específicas y cohesivas
- **🔀 DIP**: Dependencias invertidas hacia abstracciones

### Componentes Clave

- **Composables**: Lógica reutilizable (`useProgress`)
- **Servicios**: Operaciones de negocio (`notificationService`)
- **Constantes**: Configuración centralizada
- **Utilidades**: Funciones puras helpers

## 🎨 Personalización

### Colores y Temas

Los colores están configurados en `tailwind.config.js`:

```javascript
// Personaliza tu paleta de colores
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      secondary: '#6366F1'
    }
  }
}
```

### Agregar Nuevas Features

1. Crea una carpeta en `src/features/nueva-feature/`
2. Agrega los componentes específicos
3. Registra las rutas en `src/core/router/index.js`
4. Mantén la estructura consistente

## 🧪 Testing (Próximamente)

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📊 Performance

| Métrica | Valor |
|---------|-------|
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 2.5s |
| Bundle Size | < 100kb |
| Lighthouse Score | 95+ |

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

### Guías de Contribución

- Sigue las convenciones de nombres existentes
- Mantén la estructura de carpetas
- Agrega documentación JSDoc
- Incluye tests cuando sea posible

## 📋 Roadmap

- [ ] Sistema de autenticación
- [ ] Estado global con Pinia
- [ ] Internacionalización (i18n)
- [ ] Tests unitarios y E2E
- [ ] PWA capabilities
- [ ] Dark mode
- [ ] Storybook para componentes

## 🐛 Resolución de Problemas

### Problemas Comunes

**Error de importación de iconos**
```bash
# Reinstala las dependencias
rm -rf node_modules package-lock.json
npm install
```

**Puerto en uso**
```bash
# Cambia el puerto en vite.config.js
server: {
  port: 3000
}
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- [Vue.js Team](https://vuejs.org/) por el increíble framework
- [Tailwind Labs](https://tailwindcss.com/) por Tailwind CSS
- [Tabler](https://tabler-icons.io/) por los iconos
- [Vite Team](https://vitejs.dev/) por la herramienta de build

---

<div align="center">
  <strong>Hecho con ❤️ para la comunidad Vue.js</strong>
</div>

<div align="center">
  <a href="https://github.com/tu-usuario/startkit-vue-tailwind">⭐ Dale una estrella si te gusta este proyecto</a>
</div> 