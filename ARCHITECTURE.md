# Arquitectura del Proyecto - Clean Code & SOLID

Este proyecto ha sido reorganizado siguiendo los principios de **Clean Code** y **SOLID** para mejorar la mantenibilidad, escalabilidad y legibilidad del código.

## 📁 Estructura de Carpetas

```
src/
├── core/                    # Núcleo de la aplicación
│   ├── config/             # Configuraciones
│   ├── constants/          # Constantes globales
│   ├── router/             # Configuración de rutas
│   └── types/              # Definiciones de tipos
├── shared/                  # Recursos compartidos
│   ├── components/         # Componentes reutilizables
│   ├── composables/        # Composables Vue
│   ├── services/           # Servicios de negocio
│   └── utils/              # Utilidades
├── features/               # Características por dominio
│   ├── home/               # Funcionalidad del Home
│   │   ├── components/     # Componentes específicos
│   │   ├── composables/    # Composables específicos
│   │   └── HomeView.vue    # Vista principal
│   └── about/              # Funcionalidad del About
│       ├── components/     # Componentes específicos
│       └── AboutView.vue   # Vista principal
├── layout/                 # Componentes de diseño
│   └── App.vue             # Layout principal
└── assets/                 # Recursos estáticos
    ├── images/             # Imágenes
    ├── icons/              # Iconos SVG
    └── styles/             # Estilos CSS
```

## 🏗️ Principios Aplicados

### 1. **Single Responsibility Principle (SRP)**
- Cada archivo/clase tiene una única responsabilidad
- Los servicios están separados por funcionalidad
- Los composables manejan lógica específica

### 2. **Open/Closed Principle (OCP)**
- Los composables son extensibles sin modificar el código existente
- Los servicios pueden ser extendidos fácilmente

### 3. **Liskov Substitution Principle (LSP)**
- Los servicios implementan interfaces consistentes
- Los composables mantienen contratos estables

### 4. **Interface Segregation Principle (ISP)**
- Los servicios exponen solo métodos necesarios
- Los composables retornan solo lo que se necesita

### 5. **Dependency Inversion Principle (DIP)**
- Los componentes dependen de abstracciones (composables/servicios)
- No hay dependencias directas a implementaciones concretas

## 🔧 Componentes Clave

### **Composables** (`/shared/composables/`)
- `useProgress.js`: Maneja animaciones de progreso
- Reutilizables y testeable
- Encapsulan lógica reactiva

### **Servicios** (`/shared/services/`)
- `notificationService.js`: Maneja todas las notificaciones
- Patrón Singleton para instancia única
- Fácil de mockear para testing

### **Constantes** (`/core/constants/`)
- Centralizan valores importantes
- Evitan números/strings mágicos
- Fácil configuración

### **Utilidades** (`/shared/utils/`)
- Funciones puras y reutilizables
- Sin efectos secundarios
- Fácil testing

## 🚀 Beneficios de esta Estructura

### **Mantenibilidad**
- Código organizado por responsabilidades
- Fácil localización de funcionalidades
- Cambios aislados por feature

### **Escalabilidad**
- Nuevas features se agregan fácilmente
- Estructura consistente
- Reutilización de componentes

### **Testabilidad**
- Servicios y composables aislados
- Fácil mocking de dependencias
- Funciones puras en utilidades

### **Legibilidad**
- Nombres descriptivos
- Organización lógica
- Documentación JSDoc

## 📚 Convenciones de Nombres

- **Composables**: `use{Funcionalidad}.js`
- **Servicios**: `{funcionalidad}Service.js`
- **Componentes**: `PascalCase.vue`
- **Utilidades**: `camelCase`
- **Constantes**: `UPPER_SNAKE_CASE`

## 🔄 Flujo de Datos

1. **Componente** → usa **Composable**
2. **Composable** → usa **Servicio**
3. **Servicio** → usa **Utilidades**
4. **Constantes** → utilizadas en toda la app

## 🛠️ Próximos Pasos

- [ ] Implementar testing para composables
- [ ] Añadir validación de tipos con TypeScript
- [ ] Implementar store global (Pinia)
- [ ] Agregar internacionalización (i18n)
- [ ] Configurar linting y formatting

## 🤝 Contribución

Al agregar nuevas funcionalidades:

1. Sigue la estructura de carpetas existente
2. Utiliza los servicios y composables existentes
3. Crea nuevos archivos en la carpeta correcta
4. Mantén las convenciones de nombres
5. Documenta con JSDoc 