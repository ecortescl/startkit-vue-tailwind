<template>
  <section id="stack" class="relative py-20 md:py-28 bg-dark-background overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute -top-40 -right-40 w-80 h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-[100px] animate-float"></div>
    <div class="absolute -bottom-40 -left-40 w-80 h-80 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-[100px] animate-float-delay"></div>
    
    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <!-- Section header -->
      <div class="text-center mb-12 md:mb-16">
        <h2 class="inline-block relative font-headings text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
          <span class="relative z-10">Our Stack</span>
          <span class="absolute -bottom-2 left-0 w-full h-3 bg-secondary/10 rounded-full"></span>
        </h2>
        <p class="text-gray-300 max-w-2xl mx-auto animate-fade-in-delay">
          We work with the most modern technologies to create robust and scalable solutions
        </p>
      </div>
      
      <!-- Stack content - 40/60 layout -->
      <div class="flex flex-col lg:flex-row gap-8 items-start">
        <!-- Tech categories - 40% -->
        <div class="w-full lg:w-[40%] space-y-6">
          <div 
            v-for="(category, index) in categories" 
            :key="category.name"
            class="bg-dark-background/40 p-5 md:p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-glow animate-fade-up"
            :style="{ animationDelay: `${index * 150}ms` }"
          >
            <h3 class="text-lg md:text-xl font-bold mb-3 flex items-center gap-2 text-primary">
              <component :is="category.icon" class="w-5 h-5 md:w-6 md:h-6" />
              {{ category.name }}
            </h3>
            <p class="text-gray-300 text-sm md:text-base mb-4">{{ category.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in category.techs" 
                :key="tech"
                class="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Stack container - 60% -->
        <div class="w-full lg:w-[60%] relative">
          <!-- Desktop view -->
          <div class="hidden lg:block relative mx-auto h-[600px] rounded-2xl border border-white/5 bg-dark-background/40 overflow-hidden">
            <!-- Interactive hint -->
            <div class="absolute top-4 left-0 right-0 text-center text-sm text-gray-400 animate-pulse z-10">
              <span class="inline-flex items-center gap-1 bg-dark-background/70 px-3 py-1 rounded-full">
                <IconMouse class="w-4 h-4" /> Interactúa con la torre
              </span>
            </div>
            
            <!-- Canvas for physics -->
            <div ref="canvasContainer" class="w-full h-full"></div>
            
            <!-- Tech icons overlay -->
            <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
              <div 
                v-for="(block, index) in techBlocksState" 
                :key="index"
                class="absolute flex items-center justify-center"
                :style="{
                  left: `${block.position?.x || 0}px`,
                  top: `${block.position?.y || 0}px`,
                  width: `${blockSize}px`,
                  height: `${blockSize}px`,
                  transform: `translate(-50%, -50%) rotate(${block.angle || 0}rad)`,
                  transition: 'opacity 0.3s ease'
                }"
              >
                <div class="flex items-center justify-center w-full h-full">
                  <component 
                    :is="block.tech?.icon" 
                    class="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                    :style="{ color: block.tech?.color || 'var(--primary)' }"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile carousel view -->
          <div class="lg:hidden">
            <div class="relative">
              <!-- Carousel navigation -->
              <div class="flex justify-between items-center mb-6">
                <button 
                  @click="prevSlide" 
                  class="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  :disabled="currentSlide === 0"
                  :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
                >
                  <IconChevronLeft class="w-6 h-6 text-primary" />
                </button>
                <span class="text-sm text-gray-400">
                  {{ currentSlide + 1 }} / {{ Math.ceil(technologies.length / itemsPerSlide) }}
                </span>
                <button 
                  @click="nextSlide" 
                  class="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  :disabled="currentSlide >= Math.ceil(technologies.length / itemsPerSlide) - 1"
                  :class="{ 'opacity-50 cursor-not-allowed': currentSlide >= Math.ceil(technologies.length / itemsPerSlide) - 1 }"
                >
                  <IconChevronRight class="w-6 h-6 text-primary" />
                </button>
              </div>

              <!-- Carousel content -->
              <div class="overflow-hidden rounded-2xl border border-white/5 bg-dark-background/40">
                <div 
                  class="flex transition-transform duration-300 ease-in-out"
                  :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
                >
                  <div 
                    v-for="chunk in techChunks" 
                    :key="chunk[0].name"
                    class="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 gap-4 p-6"
                  >
                    <div 
                      v-for="tech in chunk" 
                      :key="tech.name"
                      class="aspect-square flex flex-col items-center justify-center p-4 rounded-xl bg-dark-background/60 border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                    >
                      <component 
                        :is="tech.icon" 
                        class="w-8 h-8 sm:w-10 sm:h-10 mb-3 transition-transform duration-300 group-hover:scale-110"
                        :style="{ color: tech.color }"
                      />
                      <span class="text-xs sm:text-sm text-center text-gray-300 group-hover:text-white transition-colors duration-300">
                        {{ tech.name }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Carousel indicators -->
              <div class="flex justify-center gap-2 mt-4">
                <button
                  v-for="i in Math.ceil(technologies.length / itemsPerSlide)"
                  :key="i"
                  @click="currentSlide = i - 1"
                  class="w-2 h-2 rounded-full transition-all duration-300"
                  :class="currentSlide === i - 1 ? 'bg-primary w-4' : 'bg-gray-600 hover:bg-gray-500'"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive, computed } from 'vue';
import * as Matter from 'matter-js';
import {
  IconBrandReact,
  IconBrandVue,
  IconBrandAngular,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandPhp,
  IconBrandMysql,
  IconBrandMongodb,
  IconBrandGit,
  IconBrandDocker,
  IconBrandAws,
  IconBrandFirebase,
  IconBrandTailwind,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandLaravel,
  IconDeviceDesktop,
  IconServer2,
  IconDatabase,
  IconCloud,
  IconPalette,
  IconMouse,
  IconChevronLeft,
  IconChevronRight
} from '@tabler/icons-vue';

const canvasContainer = ref(null);
let engine, render, runner;
const techBlocks = [];
let handleResize;
const techBlocksState = reactive([]);
const blockSize = ref(60); // Tamaño de bloque predeterminado

// Asegurarse de que Vue esté primero en la lista para que esté en la cima
const technologies = [
  { name: 'Vue', icon: IconBrandVue, color: '#4FC08D' },
  { name: 'React', icon: IconBrandReact, color: '#61DAFB' },
  { name: 'Angular', icon: IconBrandAngular, color: '#DD0031' },
  { name: 'Node.js', icon: IconBrandNodejs, color: '#339933' },
  { name: 'Python', icon: IconBrandPython, color: '#3776AB' },
  { name: 'JavaScript', icon: IconBrandJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: IconBrandTypescript, color: '#3178C6' },
  { name: 'CSS3', icon: IconBrandCss3, color: '#1572B6' },
  { name: 'HTML5', icon: IconBrandHtml5, color: '#E34F26' },
  { name: 'PHP', icon: IconBrandPhp, color: '#777BB4' },
  { name: 'MySQL', icon: IconBrandMysql, color: '#4479A1' },
  { name: 'MongoDB', icon: IconBrandMongodb, color: '#47A248' },
  { name: 'Git', icon: IconBrandGit, color: '#F05032' },
  { name: 'Docker', icon: IconBrandDocker, color: '#2496ED' },
  { name: 'AWS', icon: IconBrandAws, color: '#FF9900' },
  { name: 'Firebase', icon: IconBrandFirebase, color: '#FFCA28' },
  { name: 'Tailwind', icon: IconBrandTailwind, color: '#06B6D4' },
  { name: 'Figma', icon: IconBrandFigma, color: '#F24E1E' },
  { name: 'GitHub', icon: IconBrandGithub, color: '#ffffff' },
  { name: 'Laravel', icon: IconBrandLaravel, color: '#FF2D20' }
];

const categories = [
  {
    name: 'Frontend',
    icon: IconDeviceDesktop,
    description: 'Technologies to create modern, responsive user interfaces with great user experience.',
    techs: ['React', 'Vue.js', 'Angular', 'Tailwind CSS', 'TypeScript', 'Next.js']
  },
  {
    name: 'Backend',
    icon: IconServer2,
    description: 'Robust solutions for the server that handle business logic and process data efficiently.',
    techs: ['Node.js', 'Python', 'PHP', 'Laravel', 'Express', 'Django']
  },
  {
    name: 'Infrastructure',
    icon: IconCloud,
    description: 'Tools for deployment, scalability, and application maintenance in the cloud.',
    techs: ['Docker', 'AWS', 'Firebase', 'Kubernetes', 'CI/CD', 'Serverless']
  }
];

// Carousel state
const currentSlide = ref(0);
const itemsPerSlide = 6; // 2x3 grid on mobile

// Computed property to split technologies into chunks for the carousel
const techChunks = computed(() => {
  const chunks = [];
  for (let i = 0; i < technologies.length; i += itemsPerSlide) {
    chunks.push(technologies.slice(i, i + itemsPerSlide));
  }
  return chunks;
});

// Métodos del carrusel
const nextSlide = () => {
  if (currentSlide.value < Math.ceil(technologies.length / itemsPerSlide) - 1) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

onMounted(() => {
  if (!canvasContainer.value) return;
  
  // Setup Matter.js
  const Engine = Matter.Engine;
  const Render = Matter.Render;
  const Runner = Matter.Runner;
  const Bodies = Matter.Bodies;
  const Composite = Matter.Composite;
  const Mouse = Matter.Mouse;
  const MouseConstraint = Matter.MouseConstraint;
  
  // Create engine
  engine = Engine.create({
    gravity: { x: 0, y: 1, scale: 0.001 }
  });
  
  // Create renderer
  render = Render.create({
    element: canvasContainer.value,
    engine: engine,
    options: {
      width: canvasContainer.value.clientWidth,
      height: canvasContainer.value.clientHeight,
      wireframes: false,
      background: 'transparent'
    }
  });
  
  // Create runner
  runner = Runner.create();
  
  // Create walls
  const wallOptions = {
    isStatic: true,
    render: {
      fillStyle: 'transparent',
      strokeStyle: 'transparent'
    }
  };
  
  const ground = Bodies.rectangle(
    render.options.width / 2,
    render.options.height + 25,
    render.options.width + 100,
    50,
    wallOptions
  );
  
  const leftWall = Bodies.rectangle(
    -25,
    render.options.height / 2,
    50,
    render.options.height,
    wallOptions
  );
  
  const rightWall = Bodies.rectangle(
    render.options.width + 25,
    render.options.height / 2,
    50,
    render.options.height,
    wallOptions
  );
  
  // Add walls to world
  Composite.add(engine.world, [ground, leftWall, rightWall]);
  
  // Determine block size based on screen size
  const isMobile = window.innerWidth < 640;
  const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
  
  // Adjust block size and levels based on screen size
  let calculatedBlockSize, levels;
  
  if (isMobile) {
    calculatedBlockSize = Math.min(render.options.width / 8, 35);
    levels = 4; // Reducir niveles en móvil para evitar corte
  } else if (isTablet) {
    calculatedBlockSize = Math.min(render.options.width / 9, 45);
    levels = 5;
  } else {
    calculatedBlockSize = Math.min(render.options.width / 10, 60);
    levels = 6;
  }
  
  blockSize.value = calculatedBlockSize;
  
  // Ajustar la posición inicial para móviles para que no se corte
  const startY = isMobile ? 
    render.options.height - (calculatedBlockSize * 2) : 
    render.options.height - 50;
  
  // Clear any existing blocks
  techBlocksState.length = 0;
  
  // Create pyramid
  let techIndex = 0;
  for (let level = 0; level < levels; level++) {
    const blocksInLevel = level + 1;
    const levelWidth = blocksInLevel * calculatedBlockSize;
    const levelStartX = render.options.width / 2 - (levelWidth / 2) + (calculatedBlockSize / 2);
    
    for (let i = 0; i < blocksInLevel; i++) {
      // Para el bloque superior (nivel 0, bloque 0), siempre usar Vue
      const tech = (level === 0 && i === 0) ? 
        technologies[0] : // Vue está en la posición 0
        technologies[(techIndex + 1) % technologies.length]; // +1 para saltar Vue en el resto
      
      const x = levelStartX + (i * calculatedBlockSize);
      const y = startY - ((levels - level) * calculatedBlockSize);
      
      const block = Bodies.rectangle(x, y, calculatedBlockSize - 4, calculatedBlockSize - 4, {
        chamfer: { radius: 10 },
        render: {
          fillStyle: `rgba(30, 30, 30, 0.8)`,
          strokeStyle: tech.color,
          lineWidth: 2
        },
        friction: 0.8,
        restitution: 0.1,
        techData: tech
      });
      
      techBlocks.push(block);
      Composite.add(engine.world, block);
      techIndex++;
      
      // Add to reactive state for icons
      techBlocksState.push({
        tech: tech,
        position: { x, y },
        angle: 0
      });
    }
  }
  
  // Add mouse control with touch support
  const mouse = Mouse.create(render.canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  });
  
  Composite.add(engine.world, mouseConstraint);
  
  // Keep the mouse in sync with rendering
  render.mouse = mouse;
  
  // Run the engine
  Render.run(render);
  Runner.run(runner, engine);
  
  // Update icon positions
  Matter.Events.on(engine, 'afterUpdate', () => {
    techBlocks.forEach((block, index) => {
      if (techBlocksState[index]) {
        techBlocksState[index].position = { ...block.position };
        techBlocksState[index].angle = block.angle;
      }
    });
  });
  
  // Add hover effect (mouse and touch)
  const applyForceToNearbyBlocks = (x, y, isClick = false) => {
    techBlocks.forEach(block => {
      const distance = Math.sqrt(
        Math.pow(x - block.position.x, 2) + 
        Math.pow(y - block.position.y, 2)
      );
      
      const threshold = isClick ? 150 : 100;
      const forceMagnitude = isClick ? 0.02 : 0.005;
      
      if (distance < threshold) {
        const force = forceMagnitude * (1 - distance / threshold);
        const angle = Math.atan2(
          block.position.y - y,
          block.position.x - x
        );
        
        Matter.Body.applyForce(block, block.position, {
          x: Math.cos(angle) * force,
          y: Math.sin(angle) * force
        });
      }
    });
  };
  
  // Mouse events
  mouseConstraint.mouse.element.addEventListener('mousemove', (event) => {
    if (mouseConstraint.mouse.position) {
      applyForceToNearbyBlocks(mouseConstraint.mouse.position.x, mouseConstraint.mouse.position.y);
    }
  });
  
  mouseConstraint.mouse.element.addEventListener('click', () => {
    if (mouseConstraint.mouse.position) {
      applyForceToNearbyBlocks(mouseConstraint.mouse.position.x, mouseConstraint.mouse.position.y, true);
    }
  });
  
  // Touch events
  render.canvas.addEventListener('touchmove', (event) => {
    event.preventDefault();
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      const rect = render.canvas.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      
      applyForceToNearbyBlocks(x, y);
    }
  }, { passive: false });
  
  render.canvas.addEventListener('touchend', (event) => {
    if (event.changedTouches.length > 0) {
      const touch = event.changedTouches[0];
      const rect = render.canvas.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      
      applyForceToNearbyBlocks(x, y, true);
    }
  });
  
  // Handle window resize
  handleResize = () => {
    const width = canvasContainer.value.clientWidth;
    const height = canvasContainer.value.clientHeight;
    
    render.options.width = width;
    render.options.height = height;
    render.canvas.width = width;
    render.canvas.height = height;
    
    // Update ground position
    Matter.Body.setPosition(ground, {
      x: width / 2,
      y: height + 25
    });
    
    // Update left wall position
    Matter.Body.setPosition(leftWall, {
      x: -25,
      y: height / 2
    });
    
    // Update right wall position
    Matter.Body.setPosition(rightWall, {
      x: width + 25,
      y: height / 2
    });
    
    // Rebuild the pyramid with new dimensions
    // Note: In a real app, you might want to throttle this for performance
    if (width !== render.options.width || height !== render.options.height) {
      // Clear existing blocks
      techBlocks.forEach(block => {
        Composite.remove(engine.world, block);
      });
      techBlocks.length = 0;
      techBlocksState.length = 0;
      
      // Recalculate block size
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
      
      let newBlockSize, levels;
      
      if (isMobile) {
        newBlockSize = Math.min(width / 8, 35);
        levels = 4; // Reducir niveles en móvil
      } else if (isTablet) {
        newBlockSize = Math.min(width / 9, 45);
        levels = 5;
      } else {
        newBlockSize = Math.min(width / 10, 60);
        levels = 6;
      }
      
      blockSize.value = newBlockSize;
      
      // Ajustar la posición inicial para móviles
      const startY = isMobile ? 
        height - (newBlockSize * 2) : 
        height - 50;
      
      // Rebuild pyramid
      let techIndex = 0;
      for (let level = 0; level < levels; level++) {
        const blocksInLevel = level + 1;
        const levelWidth = blocksInLevel * newBlockSize;
        const levelStartX = width / 2 - (levelWidth / 2) + (newBlockSize / 2);
        
        for (let i = 0; i < blocksInLevel; i++) {
          // Para el bloque superior (nivel 0, bloque 0), siempre usar Vue
          const tech = (level === 0 && i === 0) ? 
            technologies[0] : // Vue está en la posición 0
            technologies[(techIndex + 1) % technologies.length]; // +1 para saltar Vue en el resto
          
          const x = levelStartX + (i * newBlockSize);
          const y = startY - ((levels - level) * newBlockSize);
          
          const block = Bodies.rectangle(x, y, newBlockSize - 4, newBlockSize - 4, {
            chamfer: { radius: 10 },
            render: {
              fillStyle: `rgba(30, 30, 30, 0.8)`,
              strokeStyle: tech.color,
              lineWidth: 2
            },
            friction: 0.8,
            restitution: 0.1,
            techData: tech
          });
          
          techBlocks.push(block);
          Composite.add(engine.world, block);
          techIndex++;
          
          // Add to reactive state for icons
          techBlocksState.push({
            tech: tech,
            position: { x, y },
            angle: 0
          });
        }
      }
    }
  };
  
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  if (runner) Matter.Runner.stop(runner);
  if (render) Matter.Render.stop(render);
  if (handleResize) window.removeEventListener('resize', handleResize);
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

@keyframes pulse {
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}

.shadow-glow {
  box-shadow: 0 10px 25px rgba(63, 136, 197, 0.1);
}

.tech-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(30, 30, 30, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  transition: all 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
}
</style> 