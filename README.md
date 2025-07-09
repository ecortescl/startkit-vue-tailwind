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
- **🧩 Reusable Components**: Pre-built components including modals, forms, and navigation
- **📱  Mobile-First**: Fully responsive design optimized for all devices
- **🔧 Development Tools**: Vue DevTools integration and professional structure
- **📦 Scalable**: Modular architecture organized by features and sections
- **🔍 SEO Ready**: Automatic robots.txt and sitemap.xml generation for better search engine visibility
- **🤖 AI Development**: Includes context_cursor.txt for enhanced AI coding assistance in Visual Studio Code

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

**That's it!** Your Vue.js project will be running at [http://localhost:5173](http://localhost:5173)

## 🏗️ Project Structure

```bash
create-startkit-vue/
├── bin/                      # CLI tool
│   └── create-startkit.js    # Project generator script
│
└── template/                 # Project template
    ├── public/               # Static public assets
    │   ├── favicon.ico      # Site favicon
    │   └── robots.txt       # SEO robots file
    │
    ├── src/
    │   ├── assets/          # Project assets
    │   │   ├── images/      # Image files
    │   │   │   └── logo.svg # Site logo
    │   │   └── styles/      # Global styles
    │   │       └── main.css # Main stylesheet with Tailwind
    │   │
    │   ├── core/             # Core application code
    │   │   ├── constants/    # Global constants
    │   │   │   └── index.js  # Centralized constants
    │   │   ├── router/       # Vue Router setup
    │   │   │   └── index.js  # Route definitions
    │   │   ├── services/     # API and service layer
    │   │   │   ├── api/      # Base API configuration
    │   │   │   ├── contact/  # Contact-related services
    │   │   │   └── services/ # Business services
    │   │   └── types/        # Type definitions
    │   │       └── api.types.js # API-related types
    │   │
    │   ├── features/         # Feature-based components
    │   │   └── home/         # Home page feature
    │   │       ├── HomeView.vue    # Main view
    │   │       └── sections/       # Page sections
    │   │           ├── AboutSection.vue
    │   │           ├── ContactSection.vue
    │   │           ├── HeroSection.vue
    │   │           ├── ServicesSection.vue
    │   │           └── StackSection.vue
    │   │
    │   ├── layout/          # Application layout
    │   │   └── App.vue      # Root component
    │   │
    │   ├── shared/          # Shared/common code
    │   │   ├── components/  # Reusable components
    │   │   │   ├── BaseButton.vue   # Button component
    │   │   │   ├── BaseModal.vue    # Modal component
    │   │   │   ├── ContactForm.vue  # Contact form
    │   │   │   ├── CountUpNumber.vue# Number animation
    │   │   │   ├── Footer.vue       # Site footer
    │   │   │   └── Navbar.vue       # Navigation
    │   │   └── utils/       # Utility functions
    │   │
    │   └── main.js          # Application entry
    │
    ├── .env.example         # Environment variables
    ├── index.html           # HTML entry point
    ├── jsconfig.json        # JavaScript config
    ├── package.json         # Dependencies
    ├── README.md            # Project docs
    └── vite.config.js       # Vite config
```



## 🛠️ Tech Stack Included

- **Framework**: Vue.js 3.5.17
- **Styling**: Tailwind CSS 4.1.11
- **Build Tool**: Vite 7.0.0
- **Icons**: Tabler Icons Vue
- **Router**: Vue Router 4
- **Development**: Vue DevTools integration
- **SEO Tools**: 
  - Automatic sitemap.xml generation
  - Configured robots.txt
  - SEO-friendly routes
- **AI Development**:
  - Preconfigured context_cursor.txt for AI pair programming
  - Enhanced code completion with AI assistance

## 🎯 Architecture Principles

### SOLID Principles Applied

- **🎯 Single Responsibility**: Each component and service has one clear purpose
- **🔓 Open/Closed**: Easy to extend without modifying existing code
- **🔄 Liskov Substitution**: Components are interchangeable and consistent
- **🧩 Interface Segregation**: Clean, focused interfaces for better maintainability
- **🔀 Dependency Inversion**: Dependencies point to abstractions, not concretions

### Clean Code Features

- **📁 Organized Structure**: Feature-based folder organization with section-based components
- **🔧 Reusable Components**: Base components for common UI elements
- **📝 Clear Naming**: Self-documenting code with meaningful names
- **🧪 Testable**: Architecture designed for easy unit testing
- **📚 Documented**: JSDoc annotations and clear README files


## 📞 Support & Community

- **🐛 Issues**: [GitHub Issues](https://github.com/ecortescl/startkit-vue-tailwind/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/ecortescl/startkit-vue-tailwind/discussions)
- **📧 Contact**: hola@ecortes.cl

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

<div align="center">

**Created with ❤️ by [eCortes.cl](https://github.com/ecortescl) for the Vue.js community**


</div>
