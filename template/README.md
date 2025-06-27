# 🚀 StartKit Vue + Tailwind

> A modern starter kit for Vue.js applications with Tailwind CSS, built following Clean Code and SOLID principles.

[![Vue.js](https://img.shields.io/badge/Vue.js-v3.5.17-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1.11-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-v7.0.0-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

[🇪🇸 Español](README.es.md) | 🇺🇸 English

## ✨ Features

- **🎨 Modern UI**: Responsive design with Tailwind CSS and attractive gradients
- **🏗️ Clean Architecture**: Organized following SOLID and Clean Code principles
- **⚡ Fast Development**: Configured with Vite for instant hot-reload
- **🧩 Reusable Components**: Integrated Tabler Icons library
- **📱 Responsive**: Optimized for mobile and desktop devices
- **🔧 DevTools**: Built-in Vue DevTools for debugging
- **📦 Modular**: Scalable structure by features

## 🛠️ Tech Stack

- **Frontend Framework**: Vue.js 3 (Options API)
- **Styling**: Tailwind CSS 4.x
- **Build Tool**: Vite 7.x
- **Icons**: Tabler Icons Vue
- **Router**: Vue Router 4
- **Development**: Vue DevTools

## 📁 Project Structure

```
src/
├── core/                    # Application core
│   ├── constants/          # Global constants
│   ├── router/             # Route configuration
│   └── types/              # Type definitions
├── shared/                 # Shared resources
│   ├── components/         # Reusable components
│   ├── composables/        # Vue composables
│   ├── services/           # Business services
│   └── utils/              # Utilities
├── features/               # Domain features
│   ├── home/               # Home page
│   └── about/              # About page
├── layout/                 # Application layouts
└── assets/                 # Static assets
    ├── images/             # Images
    ├── icons/              # SVG icons
    └── styles/             # CSS styles
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/startkit-vue-tailwind.git
   cd startkit-vue-tailwind
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Done!** Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

```bash
# Development - Start server with hot-reload
npm run dev

# Build - Generate production build
npm run build

# Preview - Preview production build
npm run preview

# Format - Format code with Prettier
npm run format
```

## 🏗️ Architecture

This project follows **SOLID principles** and **Clean Code**:

### Implemented Principles

- **🎯 SRP**: Each module has a single responsibility
- **🔓 OCP**: Open for extension, closed for modification
- **🔄 LSP**: Components are interchangeable
- **🧩 ISP**: Specific and cohesive interfaces
- **🔀 DIP**: Dependencies inverted towards abstractions

### Key Components

- **Composables**: Reusable logic (`useProgress`)
- **Services**: Business operations (`notificationService`)
- **Constants**: Centralized configuration
- **Utils**: Pure helper functions

## 🎨 Customization

### Colors and Themes

Colors are configured in `tailwind.config.js`:

```javascript
// Customize your color palette
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',
      secondary: '#6366F1'
    }
  }
}
```

### Adding New Features

1. Create a folder in `src/features/new-feature/`
2. Add specific components
3. Register routes in `src/core/router/index.js`
4. Maintain consistent structure

## 🧪 Testing (Coming Soon)

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage
npm run test:coverage
```

## 📊 Performance

| Metric | Value |
|--------|-------|
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 2.5s |
| Bundle Size | < 100kb |
| Lighthouse Score | 95+ |

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow existing naming conventions
- Maintain folder structure
- Add JSDoc documentation
- Include tests when possible

## 📋 Roadmap

- [ ] Authentication system
- [ ] Global state with Pinia
- [ ] Internationalization (i18n)
- [ ] Unit and E2E tests
- [ ] PWA capabilities
- [ ] Dark mode
- [ ] Storybook for components

## 🐛 Troubleshooting

### Common Issues

**Icon import error**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Port in use**
```bash
# Change port in vite.config.js
server: {
  port: 3000
}
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vue.js Team](https://vuejs.org/) for the amazing framework
- [Tailwind Labs](https://tailwindcss.com/) for Tailwind CSS
- [Tabler](https://tabler-icons.io/) for the icons
- [Vite Team](https://vitejs.dev/) for the build tool

---

<div align="center">
  <strong>Made with ❤️ for the Vue.js community</strong>
</div>

<div align="center">
  <a href="https://github.com/your-username/startkit-vue-tailwind">⭐ Give a star if you like this project</a>
</div>
