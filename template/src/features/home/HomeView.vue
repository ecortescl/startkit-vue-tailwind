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
          Sistema de Componentes
        </h1>

        <!-- Subtítulo -->
        <p class="text-xl text-gray-600 mb-8 font-inter">
          Alertas e Inputs con diseño glassmorphism
        </p>

        <!-- Descripción -->
        <p class="text-gray-500 mb-8 leading-relaxed font-opensans">
          Explora nuestro sistema moderno de componentes con efectos glassmorphism, 
          validaciones inteligentes y arquitectura SOLID.
        </p>

        <!-- Indicador de progreso -->
        <div class="mb-8">
          <div class="text-sm text-gray-500 mb-2 font-roboto">Progreso del desarrollo</div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out" :style="{ width: progress + '%' }"></div>
          </div>
          <div class="text-sm text-gray-500 mt-2 font-roboto">{{ progress }}% completado</div>
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
      </div>
    </div>

    <!-- Sección de Showcase de Inputs -->
    <div class="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Sistema de Inputs Moderno</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Inputs con diseño glassmorphism, validaciones inteligentes y experiencia de usuario superior.
            Incluye selector de países, validación de passwords y formateo automático.
          </p>
        </div>

        <!-- Formulario de Demostración -->
        <div class="bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-lg mb-8">
          <h3 class="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            <IconSettings :size="24" class="mr-3" />
            Formulario de Demostración
          </h3>
          
          <form @submit.prevent="handleFormSubmit" class="space-y-6">
            <!-- Fila 1: Texto y Número -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TextInput
                v-model="formData.name"
                label="Nombre Completo"
                placeholder="Ingresa tu nombre completo..."
                required
                :error="formErrors.name"
                help-text="Mínimo 2 caracteres, máximo 50"
              />
              
              <NumberInput
                v-model="formData.age"
                label="Edad"
                placeholder="Tu edad..."
                :min="18"
                :max="120"
                :allow-decimals="false"
                :error="formErrors.age"
                help-text="Entre 18 y 120 años"
              />
            </div>

            <!-- Fila 2: Teléfono y Email -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PhoneInput
                v-model="formData.phone"
                label="Número de Teléfono"
                placeholder="987654321"
                default-country="CL"
                required
                :error="formErrors.phone"
                help-text="Selecciona tu país y ingresa el número"
                @country-change="handleCountryChange"
              />
              
              <TextInput
                v-model="formData.email"
                label="Correo Electrónico"
                placeholder="tu@email.com"
                type="email"
                required
                :error="formErrors.email"
                help-text="Formato: usuario@dominio.com"
              />
            </div>

            <!-- Fila 3: Fecha y Hora -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DateInput
                v-model="formData.birthDate"
                label="Fecha de Nacimiento"
                required
                :max="today"
                :error="formErrors.birthDate"
                help-text="Selecciona tu fecha de nacimiento"
              />
              
              <TimeInput
                v-model="formData.preferredTime"
                label="Hora Preferida de Contacto"
                :error="formErrors.preferredTime"
                help-text="¿A qué hora prefieres que te contactemos?"
              />
            </div>

            <!-- Fila 4: Password -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PasswordInput
                v-model="formData.password"
                label="Contraseña"
                placeholder="Crea una contraseña segura..."
                required
                :validate-strength="true"
                :min-length="8"
                :error="formErrors.password"
                help-text="Mínimo 8 caracteres con mayúsculas, minúsculas y números"
              />
              
              <PasswordInput
                v-model="formData.confirmPassword"
                label="Confirmar Contraseña"
                placeholder="Confirma tu contraseña..."
                required
                :error="formErrors.confirmPassword"
                help-text="Debe coincidir con la contraseña anterior"
              />
            </div>

            <!-- Botones de Acción -->
            <div class="flex justify-between items-center pt-6 border-t border-white/20">
              <button
                type="button"
                @click="resetForm"
                class="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-xl font-semibold transition-colors duration-200 flex items-center space-x-2"
              >
                <IconRefresh :size="18" />
                <span>Limpiar</span>
              </button>
              
              <div class="flex space-x-4">
                <button
                  type="button"
                  @click="validateForm"
                  class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors duration-200 flex items-center space-x-2"
                >
                  <IconCheck :size="18" />
                  <span>Validar</span>
                </button>
                
                <button
                  type="submit"
                  class="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <IconSend :size="18" />
                  <span>Enviar Formulario</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <!-- Información técnica y código de ejemplo -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Características técnicas -->
          <div class="bg-white/40 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
            <h3 class="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <IconStar :size="20" class="mr-2" />
              Características de los Inputs
            </h3>
            <ul class="space-y-3 text-sm text-gray-700">
              <li class="flex items-center">
                <IconCheck :size="16" class="text-emerald-600 mr-2 flex-shrink-0" />
                Efectos glassmorphism con múltiples capas
              </li>
              <li class="flex items-center">
                <IconCheck :size="16" class="text-emerald-600 mr-2 flex-shrink-0" />
                Validaciones en tiempo real
              </li>
              <li class="flex items-center">
                <IconCheck :size="16" class="text-emerald-600 mr-2 flex-shrink-0" />
                Selector de países con banderas
              </li>
              <li class="flex items-center">
                <IconCheck :size="16" class="text-emerald-600 mr-2 flex-shrink-0" />
                Toggle de visibilidad en passwords
              </li>
              <li class="flex items-center">
                <IconCheck :size="16" class="text-emerald-600 mr-2 flex-shrink-0" />
                Formateo automático de números
              </li>
              <li class="flex items-center">
                <IconCheck :size="16" class="text-emerald-600 mr-2 flex-shrink-0" />
                Arquitectura modular reutilizable
              </li>
            </ul>
          </div>

          <!-- Ejemplo de código -->
          <div class="bg-gray-900/95 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-white flex items-center">
                <IconCode :size="20" class="mr-2" />
                Uso de Componentes
              </h3>
              <button
                @click="copyInputCode"
                class="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-lg transition-colors duration-200 flex items-center space-x-1"
              >
                <IconCopy :size="14" />
                <span>{{ inputCodeCopied ? '¡Copiado!' : 'Copiar' }}</span>
              </button>
            </div>
            <pre class="text-sm text-gray-300 overflow-x-auto"><code>{{ inputCodeExample }}</code></pre>
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

// Importar todos los inputs
import {
  TextInput,
  NumberInput,
  DateInput,
  TimeInput,
  PasswordInput,
  PhoneInput
} from '@/shared/components/inputs'

import { 
  IconCheck, 
  IconAlertTriangle, 
  IconAlertCircle, 
  IconInfoCircle,
  IconSettings,
  IconRefresh,
  IconSend,
  IconStar,
  IconCode,
  IconCopy
} from '@tabler/icons-vue'

export default {
  name: 'HomeView',
  components: {
    IconShowcase,
    AlertSystem,
    TextInput,
    NumberInput,
    DateInput,
    TimeInput,
    PasswordInput,
    PhoneInput,
    IconCheck,
    IconAlertTriangle,
    IconAlertCircle,
    IconInfoCircle,
    IconSettings,
    IconRefresh,
    IconSend,
    IconStar,
    IconCode,
    IconCopy
  },
  data() {
    return {
      progress: 0,
      position: 'top-right',
      inputCodeCopied: false,
      
      // Datos del formulario
      formData: {
        name: '',
        age: '',
        phone: '',
        email: '',
        birthDate: '',
        preferredTime: '',
        password: '',
        confirmPassword: ''
      },
      
      // Errores del formulario
      formErrors: {
        name: '',
        age: '',
        phone: '',
        email: '',
        birthDate: '',
        preferredTime: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  computed: {
    today() {
      return new Date().toISOString().split('T')[0]
    },
    inputCodeExample() {
      return `// Importar componentes
import {
  TextInput,
  NumberInput,
  DateInput,
  TimeInput,
  PasswordInput,
  PhoneInput
} from '@/shared/components/inputs'

// Usar en template
<TextInput
  v-model="nombre"
  label="Nombre"
  placeholder="Tu nombre..."
  required
/>

<PhoneInput
  v-model="telefono"
  label="Teléfono"
  default-country="CL"
  @country-change="onCountryChange"
/>

<PasswordInput
  v-model="password"
  label="Contraseña"
  :validate-strength="true"
/>`
    }
  },
  methods: {
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

    // Métodos para el formulario de inputs
    handleFormSubmit() {
      if (this.validateForm()) {
        alertService.showSuccess(
          'Todos los campos han sido validados correctamente. El formulario está listo para enviar.',
          'Formulario Válido'
        )
        console.log('Datos del formulario:', this.formData)
      } else {
        alertService.showWarning(
          'Por favor, revisa los campos marcados con error antes de continuar.',
          'Errores en el Formulario'
        )
      }
    },

    validateForm() {
      this.resetFormErrors()
      let isValid = true

      // Validar nombre
      if (!this.formData.name.trim()) {
        this.formErrors.name = 'El nombre es requerido'
        isValid = false
      } else if (this.formData.name.trim().length < 2) {
        this.formErrors.name = 'El nombre debe tener al menos 2 caracteres'
        isValid = false
      } else if (this.formData.name.trim().length > 50) {
        this.formErrors.name = 'El nombre no puede exceder 50 caracteres'
        isValid = false
      }

      // Validar edad
      if (!this.formData.age) {
        this.formErrors.age = 'La edad es requerida'
        isValid = false
      } else {
        const age = parseInt(this.formData.age)
        if (age < 18 || age > 120) {
          this.formErrors.age = 'La edad debe estar entre 18 y 120 años'
          isValid = false
        }
      }

      // Validar email
      if (!this.formData.email.trim()) {
        this.formErrors.email = 'El email es requerido'
        isValid = false
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(this.formData.email)) {
          this.formErrors.email = 'Formato de email inválido'
          isValid = false
        }
      }

      // Validar teléfono
      if (!this.formData.phone.trim()) {
        this.formErrors.phone = 'El teléfono es requerido'
        isValid = false
      }

      // Validar fecha de nacimiento
      if (!this.formData.birthDate) {
        this.formErrors.birthDate = 'La fecha de nacimiento es requerida'
        isValid = false
      } else {
        const birthDate = new Date(this.formData.birthDate)
        const today = new Date()
        if (birthDate >= today) {
          this.formErrors.birthDate = 'La fecha debe ser anterior a hoy'
          isValid = false
        }
      }

      // Validar contraseña
      if (!this.formData.password) {
        this.formErrors.password = 'La contraseña es requerida'
        isValid = false
      } else if (this.formData.password.length < 8) {
        this.formErrors.password = 'La contraseña debe tener al menos 8 caracteres'
        isValid = false
      }

      // Validar confirmación de contraseña
      if (!this.formData.confirmPassword) {
        this.formErrors.confirmPassword = 'Debes confirmar la contraseña'
        isValid = false
      } else if (this.formData.password !== this.formData.confirmPassword) {
        this.formErrors.confirmPassword = 'Las contraseñas no coinciden'
        isValid = false
      }

      return isValid
    },

    resetFormErrors() {
      this.formErrors = {
        name: '',
        age: '',
        phone: '',
        email: '',
        birthDate: '',
        preferredTime: '',
        password: '',
        confirmPassword: ''
      }
    },

    resetForm() {
      this.formData = {
        name: '',
        age: '',
        phone: '',
        email: '',
        birthDate: '',
        preferredTime: '',
        password: '',
        confirmPassword: ''
      }
      this.resetFormErrors()
      alertService.showInfo('Formulario limpiado correctamente', 'Formulario Reiniciado')
    },

    handleCountryChange(country) {
      console.log('País seleccionado:', country)
      alertService.showInfo(`País cambiado a: ${country.name} (${country.phoneCode})`, 'País Actualizado')
    },

    async copyInputCode() {
      try {
        await navigator.clipboard.writeText(this.inputCodeExample)
        this.inputCodeCopied = true
        setTimeout(() => {
          this.inputCodeCopied = false
        }, 2000)
        alertService.showSuccess('Código copiado al portapapeles', 'Copiado')
      } catch (err) {
        console.error('Error al copiar:', err)
        alertService.showInfo('Código seleccionado para copiar manualmente')
      }
    }
  },
  mounted() {
    this.animateProgress()
    
    // Registrar el componente de alertas en el servicio
    alertService.registerAlertComponent(this.$refs.alertSystem)
    
    // Configurar posición por defecto
    alertService.setDefaultPosition('top-right')
    
    // Mostrar alerta de bienvenida
    setTimeout(() => {
      alertService.showInfo('¡Bienvenido! Explora nuestros componentes con efectos glassmorphism.', '¡Bienvenido!')
    }, 2000)
  }
}
</script>
