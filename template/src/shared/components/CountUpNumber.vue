<template>
  <div class="text-center" ref="counterRef">
    <span class="block text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1">
      {{ prefix }}{{ displayNumber }}{{ suffix }}
    </span>
    <span class="text-xs md:text-sm text-gray-400">
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  endValue: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 2000 // duración en milisegundos
  },
  decimals: {
    type: Number,
    default: 0
  },
  prefix: {
    type: String,
    default: ''
  },
  suffix: {
    type: String,
    default: ''
  },
  startOnView: {
    type: Boolean,
    default: true
  }
});

const displayNumber = ref(0);
const counterRef = ref(null);
const observer = ref(null);
let animationStarted = false;

const easeOutQuad = t => t * (2 - t);

const animateValue = () => {
  if (animationStarted) return;
  animationStarted = true;

  const startTime = performance.now();
  const startValue = 0;
  const endValue = props.endValue;
  
  const updateNumber = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / props.duration, 1);
    
    const easedProgress = easeOutQuad(progress);
    const currentValue = startValue + (endValue - startValue) * easedProgress;
    
    displayNumber.value = Number(currentValue.toFixed(props.decimals));
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  };
  
  requestAnimationFrame(updateNumber);
};

onMounted(() => {
  if (props.startOnView && counterRef.value) {
    observer.value = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateValue();
        observer.value?.disconnect();
      }
    }, { threshold: 0.5 });
    
    observer.value.observe(counterRef.value);
  } else {
    animateValue();
  }
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script> 