<template>
  <button
    :class="[
      'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300',
      'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-background',
      sizeClasses,
      variantClasses,
      { 'opacity-75 cursor-not-allowed': disabled }
    ]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot name="icon-left"></slot>
    <slot></slot>
    <slot name="icon-right"></slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline-primary', 'outline-secondary'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const sizeClasses = computed(() => ({
  'sm': 'px-4 py-2 text-sm',
  'md': 'px-6 py-2.5 text-base',
  'lg': 'px-8 py-3 text-lg'
}[props.size]));

const variantClasses = computed(() => ({
  'primary': `
    bg-primary hover:bg-primary/90 text-white
    transform hover:scale-105
    focus:ring-primary/50
  `,
  'secondary': `
    bg-secondary hover:bg-secondary/90 text-dark-background
    transform hover:scale-105
    focus:ring-secondary/50
  `,
  'outline-primary': `
    border-2 border-primary text-primary
    hover:bg-primary/10
    focus:ring-primary/50
  `,
  'outline-secondary': `
    border-2 border-secondary text-secondary
    hover:bg-secondary/10
    focus:ring-secondary/50
  `
}[props.variant]));
</script>

<style scoped>
button {
  position: relative;
  overflow: hidden;
}

button::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

button:hover::after {
  transform: translateX(100%);
}
</style> 