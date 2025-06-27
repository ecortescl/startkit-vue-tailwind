<template>
  <div class="relative group">
    <!-- Label -->
    <label 
      v-if="label"
      :for="inputId"
      class="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-200"
      :class="{ 'text-red-600': hasError, 'text-blue-600': isFocused }"
    >
      {{ label }}
      <span v-if="required" class="text-red-500 ml-1">*</span>
    </label>

    <!-- Input Container -->
    <div 
      class="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 ease-out border"
      :class="getContainerClasses"
    >
      <!-- Fondo glassmorphism -->
      <div class="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-xl"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/20"></div>
      
      <!-- Input wrapper -->
      <div class="relative flex items-center">
        <!-- Selector de país -->
        <div class="flex-shrink-0 pl-4">
          <div class="relative">
            <button
              type="button"
              @click="toggleCountryDropdown"
              class="flex items-center space-x-2 w-20 h-8 px-2 rounded-xl bg-white/20 border border-white/30 hover:bg-white/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              <span class="text-lg">{{ selectedCountry?.flag || '🏳️' }}</span>
              <IconChevronDown :size="14" class="text-gray-600" />
            </button>

            <!-- Dropdown de países -->
            <transition name="dropdown">
              <div
                v-if="showCountryDropdown"
                class="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 z-50 max-h-64 overflow-hidden"
              >
                <!-- Buscador -->
                <div class="p-3 border-b border-gray-200/50">
                  <div class="relative">
                    <IconSearch :size="16" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      v-model="countrySearch"
                      type="text"
                      placeholder="Buscar país..."
                      class="w-full pl-10 pr-4 py-2 bg-white/50 border border-gray-200/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                </div>

                <!-- Lista de países -->
                <div class="max-h-48 overflow-y-auto">
                  <button
                    v-for="country in filteredCountries"
                    :key="country.code"
                    type="button"
                    @click="selectCountry(country)"
                    class="w-full flex items-center space-x-3 px-4 py-3 hover:bg-blue-50/50 transition-colors duration-200 text-left"
                    :class="{ 'bg-blue-100/50': selectedCountry?.code === country.code }"
                  >
                    <span class="text-lg">{{ country.flag }}</span>
                    <div class="flex-1 min-w-0">
                      <div class="text-sm font-medium text-gray-900">{{ country.name }}</div>
                      <div class="text-xs text-gray-500">{{ country.phoneCode }}</div>
                    </div>
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Código de país -->
        <div class="flex-shrink-0 px-3">
          <span class="text-sm font-medium text-gray-600">{{ selectedCountry?.phoneCode || '+56' }}</span>
        </div>

        <!-- Input del número -->
        <input
          :id="inputId"
          v-model="localNumber"
          type="tel"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :required="required"
          class="flex-1 bg-transparent border-0 outline-none text-gray-900 placeholder-gray-500 text-sm font-medium py-4 pr-5"
          :class="{ 'cursor-not-allowed opacity-60': disabled }"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @keydown="handleKeydown"
        />

        <!-- Icono de teléfono -->
        <div class="flex-shrink-0 pr-4">
          <div class="w-8 h-8 rounded-xl flex items-center justify-center bg-white/20 border border-white/30">
            <IconPhone :size="18" :stroke="2" class="text-gray-600" />
          </div>
        </div>
      </div>
    </div>

    <!-- Mensaje de error -->
    <transition name="error">
      <p v-if="hasError" class="mt-2 text-sm text-red-600 flex items-center space-x-1">
        <IconAlertCircle :size="16" />
        <span>{{ errorMessage }}</span>
      </p>
    </transition>

    <!-- Mensaje de ayuda -->
    <p v-if="helpText && !hasError" class="mt-2 text-sm text-gray-500">
      {{ helpText }}
    </p>

    <!-- Número completo formateado -->
    <p v-if="fullPhoneNumber && !hasError" class="mt-2 text-sm text-blue-600 font-medium">
      Número completo: {{ fullPhoneNumber }}
    </p>
  </div>
</template>

<script>
import { countryService } from '@/shared/services/countryService.js'
import { 
  IconPhone, 
  IconChevronDown, 
  IconSearch, 
  IconAlertCircle 
} from '@tabler/icons-vue'

export default {
  name: 'PhoneInput',
  components: {
    IconPhone,
    IconChevronDown,
    IconSearch,
    IconAlertCircle
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Ingresa tu número...'
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    helpText: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'default'
    },
    defaultCountry: {
      type: String,
      default: 'CL'
    }
  },
  emits: ['update:modelValue', 'focus', 'blur', 'keydown', 'country-change'],
  data() {
    return {
      selectedCountry: null,
      localNumber: '',
      isFocused: false,
      showCountryDropdown: false,
      countrySearch: '',
      internalError: '',
      inputId: `phone-input-${Math.random().toString(36).substr(2, 9)}`
    }
  },
  created() {
    // Inicializar país por defecto antes del primer render
    this.selectedCountry = countryService.getCountryByCode(this.defaultCountry) || countryService.getDefaultCountry()
    
    // Parsear valor inicial si existe
    this.parseInitialValue()
  },
  computed: {
    hasError() {
      return Boolean(this.error || this.internalError)
    },
    errorMessage() {
      return this.error || this.internalError
    },
    getContainerClasses() {
      const baseClasses = 'border-white/20 hover:border-white/40 transition-all duration-300'
      
      if (this.hasError) {
        return `${baseClasses} border-red-300 shadow-red-100/50 bg-red-50/20`
      }
      
      if (this.isFocused) {
        return `${baseClasses} border-blue-400/60 shadow-blue-200/50 bg-blue-50/20 scale-[1.02]`
      }
      
      return `${baseClasses} shadow-gray-100/50 bg-white/10`
    },
    filteredCountries() {
      return countryService.searchCountries(this.countrySearch)
    },
    fullPhoneNumber() {
      if (!this.localNumber || !this.selectedCountry) {
        return ''
      }
      return countryService.getFullPhoneNumber(this.selectedCountry, this.localNumber)
    }
  },
  mounted() {
    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    parseInitialValue() {
      if (!this.modelValue) return
      
      // Si el valor incluye código de país, separarlo
      const phoneRegex = /^(\+\d{1,3})\s*(.+)$/
      const match = this.modelValue.match(phoneRegex)
      
      if (match) {
        const [, phoneCode, number] = match
        const country = countryService.getCountryByPhoneCode(phoneCode)
        if (country) {
          this.selectedCountry = country
        }
        this.localNumber = number.trim()
      } else {
        this.localNumber = this.modelValue
      }
    },
    toggleCountryDropdown() {
      this.showCountryDropdown = !this.showCountryDropdown
      if (this.showCountryDropdown) {
        this.countrySearch = ''
      }
    },
    selectCountry(country) {
      this.selectedCountry = country
      this.showCountryDropdown = false
      this.countrySearch = ''
      this.updateModelValue()
      this.$emit('country-change', country)
    },
    handleInput(event) {
      this.localNumber = event.target.value
      this.validatePhoneNumber()
      this.updateModelValue()
    },
    handleFocus(event) {
      this.isFocused = true
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.isFocused = false
      this.validatePhoneNumber()
      this.$emit('blur', event)
    },
    handleKeydown(event) {
      // Permitir solo números, espacios, guiones, paréntesis y teclas de control
      const allowedKeys = [
        'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
        'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'
      ]
      
      if (allowedKeys.includes(event.key)) {
        this.$emit('keydown', event)
        return
      }
      
      if (/^[0-9\s\-\(\)]$/.test(event.key)) {
        this.$emit('keydown', event)
        return
      }
      
      event.preventDefault()
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.showCountryDropdown = false
      }
    },
    validatePhoneNumber() {
      if (!this.localNumber) {
        this.internalError = ''
        return
      }
      
      const validation = countryService.validatePhoneNumber(this.localNumber, this.selectedCountry)
      this.internalError = validation.isValid ? '' : validation.message
    },
    updateModelValue() {
      const fullNumber = this.fullPhoneNumber
      this.$emit('update:modelValue', fullNumber)
    }
  }
}
</script>

<style scoped>
/* Animaciones para el dropdown */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

/* Animación para mensajes de error */
.error-enter-active,
.error-leave-active {
  transition: all 0.3s ease;
}

.error-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.error-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style> 