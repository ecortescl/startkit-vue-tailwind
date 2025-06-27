# create-startkit-vue

> 🚀 Crea aplicaciones Vue.js modernas con Tailwind CSS y arquitectura Clean Code

Un CLI tool que genera proyectos Vue.js con una arquitectura limpia siguiendo principios SOLID.  
**Creado con ❤️ por [eCortes.cl](https://ecortes.cl) para la comunidad Vue.js**

[![npm version](https://img.shields.io/npm/v/create-startkit-vue.svg)](https://www.npmjs.com/package/create-startkit-vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Vue](https://img.shields.io/badge/Vue.js-35495E?style=flat&logo=vue.js&logoColor=4FC08D)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🚀 Uso Rápido

```bash
# npm
npm create startkit-vue@latest my-app

# yarn
yarn create startkit-vue my-app

# pnpm
pnpm create startkit-vue my-app
```

## ✨ Lo que obtienes

- **Vue.js 3** con Options API
- **Tailwind CSS 4.x** para styling moderno
- **Vite** para desarrollo ultra-rápido
- **Vue Router** configurado
- **Tabler Icons** integrados
- **Arquitectura Clean Code** con principios SOLID
- **Estructura escalable** por features
- **TypeScript ready** (con JSDoc)
- **Documentación completa** en español e inglés

## 📁 Estructura generada

```
mi-app/
├── src/
│   ├── core/                # Núcleo de la aplicación
│   │   ├── constants/      # Constantes globales
│   │   ├── router/         # Configuración de rutas
│   │   └── types/          # Definiciones de tipos
│   ├── shared/             # Recursos compartidos
│   │   ├── components/     # Componentes reutilizables
│   │   ├── composables/    # Composables Vue
│   │   ├── services/       # Servicios de negocio
│   │   └── utils/          # Utilidades
│   ├── features/           # Características por dominio
│   │   ├── home/          # Feature del Home
│   │   └── about/         # Feature del About
│   ├── layout/            # Layouts de la aplicación
│   └── assets/            # Recursos organizados
├── public/                # Archivos públicos
├── README.md             # Documentación en inglés
├── README.es.md          # Documentación en español
└── ARCHITECTURE.md       # Guía de arquitectura
```

## 🏗️ Principios implementados

- **Single Responsibility Principle (SRP)**: Cada módulo tiene una responsabilidad
- **Open/Closed Principle (OCP)**: Extensible sin modificar código existente
- **Liskov Substitution Principle (LSP)**: Componentes intercambiables
- **Interface Segregation Principle (ISP)**: Interfaces específicas
- **Dependency Inversion Principle (DIP)**: Dependencias hacia abstracciones

## 🛠️ Comandos disponibles

Una vez creado el proyecto:

```bash
cd mi-app

# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview de la build
npm run preview

# Formatear código
npm run format
```

## 📚 Documentación

Cada proyecto generado incluye:

- **README.md**: Guía completa en inglés
- **README.es.md**: Guía completa en español  
- **ARCHITECTURE.md**: Explicación detallada de la arquitectura

## 🤝 Contribuir

¿Quieres mejorar el template?

1. Fork el repositorio
2. Crea tu feature branch
3. Haz commit de tus cambios
4. Push a la branch
5. Abre un Pull Request

## 🌐 Enlaces

- **Sitio Web**: [https://ecortes.cl](https://ecortes.cl)
- **GitHub**: [https://github.com/ecortescl/startkit-vue-tailwind](https://github.com/ecortescl/startkit-vue-tailwind)
- **npm**: [https://www.npmjs.com/~ecortescl](https://www.npmjs.com/~ecortescl)

## 📄 Licencia

MIT © [eCortes.cl](https://ecortes.cl)

---

<div align="center">
  <strong>Hecho con ❤️ por eCortes.cl para la comunidad Vue.js</strong><br>
  <a href="https://ecortes.cl">🌐 ecortes.cl</a> • 
  <a href="https://github.com/ecortescl">🐙 GitHub</a> • 
  <a href="https://www.npmjs.com/~ecortescl">📦 npm</a>
</div>

**¡Happy coding! 🎉** 