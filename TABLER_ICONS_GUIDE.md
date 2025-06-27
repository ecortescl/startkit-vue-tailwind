# Guía de Tabler Icons para Vue.js

Esta guía te muestra cómo usar Tabler Icons en tu proyecto Vue.js con Tailwind CSS.

## Instalación

Ya tienes instalado `@tabler/icons-vue` en tu proyecto:

```bash
npm install @tabler/icons-vue
```

## Uso Básico

### 1. Importar íconos

```vue
<script setup>
import { IconHome, IconUser, IconSettings } from '@tabler/icons-vue'
</script>
```

### 2. Usar en el template

```vue
<template>
  <!-- Ícono básico -->
  <IconHome />
  
  <!-- Con clases de Tailwind -->
  <IconUser class="w-6 h-6 text-blue-500" />
  
  <!-- En botones -->
  <button class="flex items-center gap-2">
    <IconSettings class="w-4 h-4" />
    Configuración
  </button>
</template>
```

## Ejemplos Prácticos

### Navegación

```vue
<nav class="flex space-x-4">
  <a href="/" class="flex items-center gap-2 text-blue-600">
    <IconHome class="w-5 h-5" />
    Inicio
  </a>
  <a href="/profile" class="flex items-center gap-2 text-gray-600">
    <IconUser class="w-5 h-5" />
    Perfil
  </a>
</nav>
```

### Cards con íconos

```vue
<div class="bg-white p-6 rounded-lg shadow">
  <div class="flex items-center mb-4">
    <IconMail class="w-8 h-8 text-blue-500 mr-3" />
    <h3 class="text-lg font-semibold">Contacto</h3>
  </div>
  <p>Información de contacto...</p>
</div>
```

### Botones de acción

```vue
<div class="flex gap-2">
  <button class="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2">
    <IconCheck class="w-4 h-4" />
    Guardar
  </button>
  
  <button class="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2">
    <IconX class="w-4 h-4" />
    Cancelar
  </button>
</div>
```

## Tamaños Comunes

```vue
<!-- Pequeño -->
<IconStar class="w-4 h-4" />

<!-- Mediano -->
<IconStar class="w-6 h-6" />

<!-- Grande -->
<IconStar class="w-8 h-8" />

<!-- Extra grande -->
<IconStar class="w-12 h-12" />
```

## Colores con Tailwind

```vue
<!-- Colores básicos -->
<IconHome class="text-blue-500" />
<IconUser class="text-green-500" />
<IconSettings class="text-gray-500" />

<!-- Estados -->
<IconCheck class="text-green-600" />
<IconX class="text-red-600" />
<IconAlert class="text-yellow-600" />
```

## Íconos Más Utilizados

```vue
<script setup>
import {
  // Navegación
  IconHome,
  IconUser,
  IconSettings,
  IconSearch,
  IconMenu,
  
  // Acciones
  IconPlus,
  IconMinus,
  IconEdit,
  IconTrash,
  IconDownload,
  IconUpload,
  
  // Estado
  IconCheck,
  IconX,
  IconAlert,
  IconInfo,
  
  // Comunicación
  IconMail,
  IconPhone,
  IconMessage,
  
  // Redes sociales
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  
  // Archivos
  IconFile,
  IconFolder,
  IconPhoto,
  IconVideo,
  
  // UI
  IconChevronDown,
  IconChevronUp,
  IconChevronLeft,
  IconChevronRight,
  IconDots,
  IconHeart,
  IconStar
} from '@tabler/icons-vue'
</script>
```

## Configuración Global (Opcional)

Si quieres usar los íconos globalmente sin importarlos en cada componente:

1. Crea un plugin en `src/plugins/tabler-icons.js`:

```js
import * as TablerIcons from '@tabler/icons-vue'

export default {
  install(app) {
    for (const [key, component] of Object.entries(TablerIcons)) {
      app.component(key, component)
    }
  }
}
```

2. Regístralo en `src/main.js`:

```js
import { createApp } from 'vue'
import App from './App.vue'
import TablerIcons from './plugins/tabler-icons.js'

const app = createApp(App)
app.use(TablerIcons)
app.mount('#app')
```

3. Úsalos sin importar:

```vue
<template>
  <IconHome class="w-6 h-6" />
  <IconUser class="w-6 h-6" />
</template>
```

## Recursos

- [Sitio oficial de Tabler Icons](https://tabler-icons.io/)
- [Documentación @tabler/icons-vue](https://github.com/tabler/tabler-icons/tree/master/packages/icons-vue)
- [Lista completa de íconos](https://tabler-icons.io/)

## Consejos

1. **Consistencia**: Usa el mismo tamaño de íconos en elementos similares
2. **Accesibilidad**: Añade `aria-label` cuando sea necesario
3. **Rendimiento**: Solo importa los íconos que necesites
4. **Colores**: Usa la paleta de colores de tu proyecto consistentemente 