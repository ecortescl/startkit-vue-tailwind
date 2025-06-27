<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Sección principal -->
    <div class="flex items-center justify-center px-4 py-16">
      <div class="max-w-lg w-full text-center">
        <!-- Logo o icono -->
        <div class="mb-8">
          <div class="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
        </div>

        <!-- Título principal -->
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-montserrat">
          Próximamente
        </h1>

        <!-- Subtítulo -->
        <p class="text-xl text-gray-600 mb-8 font-inter">
          Comienza a crear tu página
        </p>

        <!-- Descripción -->
        <p class="text-gray-500 mb-8 leading-relaxed font-opensans">
          Estamos trabajando en algo increíble. Pronto podrás disfrutar de una experiencia única 
          que te ayudará a construir la página de tus sueños.
        </p>

        <!-- Botón de acción -->
        <div class="mb-8">
          <button 
            @click="handleNotifyMe"
            class="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg font-inter"
          >
            Notificarme cuando esté listo
          </button>
        </div>

        <!-- Indicador de progreso -->
        <div class="mb-8">
          <div class="text-sm text-gray-500 mb-2 font-roboto">Progreso del desarrollo</div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out" :style="{ width: progress + '%' }"></div>
          </div>
          <div class="text-sm text-gray-500 mt-2 font-roboto">{{ progress }}% completado</div>
        </div>

        <!-- Redes sociales o contacto -->
        <div class="flex justify-center space-x-6 text-gray-400">
          <a href="#" class="hover:text-blue-500 transition-colors duration-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" class="hover:text-blue-500 transition-colors duration-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </a>
          <a href="#" class="hover:text-blue-500 transition-colors duration-300">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Sección de íconos -->
    <div class="bg-white">
      <IconShowcase />
    </div>

    <!-- Sección de Showcase de Alertas -->
    <div class="bg-gradient-to-br from-gray-50 to-white py-16">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Sistema de Alertas</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Prueba nuestro sistema moderno de alertas con animaciones suaves, efectos blur y diseño contemporáneo. 
            Cada tipo de alerta tiene su propio estilo y comportamiento.
          </p>
        </div>

        <!-- Grid de botones para demostrar alertas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <!-- Alerta de Éxito -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
            <div class="text-center">
              <div class="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconCheck class="w-6 h-6 text-emerald-600" :stroke="2" />
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">Éxito</h3>
              <p class="text-sm text-gray-600 mb-4">Notificación de operación exitosa</p>
              <button
                @click="showSuccessAlert"
                class="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Probar
              </button>
            </div>
          </div>

          <!-- Alerta de Peligro -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300">
            <div class="text-center">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconAlertCircle class="w-6 h-6 text-red-600" :stroke="2" />
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">Error</h3>
              <p class="text-sm text-gray-600 mb-4">Notificación de error crítico</p>
              <button
                @click="showDangerAlert"
                class="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Probar
              </button>
            </div>
          </div>

          <!-- Alerta de Advertencia -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-300">
            <div class="text-center">
              <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconAlertTriangle class="w-6 h-6 text-amber-600" :stroke="2" />
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">Advertencia</h3>
              <p class="text-sm text-gray-600 mb-4">Notificación de precaución</p>
              <button
                @click="showWarningAlert"
                class="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Probar
              </button>
            </div>
          </div>

          <!-- Alerta de Información -->
          <div class="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
            <div class="text-center">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IconInfoCircle class="w-6 h-6 text-blue-600" :stroke="2" />
              </div>
              <h3 class="font-semibold text-gray-800 mb-2">Información</h3>
              <p class="text-sm text-gray-600 mb-4">Notificación informativa</p>
              <button
                @click="showInfoAlert"
                class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Probar
              </button>
            </div>
          </div>
        </div>

        <!-- Botones para cambiar posición -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold text-gray-800 mb-4 text-center">Posicionamiento</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <button
              @click="setPosition('top-right')"
              :class="position === 'top-right' ? 'bg-blue-600' : 'bg-gray-500'"
              class="text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 hover:opacity-80"
            >
              Arriba Derecha
            </button>
            <button
              @click="setPosition('top-left')"
              :class="position === 'top-left' ? 'bg-blue-600' : 'bg-gray-500'"
              class="text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 hover:opacity-80"
            >
              Arriba Izquierda
            </button>
            <button
              @click="setPosition('bottom-right')"
              :class="position === 'bottom-right' ? 'bg-blue-600' : 'bg-gray-500'"
              class="text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 hover:opacity-80"
            >
              Abajo Derecha
            </button>
            <button
              @click="setPosition('bottom-left')"
              :class="position === 'bottom-left' ? 'bg-blue-600' : 'bg-gray-500'"
              class="text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 hover:opacity-80"
            >
              Abajo Izquierda
            </button>
          </div>
        </div>

        <!-- Botones adicionales para casos específicos -->
        <div class="flex flex-wrap justify-center gap-4">
          <button
            @click="showMultipleAlerts"
            class="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Múltiples Alertas
          </button>
          <button
            @click="showPersistentAlert"
            class="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Alerta Persistente
          </button>
          <button
            @click="showCustomAlert"
            class="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            Alerta Personalizada
          </button>
        </div>

        <!-- Ejemplo de código -->
        <div class="mt-12 bg-gray-50 rounded-xl p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-semibold text-gray-800">Ejemplo de Uso</h3>
            <button
              @click="copyCodeExample"
              class="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-md transition-colors duration-200"
            >
              {{ copied ? '¡Copiado!' : 'Copiar' }}
            </button>
          </div>
          
          <div class="bg-gray-900 rounded-lg p-4 text-sm overflow-x-auto">
            <pre class="text-green-400"><code><span class="text-blue-300">&lt;template&gt;</span>
  <span class="text-yellow-300">&lt;div&gt;</span>
    <span class="text-gray-400">&lt;!-- Tu contenido de la vista --&gt;</span>
    <span class="text-yellow-300">&lt;button</span> <span class="text-red-300">@click=</span><span class="text-green-300">"showAlert"</span><span class="text-yellow-300">&gt;</span>Mostrar Alerta<span class="text-yellow-300">&lt;/button&gt;</span>
    
    <span class="text-gray-400">&lt;!-- Sistema de Alertas --&gt;</span>
    <span class="text-yellow-300">&lt;AlertSystem</span> <span class="text-red-300">ref=</span><span class="text-green-300">"alertSystem"</span> <span class="text-yellow-300">/&gt;</span>
  <span class="text-yellow-300">&lt;/div&gt;</span>
<span class="text-blue-300">&lt;/template&gt;</span>

<span class="text-blue-300">&lt;script&gt;</span>
<span class="text-purple-300">import</span> AlertSystem <span class="text-purple-300">from</span> <span class="text-green-300">'@/shared/components/AlertSystem.vue'</span>
<span class="text-purple-300">import</span> { alertService } <span class="text-purple-300">from</span> <span class="text-green-300">'@/shared/services/alertService.js'</span>

<span class="text-purple-300">export default</span> {
  <span class="text-red-300">components:</span> {
    AlertSystem
  },
  <span class="text-red-300">methods:</span> {
    <span class="text-yellow-300">showAlert</span>() {
      <span class="text-gray-400">// Alertas básicas</span>
      alertService.<span class="text-yellow-300">showSuccess</span>(<span class="text-green-300">'¡Operación exitosa!'</span>)
      alertService.<span class="text-yellow-300">showDanger</span>(<span class="text-green-300">'Error crítico'</span>)
      alertService.<span class="text-yellow-300">showWarning</span>(<span class="text-green-300">'Atención requerida'</span>)
      alertService.<span class="text-yellow-300">showInfo</span>(<span class="text-green-300">'Información importante'</span>)
    }
  },
  <span class="text-red-300">mounted</span>() {
    <span class="text-gray-400">// Registrar el componente en el servicio</span>
    alertService.<span class="text-yellow-300">registerAlertComponent</span>(<span class="text-purple-300">this</span>.$refs.alertSystem)
    
    <span class="text-gray-400">// Configurar posición por defecto</span>
    alertService.<span class="text-yellow-300">setDefaultPosition</span>(<span class="text-green-300">'top-right'</span>)
  }
}
<span class="text-blue-300">&lt;/script&gt;</span></code></pre>
          </div>
          
                     <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
             <span>Diseño glassmorphism moderno</span>
             <span>Efectos blur avanzados</span>
             <span>Íconos con contenedores elegantes</span>
             <span>Animaciones fluidas</span>
             <span>Posicionamiento dinámico</span>
             <span>Arquitectura minimalista</span>
           </div>
        </div>
      </div>
    </div>

    <!-- Sistema de Alertas -->
    <AlertSystem ref="alertSystem" />
  </div>
</template>

<script>
import IconShowcase from '@/shared/components/IconShowcase.vue'
import AlertSystem from '@/shared/components/AlertSystem.vue'
import { notificationService } from '@/shared/services/notificationService.js'
import { alertService } from '@/shared/services/alertService.js'
import { progressService } from '@/shared/services/progressService.js'
import { PROGRESS_TARGET, PROGRESS_ANIMATION_DURATION } from '@/core/constants'
import { 
  IconCheck, 
  IconAlertTriangle, 
  IconAlertCircle, 
  IconInfoCircle 
} from '@tabler/icons-vue'

export default {
  name: 'HomeView',
  components: {
    IconShowcase,
    AlertSystem,
    IconCheck,
    IconAlertTriangle,
    IconAlertCircle,
    IconInfoCircle
  },
  data() {
    return {
      progress: 0,
      copied: false,
      position: 'top-right'
    }
  },
  methods: {
    handleNotifyMe() {
      notificationService.handleNotifyMe()
    },
    animateProgress() {
      progressService.animateProgress(this, 'progress', PROGRESS_TARGET, PROGRESS_ANIMATION_DURATION)
    },
    
    // Métodos para demostrar las alertas
    showSuccessAlert() {
      alertService.showSuccess(
        'Esta es una demostración de una alerta de éxito. La operación se completó correctamente.',
        '¡Operación Exitosa!'
      )
    },
    
    showDangerAlert() {
      alertService.showDanger(
        'Esta es una demostración de una alerta de error. Algo salió mal durante el proceso.',
        'Error Crítico'
      )
    },
    
    showWarningAlert() {
      alertService.showWarning(
        'Esta es una demostración de una alerta de advertencia. Debes prestar atención a esto.',
        'Atención Requerida'
      )
    },
    
    showInfoAlert() {
      alertService.showInfo(
        'Esta es una demostración de una alerta informativa. Aquí tienes información útil.',
        'Información Importante'
      )
    },
    
    showMultipleAlerts() {
      // Mostrar múltiples alertas con diferentes retrasos
      setTimeout(() => {
        alertService.showInfo('Primera alerta en la secuencia', 'Alerta 1')
      }, 100)
      
      setTimeout(() => {
        alertService.showWarning('Segunda alerta con advertencia', 'Alerta 2')
      }, 300)
      
      setTimeout(() => {
        alertService.showSuccess('Tercera alerta de éxito', 'Alerta 3')
      }, 500)
    },
    
    showPersistentAlert() {
      alertService.showAlert({
        type: 'warning',
        title: 'Alerta Persistente',
        message: 'Esta alerta no se cierra automáticamente. Debes cerrarla manualmente haciendo clic en la X.',
        duration: 0 // 0 significa que no se cierra automáticamente
      })
    },
    
    showCustomAlert() {
      alertService.showAlert({
        type: 'info',
        title: 'Alerta Personalizada',
        message: 'Esta alerta tiene una duración personalizada de 10 segundos y un mensaje especial.',
        duration: 10000
      })
    },
    
    setPosition(newPosition) {
      this.position = newPosition
      alertService.setDefaultPosition(newPosition)
      alertService.showInfo(`Posición cambiada a: ${this.getPositionLabel(newPosition)}`, 'Nueva Posición')
    },
    
    getPositionLabel(position) {
      const labels = {
        'top-right': 'Arriba Derecha',
        'top-left': 'Arriba Izquierda',
        'bottom-right': 'Abajo Derecha',
        'bottom-left': 'Abajo Izquierda'
      }
      return labels[position] || position
    },
    
    async copyCodeExample() {
      const codeExample = `<template>
  <div>
    <!-- Tu contenido de la vista -->
    <button @click="showAlert">Mostrar Alerta</button>
    
    <!-- Sistema de Alertas -->
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
  methods: {
    showAlert() {
      // Alertas básicas
      alertService.showSuccess('¡Operación exitosa!')
      alertService.showDanger('Error crítico')
      alertService.showWarning('Atención requerida')
      alertService.showInfo('Información importante')
    }
  },
  mounted() {
    // Registrar el componente en el servicio
    alertService.registerAlertComponent(this.$refs.alertSystem)
    
    // Configurar posición por defecto
    alertService.setDefaultPosition('top-right')
  }
}
<\/script>`
      
      try {
        await navigator.clipboard.writeText(codeExample)
        this.copied = true
        setTimeout(() => {
          this.copied = false
        }, 2000)
      } catch (err) {
        console.error('Error al copiar:', err)
        // Fallback para navegadores que no soporten clipboard API
        alertService.showInfo('Código seleccionado para copiar manualmente')
      }
    }
  },
  mounted() {
    this.animateProgress()
    
    // Registrar el componente de alertas en el servicio
    alertService.registerAlertComponent(this.$refs.alertSystem)
    
    // Mostrar alerta de bienvenida
    setTimeout(() => {
      alertService.showWelcomeInfo()
    }, 2000)
  }
}
</script>
