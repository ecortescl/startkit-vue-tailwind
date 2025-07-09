<template>
  <section id="contact" class="relative py-20 md:py-28 bg-dark-background overflow-hidden">
    <!-- Particles canvas -->
    <canvas ref="particlesCanvas" class="absolute inset-0 w-full h-full"></canvas>
    
    <!-- Decorative elements -->
    <div class="absolute -top-40 -right-40 w-80 h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-[100px] animate-float"></div>
    <div class="absolute -bottom-40 -left-40 w-80 h-80 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-[100px] animate-float-delay"></div>
    
    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-12 md:mb-16">
        <h2 class="inline-block relative font-headings text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
          <span class="relative z-10">Let's Talk About Your Project</span>
          <span class="absolute -bottom-2 left-0 w-full h-3 bg-secondary/10 rounded-full"></span>
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto animate-fade-in-delay">
          Ready to turn your idea into reality? Contact us for a free, no-obligation consultation.
        </p>
      </div>
      
      <!-- Contact content -->
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Contact info -->
        <div class="space-y-8 animate-fade-up">
          <div class="backdrop-blur-xl bg-dark-background/20 rounded-3xl border border-white/10 p-6 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold mb-6 text-primary flex items-center gap-3">
              <IconMessageCircle class="w-6 h-6" />
              Información de Contacto
            </h3>
            
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <IconMail class="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Email</h4>
                  <a href="mailto:contacto@softtech.com" class="text-gray-300 hover:text-primary transition-colors">
                    contacto@softtech.com
                  </a>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <IconPhone class="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Teléfono</h4>
                  <a href="tel:+1234567890" class="text-gray-300 hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <IconMapPin class="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 class="font-semibold text-white mb-1">Ubicación</h4>
                  <p class="text-gray-300">
                    Ciudad de México, México<br>
                    Remoto disponible
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Social media -->
          <div class="backdrop-blur-xl bg-dark-background/20 rounded-3xl border border-white/10 p-6 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold mb-6 text-primary flex items-center gap-3">
              <IconShare class="w-6 h-6" />
              Síguenos
            </h3>
            
            <div class="flex gap-4">
              <a href="#" class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group">
                <IconBrandGithub class="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group">
                <IconBrandLinkedin class="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group">
                <IconBrandTwitter class="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group">
                <IconBrandInstagram class="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        <!-- Contact form -->
        <div class="animate-fade-up" style="animation-delay: 0.2s">
          <ContactForm 
            title="¿Listo para Innovar?"
            subtitle="Cuéntanos sobre tu proyecto"
            @submit="handleContactSubmit"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ContactForm from '@/shared/components/ContactForm.vue';
import {
  IconMessageCircle,
  IconMail,
  IconPhone,
  IconMapPin,
  IconShare,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram
} from '@tabler/icons-vue';

const particlesCanvas = ref(null);
let animationFrameId;

// Particles system
const particles = [];
const particleCount = 50;

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = '#3F88C5';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

const initParticles = () => {
  if (!particlesCanvas.value) return;
  
  const canvas = particlesCanvas.value;
  const ctx = canvas.getContext('2d');
  
  // Clear particles array
  particles.length = 0;
  
  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle(canvas));
  }
};

const animate = () => {
  if (!particlesCanvas.value) return;
  
  const canvas = particlesCanvas.value;
  const ctx = canvas.getContext('2d');
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update and draw particles
  particles.forEach(particle => {
    particle.update();
    particle.draw(ctx);
  });
  
  animationFrameId = requestAnimationFrame(animate);
};

const handleContactSubmit = (formData) => {
  console.log('Form submitted:', formData);
  // Here would go the form submission logic
  alert('Thank you for contacting us! We will respond soon.');
};

function handleResize() {
  if (particlesCanvas.value) {
    particlesCanvas.value.width = window.innerWidth;
    particlesCanvas.value.height = window.innerHeight;
    initParticles();
  }
}

onMounted(() => {
  if (particlesCanvas.value) {
    handleResize();
    initParticles();
    animate();
    window.addEventListener('resize', handleResize);
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>

<style scoped>
.bg-dark-background {
  background-color: var(--background);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.05);
  }
}

.animate-float {
  animation: float 15s ease-in-out infinite;
}

.animate-float-delay {
  animation: float 18s ease-in-out infinite reverse;
  animation-delay: -5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 0.8s ease-out 0.3s forwards;
  opacity: 0;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.6s ease-out forwards;
  opacity: 0;
}
</style> 