<template>
  <section id="about" class="relative py-20 md:py-28 overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-float"></div>
    <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] animate-float-delay"></div>
    
    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-16">
        <h2 class="inline-block relative font-headings text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span class="relative z-10">About Us</span>
          <span class="absolute -bottom-2 left-0 w-full h-3 bg-secondary/10 rounded-full"></span>
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto">
          We are a passionate team of technology experts, dedicated to transforming ideas into innovative digital solutions.
        </p>
      </div>
      
      <!-- Main content -->
      <div class="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        <!-- Left column: Company values -->
        <div class="order-2 md:order-1">
          <div class="space-y-8">
            <div 
              v-for="(value, index) in companyValues" 
              :key="index"
              class="feature-card group"
              :class="{'from-left': index % 2 === 0, 'from-right': index % 2 !== 0}"
            >
              <div class="flex gap-4 items-start">
                <div class="feature-icon">
                  <component :is="value.icon" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {{ value.title }}
                  </h3>
                  <p class="text-gray-300">
                    {{ value.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right column: Stats and info -->
        <div class="order-1 md:order-2">
          <div class="relative">
            <!-- Backdrop card -->
            <div class="backdrop-blur-md bg-dark-background/40 p-8 rounded-2xl border border-white/5 from-bottom">
              <div class="flex items-center justify-between mb-8">
                <h3 class="text-2xl font-bold gradient-text">
                  SoftTech en Números
                </h3>
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transform rotate-12">
                  <IconChartBar class="w-6 h-6 text-primary" />
                </div>
              </div>
              
              <!-- Stats grid -->
              <div class="grid grid-cols-2 gap-6">
                <div v-for="(stat, index) in companyStats" :key="index" class="stat-card">
                  <component :is="stat.icon" class="w-8 h-8 text-secondary mb-3" />
                  <div class="text-2xl md:text-3xl font-bold mb-1">{{ stat.value }}</div>
                  <div class="text-sm text-gray-400">{{ stat.label }}</div>
                </div>
              </div>
              
              <!-- Testimonial -->
              <div class="mt-8 pt-6 border-t border-white/10">
                <div class="flex gap-3 items-center mb-3">
                  <IconQuote class="w-5 h-5 text-secondary" />
                  <div class="text-sm font-medium">What our clients say</div>
                </div>
                <p class="text-gray-300 italic">
                  "SoftTech completely transformed our digital operation. Their team understood our needs and delivered a solution that exceeded our expectations."
                </p>
                <div class="mt-3 flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <IconUser class="w-4 h-4 text-primary" />
                    </div>
                    <span class="font-medium">Charles Miller</span>
                  </div>
                  <div class="flex">
                    <IconStar class="w-4 h-4 text-secondary" v-for="i in 5" :key="i" />
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Decorative elements -->
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
            <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/5 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      <!-- Bottom CTA -->
      <div class="mt-16 text-center from-bottom">
        <BaseButton 
          variant="primary"
          size="lg"
          class="group"
        >
          <template #icon-left>
            <IconUsers class="w-5 h-5 group-hover:animate-bounce" />
          </template>
          Meet Our Team
          <template #icon-right>
            <IconArrowRight class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </template>
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BaseButton from '@/shared/components/BaseButton.vue';
import {
  IconBulb,
  IconDeviceLaptop,
  IconRocket,
  IconUsers,
  IconChartBar,
  IconQuote,
  IconUser,
  IconStar,
  IconArrowRight,
  IconCode,
  IconHeadset,
  IconCertificate,
  IconTrophy
} from '@tabler/icons-vue';

const companyValues = [
  {
    title: 'Constant Innovation',
    description: 'We stay at the forefront of emerging technologies to offer cutting-edge solutions.',
    icon: IconBulb
  },
  {
    title: 'Technical Excellence',
    description: 'Our team consists of senior developers with extensive experience in modern technologies.',
    icon: IconCode
  },
  {
    title: 'Results-Driven',
    description: 'We are committed to delivering solutions that generate real and measurable value for your business.',
    icon: IconRocket
  },
  {
    title: 'Continuous Support',
    description: 'We offer constant guidance and technical support to ensure the success of your project.',
    icon: IconHeadset
  }
];

const companyStats = [
  {
    value: '+10',
    label: 'Años de experiencia',
    icon: IconCertificate
  },
  {
    value: '98%',
    label: 'Clientes satisfechos',
    icon: IconTrophy
  },
  {
    value: '+150',
    label: 'Proyectos completados',
    icon: IconDeviceLaptop
  },
  {
    value: '+40',
    label: 'Expertos en tecnología',
    icon: IconUsers
  }
];

onMounted(() => {
  // Inicializar animaciones basadas en scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.from-left, .from-right, .from-bottom').forEach(el => {
    observer.observe(el);
  });
});
</script>

<style scoped>
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

@keyframes shine {
  0% {
    background-position: 0% center;
  }
  100% {
    background-position: 200% center;
  }
}

.shadow-glow {
  box-shadow: 0 0 20px rgba(63, 136, 197, 0.05);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  background-color: rgba(63, 136, 197, 0.6);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.feature-icon::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-icon > * {
  position: relative;
  z-index: 1;
}

.group:hover .feature-icon::before {
  opacity: 0.8;
}

.stat-card {
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: rgba(255, 255, 255, 0.03);
  transition: background-color 0.3s ease;
  text-align: center;
}

.stat-card:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

/* Animaciones basadas en scroll */
.from-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.from-right {
  opacity: 0;
  transform: translateX(50px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.from-bottom {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-in {
  opacity: 1;
  transform: translate(0);
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
</style> 