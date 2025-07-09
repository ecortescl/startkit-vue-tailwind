<template>
  <section id="services" class="relative py-20 md:py-28 bg-dark-background overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute -top-40 -left-40 w-80 h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-[100px] animate-float"></div>
    <div class="absolute -bottom-40 -right-40 w-80 h-80 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-[100px] animate-float-delay"></div>
    
    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-12 md:mb-16">
        <h2 class="inline-block relative font-headings text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
          <span class="relative z-10">Our Services</span>
          <span class="absolute -bottom-2 left-0 w-full h-3 bg-primary/10 rounded-full"></span>
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto animate-fade-in-delay">
          Custom technology solutions to take your business to the next level
        </p>
      </div>
      
      <!-- Services grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="bg-dark-background/40 p-5 md:p-6 lg:p-8 rounded-2xl border border-white/5 h-full flex flex-col hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow animate-slide-up"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <div class="service-icon-wrapper mb-6">
            <component :is="service.icon" class="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          
          <h3 class="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-primary">{{ service.title }}</h3>
          
          <p class="text-gray-300 mb-4 md:mb-6 flex-grow text-sm md:text-base">{{ service.description }}</p>
          
          <ul class="space-y-2 md:space-y-3 mb-4 md:mb-6">
            <li v-for="(feature, i) in service.features" :key="i" class="flex items-start gap-2">
              <IconCircleCheck class="w-4 h-4 md:w-5 md:h-5 text-secondary mt-0.5 flex-shrink-0" />
              <span class="text-xs md:text-sm text-gray-300">{{ feature }}</span>
            </li>
          </ul>
          
          <button 
            class="mt-auto self-start px-3 py-1.5 md:px-4 md:py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-1 md:gap-2 group text-sm md:text-base"
            @click="openModal(service)"
          >
            More Information
            <IconArrowRight class="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <BaseModal v-model="showModal" :title="selectedService?.title || ''">
      <div v-if="selectedService" class="space-y-6">
        <div class="flex items-center gap-4">
          <div class="service-icon-wrapper-sm">
            <component :is="selectedService.icon" class="w-5 h-5 md:w-6 md:h-6 text-white" />
          </div>
          <h4 class="text-lg md:text-xl font-bold text-primary">{{ selectedService.title }}</h4>
        </div>
        
        <p class="text-gray-300 text-sm md:text-base">{{ selectedService.description }}</p>
        
        <div>
          <h5 class="font-bold mb-2 md:mb-3 text-white text-base md:text-lg">Main Features:</h5>
          <ul class="space-y-2 md:space-y-3">
            <li v-for="(feature, i) in selectedService.features" :key="i" class="flex items-start gap-2">
              <IconCircleCheck class="w-4 h-4 md:w-5 md:h-5 text-secondary mt-0.5 flex-shrink-0" />
              <span class="text-sm md:text-base text-gray-300">{{ feature }}</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h5 class="font-bold mb-2 md:mb-3 text-white text-base md:text-lg">Technologies Used:</h5>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(tech, i) in selectedService.technologies" 
              :key="i"
              class="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm"
            >
              {{ tech }}
            </span>
          </div>
        </div>
        
        <div>
          <h5 class="font-bold mb-2 md:mb-3 text-white text-base md:text-lg">Work Process:</h5>
          <ol class="space-y-2 md:space-y-3">
            <li v-for="(step, i) in selectedService.process" :key="i" class="flex items-start gap-2">
              <span class="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary text-white text-xs md:text-sm font-bold flex-shrink-0">{{ i + 1 }}</span>
              <div>
                <span class="font-medium text-white text-sm md:text-base">{{ step.title }}:</span>
                <span class="text-gray-300 text-sm md:text-base"> {{ step.description }}</span>
              </div>
            </li>
          </ol>
        </div>
      </div>
      
      <template #footer>
        <button 
          class="px-3 py-1.5 md:px-4 md:py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm md:text-base"
          @click="showModal = false"
        >
          Close
        </button>
        <button 
          class="px-3 py-1.5 md:px-4 md:py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-1 md:gap-2 text-sm md:text-base"
        >
          <IconCalendar class="w-3 h-3 md:w-4 md:h-4" />
          Request Service
        </button>
      </template>
    </BaseModal>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import BaseModal from '@/shared/components/BaseModal.vue';
import {
  IconBrandReact,
  IconBrandPython,
  IconRobot,
  IconDeviceAnalytics,
  IconCloudComputing,
  IconDeviceMobile,
  IconCircleCheck,
  IconArrowRight,
  IconCalendar
} from '@tabler/icons-vue';

const showModal = ref(false);
const selectedService = ref(null);

const openModal = (service) => {
  selectedService.value = service;
  showModal.value = true;
};

const services = [
  {
    title: 'Web Development',
    description: 'We create modern, fast, and scalable web applications using the most advanced technologies.',
    icon: IconBrandReact,
    features: [
      'SPA Applications with Vue and React',
      'Custom UI/UX Design',
      'Performance Optimization',
      'API Integration'
    ],
    technologies: ['Vue.js', 'React', 'Tailwind CSS', 'Node.js', 'GraphQL'],
    process: [
      {
        title: 'Analysis',
        description: 'We understand your needs and define project objectives.'
      },
      {
        title: 'Design',
        description: 'We create wireframes and mockups to visualize the interface.'
      },
      {
        title: 'Development',
        description: 'We implement frontend and backend with best practices.'
      },
      {
        title: 'Testing',
        description: 'We perform thorough testing to ensure quality.'
      }
    ]
  },
  {
    title: 'Artificial Intelligence',
    description: 'We implement AI solutions that automate processes and generate valuable insights for your business.',
    icon: IconRobot,
    features: [
      'Custom Machine Learning',
      'Natural Language Processing',
      'Predictive Analysis',
      'Recommendation Systems'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'scikit-learn', 'NLTK', 'OpenAI API'],
    process: [
      {
        title: 'Data Collection',
        description: 'We identify and collect the necessary data.'
      },
      {
        title: 'Preparation',
        description: 'We clean and structure the data for analysis.'
      },
      {
        title: 'Modeling',
        description: 'We develop and train custom AI models.'
      },
      {
        title: 'Implementation',
        description: 'We integrate the solution into your existing infrastructure.'
      }
    ]
  },
  {
    title: 'Backend Development',
    description: 'We build robust APIs and scalable backend services that power your applications.',
    icon: IconBrandPython,
    features: [
      'RESTful and GraphQL APIs',
      'Microservices',
      'SQL and NoSQL Databases',
      'Secure Authentication Systems'
    ],
    technologies: ['Node.js', 'Python', 'Django', 'Express', 'MongoDB', 'PostgreSQL'],
    process: [
      {
        title: 'Architecture',
        description: 'We design the system structure and components.'
      },
      {
        title: 'Development',
        description: 'We implement business logic and APIs.'
      },
      {
        title: 'Security',
        description: 'We apply the best security practices and authentication.'
      },
      {
        title: 'Scalability',
        description: 'We optimize for handling large volumes of data and users.'
      }
    ]
  }
];
</script>

<style scoped>
.bg-dark-background {
  background-color: var(--background);
}

.service-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  background-color: rgba(63, 136, 197, 0.6);
  position: relative;
  overflow: hidden;
}

.service-icon-wrapper-sm {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: rgba(63, 136, 197, 0.6);
  position: relative;
  overflow: hidden;
}

.service-icon-wrapper::before,
.service-icon-wrapper-sm::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  opacity: 0.3;
}

.service-icon-wrapper > *,
.service-icon-wrapper-sm > * {
  position: relative;
  z-index: 1;
}

.shadow-glow {
  box-shadow: 0 10px 25px rgba(63, 136, 197, 0.1);
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

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
  opacity: 0;
}
</style> 