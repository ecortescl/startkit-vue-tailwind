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
    :icon-left="IconClock"
    :variant="variant"
    type="time"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @keydown="$emit('keydown', $event)"
  />
</template>

<script>
import BaseInput from './BaseInput.vue'
import { IconClock } from '@tabler/icons-vue'

export default {
  name: 'TimeInput',
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
      default: 'Selecciona una hora...'
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
    step: {
      type: [String, Number],
      default: 60
    }
  },
  emits: ['update:modelValue', 'focus', 'blur', 'keydown'],
  data() {
    return {
      IconClock
    }
  },
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