# 🚀 Create StartKit Vue CLI

> **CLI tool to generate Vue.js projects with Tailwind CSS following Clean Code and SOLID principles**

[![npm version](https://img.shields.io/npm/v/create-startkit-vue.svg?style=flat-square)](https://www.npmjs.com/package/create-startkit-vue)
[![downloads](https://img.shields.io/npm/dm/create-startkit-vue.svg?style=flat-square)](https://www.npmjs.com/package/create-startkit-vue)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

A modern project generator that creates Vue.js applications with professional architecture, similar to `npm create vue@latest` but with enhanced structure and best practices.

## ✨ What You Get

When you use this CLI, you get a complete Vue.js project with:

- **🎨 Modern UI**: Tailwind CSS 4.x with beautiful gradients and responsive design
- **🏗️ Clean Architecture**: Organized following SOLID and Clean Code principles
- **⚡ Fast Development**: Vite 7.x for instant hot-reload and optimal builds
- **🧩 Reusable Components**: Pre-built components with Tabler Icons integration
- **📱 Mobile-First**: Fully responsive design optimized for all devices
- **🔧 Development Tools**: Vue DevTools integration and professional structure
- **📦 Scalable**: Modular architecture organized by features

## 🚀 Quick Start

### Create a new project

```bash
# Using npm
npm create startkit-vue@latest my-vue-app

# Using yarn
yarn create startkit-vue my-vue-app

# Using pnpm
pnpm create startkit-vue my-vue-app
```

### Navigate and start

```bash
cd my-vue-app
npm install  # If not auto-installed
npm run dev
```

**That's it!** Your Vue.js project will be running at [http://localhost:5173](http://localhost:5173)

## 🏗️ Generated Project Structure

```
my-vue-app/
├── src/
│   ├── core/                    # Application core
│   │   ├── constants/          # Global constants and configuration
│   │   ├── router/             # Vue Router setup
│   │   └── types/              # TypeScript/JSDoc type definitions
│   ├── shared/                 # Shared resources across features
│   │   ├── components/         # Reusable UI components
│   │   ├── services/           # Business logic services
│   │   └── utils/              # Pure utility functions
│   ├── features/               # Feature-based organization
│   │   ├── home/               # Home page feature
│   │   └── about/              # About page feature
│   ├── layout/                 # Application layouts
│   └── assets/                 # Static assets (images, icons, styles)
├── public/                     # Public static files
├── index.html                  # Main HTML template
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── README.md                 # Project documentation
```

## 🛠️ Tech Stack Included

- **Framework**: Vue.js 3.5.17 (Options API)
- **Styling**: Tailwind CSS 4.1.11
- **Build Tool**: Vite 7.0.0
- **Icons**: Tabler Icons Vue
- **Router**: Vue Router 4
- **Development**: Vue DevTools integration

## 🎯 Architecture Principles

### SOLID Principles Applied

- **🎯 Single Responsibility**: Each component and service has one clear purpose
- **🔓 Open/Closed**: Easy to extend without modifying existing code
- **🔄 Liskov Substitution**: Components are interchangeable and consistent
- **🧩 Interface Segregation**: Clean, focused interfaces for better maintainability
- **🔀 Dependency Inversion**: Dependencies point to abstractions, not concretions

### Clean Code Features

- **📁 Organized Structure**: Feature-based folder organization
- **🔧 Reusable Services**: Centralized business logic
- **📝 Clear Naming**: Self-documenting code with meaningful names
- **🧪 Testable**: Architecture designed for easy unit testing
- **📚 Documented**: JSDoc annotations and clear README files

## 🛡️ Requirements

- **Node.js**: 18.0.0 or higher
- **npm**: 6.0.0 or higher (or yarn/pnpm equivalent)



## 📞 Support & Community

- **🐛 Issues**: [GitHub Issues](https://github.com/ecortescl/startkit-vue-tailwind/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/ecortescl/startkit-vue-tailwind/discussions)
- **📧 Contact**: hola@ecortes.cl
- **🌐 Website**: [eCortes.cl](https://ecortes.cl)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

<div align="center">

**Created with ❤️ by [eCortes.cl](https://ecortes.cl) for the Vue.js community**

[🚀 Get Started](https://www.npmjs.com/package/create-startkit-vue) • [📖 Documentation](https://github.com/ecortescl/startkit-vue-tailwind) • [💬 Community](https://github.com/ecortescl/startkit-vue-tailwind/discussions)

</div>
