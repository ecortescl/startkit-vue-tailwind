# Vue 3 + Tailwind Starter Kit

A modern Vue.js starter kit with Tailwind CSS, following Clean Code and SOLID principles.

## Features

- 🎨 Modern UI with Tailwind CSS
- 🚀 Vue 3 with Composition API
- ⚡️ Vite for fast development
- 📱 Fully Responsive Design
- 🎯 Clean Code Architecture
- 🔄 API Services Integration
- 🔒 Environment Configuration
- 📦 Ready-to-use Components

## Detailed Project Structure

```bash
project-root/
├── public/                 # Static public assets
│   ├── favicon.ico        # Site favicon
│   └── robots.txt         # SEO robots file
│
├── src/
│   ├── assets/            # Project assets
│   │   ├── images/        # Image files
│   │   │   └── logo.svg   # Site logo
│   │   └── styles/        # Global styles
│   │       └── main.css   # Main stylesheet (Tailwind imports)
│   │
│   ├── core/             # Core application code
│   │   ├── constants/    # Application constants
│   │   │   └── index.js  # Centralized constants
│   │   │
│   │   ├── router/      # Vue Router configuration
│   │   │   └── index.js  # Route definitions
│   │   │
│   │   ├── services/    # API and service layer
│   │   │   ├── api/     # Base API configuration
│   │   │   │   └── index.js       # Axios setup & interceptors
│   │   │   ├── contact/           # Contact-related services
│   │   │   │   └── contact.service.js
│   │   │   └── services/          # Business services
│   │   │       └── services.service.js
│   │   │
│   │   └── types/      # Type definitions
│   │       ├── index.js # Common types
│   │       └── api.types.js # API-related types
│   │
│   ├── features/       # Feature-based components
│   │   └── home/      # Home page feature
│   │       ├── HomeView.vue       # Main view component
│   │       └── sections/          # Page sections
│   │           ├── AboutSection.vue
│   │           ├── ContactSection.vue
│   │           ├── HeroSection.vue
│   │           ├── ServicesSection.vue
│   │           └── StackSection.vue
│   │
│   ├── layout/        # Application layout
│   │   └── App.vue    # Root app component
│   │
│   ├── shared/        # Shared/common code
│   │   ├── components/ # Reusable components
│   │   │   ├── BaseButton.vue    # Basic button component
│   │   │   ├── BaseModal.vue     # Modal dialog component
│   │   │   ├── ContactForm.vue   # Contact form component
│   │   │   ├── CountUpNumber.vue # Animated number component
│   │   │   ├── Footer.vue        # Site footer
│   │   │   └── Navbar.vue        # Site navigation
│   │   │
│   │   └── utils/     # Utility functions
│   │       └── index.js # Common utilities
│   │
│   └── main.js        # Application entry point
│
├── .env.example       # Environment variables example
├── index.html         # HTML entry point
├── jsconfig.json      # JavaScript configuration
├── package.json       # Project dependencies and scripts
├── README.md          # Project documentation
└── vite.config.js     # Vite configuration
```

## Directory Purposes

### `/public`
- Contains static assets that will be served directly
- Files here will be copied to the build output as-is
- Useful for robots.txt, favicon.ico, and other static files

### `/src/assets`
- **images/**: Project images, logos, and icons
- **styles/**: Global CSS styles and Tailwind configuration
  - Uses PostCSS for processing
  - Includes Tailwind directives and custom styles

### `/src/core`
- Application core functionality and configuration
- **constants/**: Application-wide constants and configuration values
- **router/**: Vue Router setup and route definitions
- **services/**: API communication and business logic
  - Follows service pattern for clean separation of concerns
  - Each service focuses on specific domain functionality
- **types/**: Type definitions for TypeScript/JSDoc
  - Ensures type safety and better IDE support
  - Documents data structures and API interfaces

### `/src/features`
- Feature-based organization of components
- Each feature is self-contained with its own components
- **home/**: Example feature implementation
  - Includes view component and related sections
  - Demonstrates proper component organization

### `/src/layout`
- Application-wide layout components
- **App.vue**: Root component that defines main layout
- Handles common layout elements and routing

### `/src/shared`
- Cross-cutting concerns and shared utilities
- **components/**: Reusable UI components
  - Each component is self-contained with its own logic and styles
  - Follows atomic design principles
- **utils/**: Helper functions and common utilities
  - Shared business logic
  - Utility functions used across the application

## Component Organization

### Base Components
- Prefixed with 'Base'
- Fundamental building blocks
- Examples: BaseButton, BaseModal

### Feature Components
- Specific to a feature
- Located in feature directories
- Example: HomeView and its sections

### Shared Components
- Used across multiple features
- Located in shared/components
- Examples: Navbar, Footer

## Best Practices

### Component Structure
1. **Template**: Vue template with proper semantics
2. **Script**: Component logic using Composition API
3. **Style**: Scoped styles with Tailwind utilities

### File Naming
- **Components**: PascalCase (.vue)
- **Services**: camelCase.service.js
- **Utils**: camelCase.js
- **Types**: camelCase.types.js

### Code Organization
- Import statements grouped by type
- Props and emits defined first
- Composition functions follow
- Methods grouped by functionality

## Development Workflow

1. **Feature Development**
   ```bash
   src/features/
   ├── feature-name/
   │   ├── FeatureView.vue
   │   ├── components/
   │   └── services/
   ```

2. **Shared Components**
   ```bash
   src/shared/components/
   ├── ComponentName.vue
   └── __tests__/
   ```

3. **Service Layer**
   ```bash
   src/core/services/
   ├── feature-name/
   │   └── feature.service.js
   └── api/
   ```

## Contributing

When contributing to this project:

1. Follow the established directory structure
2. Use appropriate naming conventions
3. Include proper documentation
4. Add types for new features
5. Follow SOLID principles
6. Write tests for new functionality

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Start development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## License

MIT License - feel free to use this starter kit for any project! 