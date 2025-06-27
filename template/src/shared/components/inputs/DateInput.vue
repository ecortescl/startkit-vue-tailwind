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
    :icon-left="IconCalendar"
    :variant="variant"
    type="date"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @keydown="$emit('keydown', $event)"
  />
</template>

<script>
import BaseInput from './BaseInput.vue'
import { IconCalendar } from '@tabler/icons-vue'

export default {
  name: 'DateInput',
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
      default: 'Selecciona una fecha...'
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
      type: String,
      default: ''
    },
    max: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue', 'focus', 'blur', 'keydown'],
  data() {
    return {
      IconCalendar
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