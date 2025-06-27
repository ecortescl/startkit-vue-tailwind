<template>
  <BaseInput
    v-model="inputValue"
    :label="label"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    :error="computedError"
    :help-text="helpText"
    icon-left=""
    :variant="variant"
    type="number"
    @focus="$emit('focus', $event)"
    @blur="handleBlur"
    @keydown="handleKeydown"
  />
</template>

<script>
import BaseInput from './BaseInput.vue'

export default {
  name: 'NumberInput',
  components: {
    BaseInput
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Ingresa un número...'
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
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    step: {
      type: Number,
      default: 1
    },
    allowDecimals: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:modelValue', 'focus', 'blur', 'keydown'],
  data() {
    return {
      internalError: ''
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        // Validar y formatear el valor
        const numericValue = this.parseNumericValue(value)
        this.validateValue(numericValue)
        this.$emit('update:modelValue', numericValue)
      }
    },
    computedError() {
      return this.error || this.internalError
    }
  },
  methods: {
    parseNumericValue(value) {
      if (value === '' || value === null || value === undefined) {
        return ''
      }
      
      // Convertir a string si es número
      const stringValue = String(value)
      
      // Si no se permiten decimales, eliminar puntos
      if (!this.allowDecimals) {
        return stringValue.replace(/\./g, '')
      }
      
      return stringValue
    },
    validateValue(value) {
      this.internalError = ''
      
      if (value === '') {
        return
      }
      
      const numValue = Number(value)
      
      // Validar si es un número válido
      if (isNaN(numValue)) {
        this.internalError = 'Debe ser un número válido'
        return
      }
      
      // Validar rango mínimo
      if (this.min !== null && numValue < this.min) {
        this.internalError = `El valor mínimo es ${this.min}`
        return
      }
      
      // Validar rango máximo
      if (this.max !== null && numValue > this.max) {
        this.internalError = `El valor máximo es ${this.max}`
        return
      }
      
      // Validar decimales
      if (!this.allowDecimals && value.includes('.')) {
        this.internalError = 'No se permiten decimales'
        return
      }
    },
    handleKeydown(event) {
      // Permitir teclas de control
      const controlKeys = [
        'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
        'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'
      ]
      
      if (controlKeys.includes(event.key)) {
        this.$emit('keydown', event)
        return
      }
      
      // Permitir números
      if (/^[0-9]$/.test(event.key)) {
        this.$emit('keydown', event)
        return
      }
      
      // Permitir punto decimal si está habilitado
      if (this.allowDecimals && event.key === '.' && !event.target.value.includes('.')) {
        this.$emit('keydown', event)
        return
      }
      
      // Prevenir otras teclas
      event.preventDefault()
    },
    handleBlur(event) {
      this.validateValue(event.target.value)
      this.$emit('blur', event)
    }
  }
}
</script> 