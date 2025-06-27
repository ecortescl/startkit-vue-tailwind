<template>
  <BaseInput
    v-model="inputValue"
    :label="label"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    :error="error"
    :help-text="helpText"
    icon-left=""
    :variant="variant"
    type="text"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @keydown="$emit('keydown', $event)"
  />
</template>

<script>
import BaseInput from './BaseInput.vue'

export default {
  name: 'TextInput',
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
      default: 'Ingresa texto...'
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
    }
  },
  emits: ['update:modelValue', 'focus', 'blur', 'keydown'],
  computed: {
    inputValue: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script> 