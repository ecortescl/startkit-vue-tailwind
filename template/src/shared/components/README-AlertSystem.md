# Sistema de Alertas Modernas

Un sistema completo de alertas para Vue 3 con animaciones suaves, efectos blur y diseño contemporáneo.

## 🚀 Características

- ✅ **4 tipos de alertas**: Success, Danger, Warning, Info
- 🎨 **Diseño moderno** con efectos blur y animaciones CSS3
- 🎭 **Íconos de Tabler**: Iconografía consistente y moderna
- ⚡ **Auto-dismiss configurable**: Control total sobre la duración
- 🏗️ **Arquitectura SOLID**: Código limpio y mantenible
- 🎯 **Tailwind CSS 4**: Estilos utilitarios optimizados
- 📱 **Responsive**: Adaptable a todos los dispositivos

## 📋 Componentes

### AlertSystem.vue
Componente principal que maneja la visualización de las alertas.

#### Props
No recibe props directamente. Se controla mediante el servicio.

#### Características técnicas
- Posicionamiento fijo en la esquina superior derecha
- Stack de alertas con animaciones de entrada/salida
- Efectos blur y transparencias
- Barra de progreso visual para alertas con duración
- Auto-limpieza de temporizadores

### AlertService.js
Servicio que maneja la lógica de negocio de las alertas.

## 🛠️ Instalación y Uso

### 1. Importar el servicio

```javascript
import { alertService } from '@/shared/services/alertService.js'
```

### 2. Registrar el componente

```vue
<template>
  <div>
    <!-- Tu contenido -->
    <AlertSystem ref="alertSystem" />
  </div>
</template>

<script>
import AlertSystem from '@/shared/components/AlertSystem.vue'
import { alertService } from '@/shared/services/alertService.js'

export default {
  components: {
    AlertSystem
  },
  mounted() {
    // Registrar el componente en el servicio
    alertService.registerAlertComponent(this.$refs.alertSystem)
  }
}
</script>
```

### 3. Usar las alertas

```javascript
// Alertas básicas
alertService.showSuccess('Operación completada correctamente')
alertService.showDanger('Error en la operación')
alertService.showWarning('Atención requerida')
alertService.showInfo('Información importante')

// Alertas personalizadas
alertService.showSuccess(
  'Los datos se guardaron correctamente',
  'Guardado Exitoso',
  3000 // 3 segundos
)

// Alerta persistente (no se cierra automáticamente)
alertService.showAlert({
  type: 'warning',
  title: 'Acción requerida',
  message: 'Debes completar este paso antes de continuar',
  duration: 0 // No se cierra automáticamente
})
```

## 📖 API del Servicio

### Métodos principales

#### `showSuccess(message, title?, duration?)`
- **message**: Texto principal de la alerta
- **title**: Título (opcional, por defecto "¡Éxito!")
- **duration**: Duración en ms (opcional, por defecto 5000)

#### `showDanger(message, title?, duration?)`
- **message**: Texto principal de la alerta
- **title**: Título (opcional, por defecto "Error")
- **duration**: Duración en ms (opcional, por defecto 7000)

#### `showWarning(message, title?, duration?)`
- **message**: Texto principal de la alerta
- **title**: Título (opcional, por defecto "Advertencia")
- **duration**: Duración en ms (opcional, por defecto 6000)

#### `showInfo(message, title?, duration?)`
- **message**: Texto principal de la alerta
- **title**: Título (opcional, por defecto "Información")
- **duration**: Duración en ms (opcional, por defecto 5000)

#### `showAlert(config)`
Método para alertas completamente personalizadas:

```javascript
alertService.showAlert({
  type: 'success' | 'danger' | 'warning' | 'info',
  title: 'Título personalizado',
  message: 'Mensaje personalizado',
  duration: 5000 // 0 para persistente
})
```

### Métodos de conveniencia

```javascript
// Operaciones comunes
alertService.showSaveSuccess()
alertService.showDeleteSuccess()
alertService.showUpdateSuccess()

// Errores comunes
alertService.showNetworkError()
alertService.showValidationError('Mensaje específico')
alertService.showPermissionError()

// Advertencias comunes
alertService.showUnsavedChanges()
alertService.showMaintenanceWarning()

// Información útil
alertService.showWelcomeInfo()
alertService.showFeatureInfo('Nueva función')
```

## 🎨 Personalización

### Colores por tipo de alerta

- **Success**: Emerald (verde)
- **Danger**: Red (rojo)
- **Warning**: Amber (ámbar)
- **Info**: Blue (azul)

### Íconos utilizados

- **Success**: `IconCheck` de Tabler Icons
- **Danger**: `IconAlertCircle` de Tabler Icons
- **Warning**: `IconAlertTriangle` de Tabler Icons
- **Info**: `IconInfoCircle` de Tabler Icons

### Animaciones

- **Entrada**: Deslizamiento desde la derecha con efecto bounce
- **Salida**: Desvanecimiento con escala
- **Duración**: 500ms entrada, 300ms salida
- **Easing**: `cubic-bezier(0.34, 1.56, 0.64, 1)` para entrada

## 🏗️ Arquitectura

### Principios SOLID aplicados

1. **SRP** - Separación clara entre componente (presentación) y servicio (lógica)
2. **OCP** - Extensible para nuevos tipos de alerta sin modificar código existente
3. **LSP** - Todos los tipos de alerta cumplen la misma interfaz
4. **ISP** - Interfaces específicas para diferentes casos de uso
5. **DIP** - El componente depende de abstracciones, no de implementaciones concretas

### Patrón Singleton
El servicio utiliza el patrón Singleton para mantener una única instancia global.

### Gestión de memoria
- Auto-limpieza de temporizadores
- Gestión eficiente del stack de alertas
- Prevención de memory leaks

## 🧪 Testing

### Casos de prueba recomendados

```javascript
// Prueba básica de funcionalidad
test('should show success alert', () => {
  const id = alertService.showSuccess('Test message')
  expect(id).toBeDefined()
})

// Prueba de auto-dismiss
test('should auto-dismiss after duration', (done) => {
  alertService.showInfo('Test', 'Test', 1000)
  setTimeout(() => {
    // Verificar que la alerta se removió
    done()
  }, 1100)
})

// Prueba de alerta persistente
test('should not auto-dismiss persistent alert', () => {
  alertService.showAlert({
    type: 'warning',
    message: 'Persistent',
    duration: 0
  })
  // Verificar que persiste después del tiempo normal
})
```

## 📱 Responsive Design

- **Mobile**: Stack vertical, ancho completo con márgenes
- **Tablet**: Ancho fijo 384px (max-w-sm)
- **Desktop**: Posición fija en esquina superior derecha

## 🔧 Troubleshooting

### Problema: Las alertas no aparecen
**Solución**: Verificar que el componente AlertSystem está registrado y que el servicio tiene referencia al componente.

### Problema: Alertas no se cierran automáticamente
**Solución**: Verificar que duration > 0 y que no hay errores de JavaScript que interrumpan los temporizadores.

### Problema: Animaciones no funcionan
**Solución**: Verificar que Tailwind CSS está configurado correctamente y que las clases de transición están aplicadas.

## 🚀 Mejoras futuras

- [ ] Posicionamiento configurable (top, bottom, left, right)
- [ ] Temas personalizables
- [ ] Sonidos de notificación
- [ ] Integración con store global (Vuex/Pinia)
- [ ] Persistencia en localStorage para alertas importantes
- [ ] Categorización y filtrado de alertas
- [ ] API para alertas en lote
- [ ] Métricas y analytics de alertas mostradas 