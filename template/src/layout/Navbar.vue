<template>
  <header class="fixed top-0 left-0 w-full z-50">
    <nav class="backdrop-blur-md bg-dark-background/80 border-b border-white/10">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <IconCube class="w-8 h-8 text-primary" />
            <span class="text-2xl font-bold font-headings">SoftTech</span>
          </div>

          <!-- Menú de escritorio -->
          <ul class="hidden md:flex items-center space-x-8">
            <li v-for="item in menuItems" :key="item.href">
              <a :href="item.href" 
                 class="relative py-2 hover:text-primary transition-colors duration-300 group"
                 @click.prevent="scrollToSection(item.href)">
                {{ item.text }}
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>

          <!-- Botón de menú móvil -->
          <button class="md:hidden text-white focus:outline-none"
                  @click="isMenuOpen = !isMenuOpen"
                  aria-label="Toggle menu">
            <IconMenu v-if="!isMenuOpen" class="w-6 h-6" />
            <IconX v-else class="w-6 h-6" />
          </button>
        </div>

        <!-- Menú móvil -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform -translate-y-4 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-4 opacity-0"
        >
          <ul v-if="isMenuOpen" 
              class="md:hidden py-4 space-y-4">
            <li v-for="item in menuItems" :key="item.href">
              <a :href="item.href" 
                 class="block py-2 hover:text-primary transition-colors duration-300"
                 @click.prevent="scrollToSection(item.href); isMenuOpen = false">
                {{ item.text }}
              </a>
            </li>
          </ul>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { IconCube, IconMenu, IconX } from '@tabler/icons-vue';

const isMenuOpen = ref(false);

const menuItems = [
  { href: '#about', text: 'Sobre Nosotros' },
  { href: '#services', text: 'Servicios' },
  { href: '#stack', text: 'Stack' },
  { href: '#contact', text: 'Contacto' }
];

function scrollToSection(href) {
  const element = document.querySelector(href);
  if (element) {
    const navbarHeight = 80; // altura aproximada del navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

// Cerrar menú móvil al redimensionar la ventana a desktop
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) { // 768px es el breakpoint md de Tailwind
    isMenuOpen.value = false;
  }
});
</script>

<style scoped>
.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Asegurarse de que el menú móvil tenga un fondo cuando está abierto */
.backdrop-blur-md:has(ul[v-if="isMenuOpen"]) {
  background-color: rgba(26, 26, 26, 0.95);
}

/* Estilo para el enlace activo */
a.router-link-active,
a.router-link-exact-active {
  color: var(--primary);
}

/* Animación suave para todos los enlaces */
a {
  font-family: var(--font-body);
  font-weight: 500;
  position: relative;
}

/* Línea debajo del enlace en hover */
a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width 0.3s ease;
}

a:hover::after {
  width: 100%;
}
</style> 