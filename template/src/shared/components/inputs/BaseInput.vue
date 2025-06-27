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
      :class="getContainerClasses()"
    >
      <!-- Fondo glassmorphism -->
      <div class="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/10 backdrop-blur-xl"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/20"></div>
      
      <!-- Input wrapper -->
      <div class="relative flex items-center">
        <!-- Icono izquierdo -->
        <div v-if="$slots.iconLeft || iconLeft" class="flex-shrink-0 pl-4">
          <div class="w-8 h-8 rounded-xl flex items-center justify-center bg-white/20 border border-white/30">
            <slot name="iconLeft">
              <component
                v-if="iconLeft"
                :is="iconLeft"
                :size="18"
                :stroke="2"
                class="text-gray-600"
              />
            </slot>
          </div>
        </div>

        <!-- Input -->
        <slot :inputId="inputId" :inputClasses="inputClasses" :inputAttrs="inputAttrs">
          <input
            :id="inputId"
            :class="inputClasses"
            v-bind="inputAttrs"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @keydown="handleKeydown"
          />
        </slot>

        <!-- Icono derecho -->
        <div v-if="$slots.iconRight || iconRight" class="flex-shrink-0 pr-4">
          <div class="w-8 h-8 rounded-xl flex items-center justify-center bg-white/20 border border-white/30 cursor-pointer hover:bg-white/30 transition-colors duration-200">
            <slot name="iconRight">
              <component
                v-if="iconRight"
                :is="iconRight"
                :size="18"
                :stroke="2"
                class="text-gray-600"
                @click="$emit('iconRightClick')"
              />
            </slot>
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
  </div>
</template>

<script>
import { IconAlertCircle } from '@tabler/icons-vue'

export default {
  name: 'BaseInput',
  components: {
    IconAlertCircle
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
      default: ''
    },
    type: {
      type: String,
      default: 'text'
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
    iconLeft: {
      type: [Object, String],
      default: null
    },
    iconRight: {
      type: [Object, String],
      default: null
    },
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'success', 'error', 'warning'].includes(value)
    }
  },
  emits: ['update:modelValue', 'focus', 'blur', 'keydown', 'iconRightClick'],
  data() {
    return {
      isFocused: false,
      inputId: `input-${Math.random().toString(36).substr(2, 9)}`
    }
  },
  computed: {
    hasError() {
      return Boolean(this.error)
    },
    errorMessage() {
      return this.error
    },
    getContainerClasses() {
      return () => {
        const baseClasses = 'border-white/20 hover:border-white/40 transition-all duration-300'
        
        if (this.hasError) {
          return `${baseClasses} border-red-300 shadow-red-100/50 bg-red-50/20`
        }
        
        if (this.isFocused) {
          return `${baseClasses} border-blue-400/60 shadow-blue-200/50 bg-blue-50/20 scale-[1.02]`
        }
        
        switch (this.variant) {
          case 'success':
            return `${baseClasses} border-emerald-300 shadow-emerald-100/50 bg-emerald-50/20`
          case 'warning':
            return `${baseClasses} border-amber-300 shadow-amber-100/50 bg-amber-50/20`
          default:
            return `${baseClasses} shadow-gray-100/50 bg-white/10`
        }
      }
    },
    inputClasses() {
      const baseClasses = 'w-full bg-transparent border-0 outline-none text-gray-900 placeholder-gray-500 text-sm font-medium'
      const paddingClasses = this.getPaddingClasses()
      const stateClasses = this.disabled ? 'cursor-not-allowed opacity-60' : ''
      
      return `${baseClasses} ${paddingClasses} ${stateClasses}`
    },
    inputAttrs() {
      return {
        type: this.type,
        placeholder: this.placeholder,
        disabled: this.disabled,
        readonly: this.readonly,
        required: this.required,
        value: this.modelValue,
        ...this.$attrs
      }
    }
  },
  methods: {
    getPaddingClasses() {
      const hasLeftIcon = this.$slots.iconLeft || this.iconLeft
      const hasRightIcon = this.$slots.iconRight || this.iconRight
      
      let classes = 'py-4'
      
      if (hasLeftIcon && hasRightIcon) {
        classes += ' px-4'
      } else if (hasLeftIcon) {
        classes += ' pl-4 pr-5'
      } else if (hasRightIcon) {
        classes += ' pl-5 pr-4'
      } else {
        classes += ' px-5'
      }
      
      return classes
    },
    handleInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },
    handleFocus(event) {
      this.isFocused = true
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.isFocused = false
      this.$emit('blur', event)
    },
    handleKeydown(event) {
      this.$emit('keydown', event)
    }
  }
}
</script>

<style scoped>
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