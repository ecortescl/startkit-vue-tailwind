<template>
  <div :class="[getContainerClasses(), position]" class="fixed z-50 space-y-4 max-w-sm w-full">
    <transition-group name="alert" tag="div">
      <div
        v-for="alert in alerts"
        :key="alert.id"
        :class="getAlertClasses(alert.type)"
        class="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 ease-out border border-white/20"
        :style="getAlertStyles(alert)"
      >
        <!-- Fondo blur moderno -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-xl rounded-2xl shadow-inner"></div>
        <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/20 rounded-2xl"></div>
        
        <!-- Contenido -->
        <div class="relative p-5 flex items-start space-x-4">
          <!-- Icono -->
          <div class="flex-shrink-0">
            <div :class="getIconBgClasses(alert.type)" class="w-8 h-8 rounded-xl flex items-center justify-center shadow-sm">
              <component
                :is="getIcon(alert.type)"
                :class="getIconClasses(alert.type)"
                :size="18"
                :stroke="2.5"
              />
            </div>
          </div>
          
          <!-- Contenido del mensaje -->
          <div class="flex-1 min-w-0 pt-0.5">
            <h4 class="text-sm font-semibold text-gray-900 mb-1.5 leading-tight">
              {{ alert.title }}
            </h4>
            <p class="text-sm text-gray-700/90 leading-relaxed">
              {{ alert.message }}
            </p>
          </div>
          
          <!-- Botón cerrar -->
          <button
            @click="removeAlert(alert.id)"
            class="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 hover:bg-white/30 transition-all duration-200"
          >
            <IconX :size="14" />
          </button>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { 
  IconCheck, 
  IconAlertTriangle, 
  IconAlertCircle, 
  IconInfoCircle,
  IconX 
} from '@tabler/icons-vue'

export default {
  name: 'AlertSystem',
  components: {
    IconCheck,
    IconAlertTriangle,
    IconAlertCircle,
    IconInfoCircle,
    IconX
  },
  data() {
    return {
      alerts: [],
      timers: new Map(),
      position: 'top-right'
    }
  },
  methods: {
    /**
     * Añade una nueva alerta al sistema
     */
    addAlert(alert) {
      const id = Date.now() + Math.random()
      const newAlert = {
        id,
        ...alert,
        createdAt: Date.now()
      }
      
      this.alerts.push(newAlert)
      
      // Auto-remover si tiene duración
      if (alert.duration) {
        this.startAutoRemove(newAlert)
      }
      
      return id
    },
    
    /**
     * Remueve una alerta específica
     */
    removeAlert(id) {
      const index = this.alerts.findIndex(alert => alert.id === id)
      if (index > -1) {
        this.alerts.splice(index, 1)
        this.clearTimer(id)
      }
    },
    
    /**
     * Inicia el temporizador para auto-remover
     */
    startAutoRemove(alert) {
      const timer = setTimeout(() => {
        this.removeAlert(alert.id)
      }, alert.duration)
      
      this.timers.set(alert.id, timer)
    },
    
    /**
     * Limpia un temporizador específico
     */
    clearTimer(id) {
      const timer = this.timers.get(id)
      if (timer) {
        clearTimeout(timer)
        this.timers.delete(id)
      }
    },
    
    /**
     * Obtiene las clases CSS para el tipo de alerta
     */
    getAlertClasses(type) {
      switch (type) {
        case 'success':
          return 'bg-emerald-50/30 shadow-emerald-500/20'
        case 'danger':
          return 'bg-red-50/30 shadow-red-500/20'
        case 'warning':
          return 'bg-amber-50/30 shadow-amber-500/20'
        case 'info':
          return 'bg-blue-50/30 shadow-blue-500/20'
        default:
          return 'bg-gray-50/30 shadow-gray-500/20'
      }
    },
    
    /**
     * Obtiene las clases de fondo para el icono
     */
    getIconBgClasses(type) {
      switch (type) {
        case 'success':
          return 'bg-emerald-500/20 border border-emerald-500/30'
        case 'danger':
          return 'bg-red-500/20 border border-red-500/30'
        case 'warning':
          return 'bg-amber-500/20 border border-amber-500/30'
        case 'info':
          return 'bg-blue-500/20 border border-blue-500/30'
        default:
          return 'bg-gray-500/20 border border-gray-500/30'
      }
    },
    
    /**
     * Obtiene el componente de icono para el tipo de alerta
     */
    getIcon(type) {
      switch (type) {
        case 'success':
          return 'IconCheck'
        case 'danger':
          return 'IconAlertCircle'
        case 'warning':
          return 'IconAlertTriangle'
        case 'info':
          return 'IconInfoCircle'
        default:
          return 'IconInfoCircle'
      }
    },
    
    /**
     * Obtiene las clases CSS para el icono
     */
    getIconClasses(type) {
      switch (type) {
        case 'success':
          return 'text-emerald-700'
        case 'danger':
          return 'text-red-700'
        case 'warning':
          return 'text-amber-700'
        case 'info':
          return 'text-blue-700'
        default:
          return 'text-gray-700'
      }
    },
    
    /**
     * Establece la posición del contenedor de alertas
     */
    setPosition(position) {
      this.position = position
    },
    
    /**
     * Obtiene las clases del contenedor según la posición
     */
    getContainerClasses() {
      const positions = {
        'top-right': 'top-6 right-6',
        'top-left': 'top-6 left-6',
        'bottom-right': 'bottom-6 right-6',
        'bottom-left': 'bottom-6 left-6'
      }
      
      return positions[this.position] || positions['top-right']
    },
    
    /**
     * Obtiene los estilos dinámicos para cada alerta
     */
    getAlertStyles(alert) {
      return {
        // Posición específica de la alerta si está definida
        ...(alert.position && this.getPositionStyles(alert.position))
      }
    },
    
    /**
     * Obtiene estilos de posición específicos
     */
    getPositionStyles(position) {
      // Para alertas con posición específica diferente al contenedor
      return {}
    },
    

  },
  
  beforeUnmount() {
    // Limpiar todos los temporizadores
    this.timers.forEach(timer => clearTimeout(timer))
    this.timers.clear()
  }
}
</script>

<style scoped>
/* Animaciones para las alertas */
.alert-enter-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.alert-leave-active {
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Animaciones base */
.alert-enter-from {
  opacity: 0;
  scale: 0.9;
  filter: blur(4px);
}

.alert-leave-to {
  opacity: 0;
  scale: 0.95;
  filter: blur(2px);
}

.alert-move {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Animaciones específicas para cada posición */
.top-right .alert-enter-from,
.top-right .alert-leave-to {
  transform: translateX(50px);
}

.top-left .alert-enter-from,
.top-left .alert-leave-to {
  transform: translateX(-50px);
}

.bottom-right .alert-enter-from,
.bottom-right .alert-leave-to {
  transform: translateX(50px);
}

.bottom-left .alert-enter-from,
.bottom-left .alert-leave-to {
  transform: translateX(-50px);
}

/* Efectos glassmorphism mejorados */
.alert-enter-from .absolute {
  backdrop-filter: blur(0px);
}

.alert-enter-to .absolute {
  backdrop-filter: blur(24px);
}
</style> 