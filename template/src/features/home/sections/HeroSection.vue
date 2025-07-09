<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <canvas ref="canvas" class="absolute top-0 left-0 w-full h-full z-0"></canvas>
    
    <!-- Overlay con gradiente animado -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-dark-background/95"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-12 md:pb-20">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Columna de texto -->
        <div class="text-center lg:text-left">
          <div class="mb-6 md:mb-8">
            <h2 class="text-lg md:text-xl font-semibold text-secondary mb-3 md:mb-4 animate-slide-up">
              Digital Innovation & AI
            </h2>
            <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headings mb-4 md:mb-6 animate-slide-up-delay-1 gradient-text">
              Transforming Ideas into Digital Solutions
            </h1>
            <p class="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 animate-slide-up-delay-2 max-w-2xl mx-auto lg:mx-0">
              Boost your business with custom technology solutions. 
              Experts in software development, AI and digital transformation.
            </p>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8 animate-slide-up-delay-3 max-w-xl mx-auto lg:mx-0">
              <CountUpNumber 
                :end-value="150" 
                prefix="+"
                :duration="2500"
              >
                Projects
              </CountUpNumber>
              
              <CountUpNumber 
                :end-value="98" 
                suffix="%"
                :duration="2000"
              >
                Satisfaction
              </CountUpNumber>
              
              <CountUpNumber 
                :end-value="24" 
                suffix="/7"
                :duration="1500"
              >
                Support
              </CountUpNumber>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-3 md:gap-4 animate-slide-up-delay-4 justify-center lg:justify-start">
            <BaseButton 
              variant="primary"
              size="md"
              class="min-w-[160px] sm:min-w-[180px]"
            >
              <template #icon-left>
                <IconCalendar class="w-5 h-5" />
              </template>
              Schedule a Demo
            </BaseButton>
            
            <BaseButton 
              variant="outline-secondary"
              size="md"
              class="min-w-[160px] sm:min-w-[180px]"
            >
              <template #icon-left>
                <IconFolder class="w-5 h-5" />
              </template>
              View Portfolio
            </BaseButton>
          </div>
        </div>

        <!-- Columna del formulario -->
        <div class="w-full max-w-md mx-auto lg:max-w-none animate-slide-up-delay-5 mt-8 lg:mt-0">
          <ContactForm @submit="handleFormSubmit" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ContactForm from '@/shared/components/ContactForm.vue';
import BaseButton from '@/shared/components/BaseButton.vue';
import CountUpNumber from '@/shared/components/CountUpNumber.vue';
import { IconCalendar, IconFolder } from '@tabler/icons-vue';

const canvas = ref(null);
let particles = [];
let animationFrameId;

const handleFormSubmit = async (formData) => {
  console.log('Form submitted:', formData);
  // Here would go the logic to process the form
};

class Particle {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.alpha = Math.random() * 0.5 + 0.2; // Transparencia variable
  }

  update() {
    if (this.x > window.innerWidth || this.x < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y > window.innerHeight || this.y < 0) {
      this.speedY = -this.speedY;
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw(ctx) {
    ctx.fillStyle = `rgba(229, 229, 229, ${this.alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  const particleCount = 100;
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * 2 + 1;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const speedX = (Math.random() - 0.5) * 0.5;
    const speedY = (Math.random() - 0.5) * 0.5;
    particles.push(new Particle(x, y, size, speedX, speedY));
  }
}

function animate() {
  const ctx = canvas.value.getContext('2d');
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach(p => {
    p.update();
    p.draw(ctx);
  });
  animationFrameId = requestAnimationFrame(animate);
}

function handleResize() {
  if (canvas.value) {
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
    initParticles();
  }
}

onMounted(() => {
  if (canvas.value) {
    handleResize();
    initParticles();
    animate();
    window.addEventListener('resize', handleResize);
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  cancelAnimationFrame(animationFrameId);
});
</script>

<style scoped>
#hero {
  background: var(--background);
  position: relative;
  overflow: hidden;
}

.gradient-text {
  background: linear-gradient(
    90deg,
    var(--primary) 0%,
    var(--secondary) 25%,
    var(--primary) 50%,
    var(--secondary) 75%,
    var(--primary) 100%
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shine 8s linear infinite;
}

.gradient-text-secondary {
  background: linear-gradient(
    90deg,
    var(--secondary) 0%,
    var(--primary) 50%,
    var(--secondary) 100%
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shine 8s linear infinite;
}

@keyframes shine {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

.animate-slide-up {
  opacity: 0;
  animation: slideUp 0.6s ease-out forwards;
}

.animate-slide-up-delay-1 {
  opacity: 0;
  animation: slideUp 0.6s ease-out 0.2s forwards;
}

.animate-slide-up-delay-2 {
  opacity: 0;
  animation: slideUp 0.6s ease-out 0.4s forwards;
}

.animate-slide-up-delay-3 {
  opacity: 0;
  animation: slideUp 0.6s ease-out 0.6s forwards;
}

.animate-slide-up-delay-4 {
  opacity: 0;
  animation: slideUp 0.6s ease-out 0.8s forwards;
}

.animate-slide-up-delay-5 {
  opacity: 0;
  animation: slideUp 0.6s ease-out 1s forwards;
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style> 