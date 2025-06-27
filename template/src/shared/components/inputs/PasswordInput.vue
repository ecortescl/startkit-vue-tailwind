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
    :icon-left="IconLock"
    :icon-right="showPassword ? IconEyeOff : IconEye"
    :variant="variant"
    :type="showPassword ? 'text' : 'password'"
    @focus="$emit('focus', $event)"
    @blur="handleBlur"
    @keydown="$emit('keydown', $event)"
    @icon-right-click="togglePasswordVisibility"
  />
</template>

<script>
import BaseInput from './BaseInput.vue'
import { IconLock, IconEye, IconEyeOff } from '@tabler/icons-vue'

export default {
  name: 'PasswordInput',
  components: {
    BaseInput
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
      default: 'Ingresa tu contraseña...'
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
    validateStrength: {
      type: Boolean,
      default: false
    },
    minLength: {
      type: Number,
      default: 8
    }
  },
  emits: ['update:modelValue', 'focus', 'blur', 'keydown'],
  data() {
    return {
      IconLock,
      IconEye,
      IconEyeOff,
      showPassword: false,
      internalError: ''
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        if (this.validateStrength) {
          this.validatePasswordStrength(value)
        }
        this.$emit('update:modelValue', value)
      }
    },
    computedError() {
      return this.error || this.internalError
    },
    passwordStrength() {
      if (!this.validateStrength || !this.modelValue) {
        return { score: 0, text: '', color: '' }
      }

      const password = this.modelValue
      let score = 0
      const checks = {
        length: password.length >= this.minLength,
        lowercase: /[a-z]/.test(password),
        uppercase: /[A-Z]/.test(password),
        numbers: /\d/.test(password),
        symbols: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
      }

      score = Object.values(checks).filter(Boolean).length

      const strengths = {
        0: { text: '', color: '' },
        1: { text: 'Muy débil', color: 'text-red-600' },
        2: { text: 'Débil', color: 'text-orange-600' },
        3: { text: 'Aceptable', color: 'text-yellow-600' },
        4: { text: 'Fuerte', color: 'text-green-600' },
        5: { text: 'Muy fuerte', color: 'text-emerald-600' }
      }

      return { score, ...strengths[score] }
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    validatePasswordStrength(password) {
      this.internalError = ''
      
      if (!password) {
        return
      }
      
      if (password.length < this.minLength) {
        this.internalError = `La contraseña debe tener al menos ${this.minLength} caracteres`
        return
      }
    },
    handleBlur(event) {
      if (this.validateStrength) {
        this.validatePasswordStrength(event.target.value)
      }
      this.$emit('blur', event)
    }
  }
}
</script> 