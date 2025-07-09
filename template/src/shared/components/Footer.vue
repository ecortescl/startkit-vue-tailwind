<template>
  <footer class="relative bg-dark-background border-t border-white/5">
    <!-- Decorative elements -->
    <div class="absolute -top-40 -right-40 w-80 h-80 md:w-96 md:h-96 bg-primary/5 rounded-full blur-[100px] animate-float"></div>
    <div class="absolute -bottom-40 -left-40 w-80 h-80 md:w-96 md:h-96 bg-secondary/5 rounded-full blur-[100px] animate-float-delay"></div>
    
    <div class="container mx-auto px-4 sm:px-6 relative z-10">
      <!-- Main footer content -->
      <div class="py-12 md:py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <!-- Company info -->
          <div class="lg:col-span-2">
            <div class="flex items-center gap-3 mb-6">
              <IconCube class="w-8 h-8 text-primary" />
              <span class="text-2xl font-bold font-headings">SoftTech</span>
            </div>
            <p class="text-gray-300 mb-6 max-w-md">
              Transformamos ideas en soluciones digitales innovadoras. Especialistas en desarrollo web, 
              aplicaciones móviles e inteligencia artificial.
            </p>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group">
                <IconBrandGithub class="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group">
                <IconBrandLinkedin class="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group">
                <IconBrandTwitter class="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors group">
                <IconBrandInstagram class="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          <!-- Services -->
          <div>
            <h3 class="text-lg font-bold mb-6 text-white">Servicios</h3>
            <ul class="space-y-3">
              <li>
                <a href="#services" class="text-gray-300 hover:text-primary transition-colors">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#services" class="text-gray-300 hover:text-primary transition-colors">
                  Aplicaciones Móviles
                </a>
              </li>
              <li>
                <a href="#services" class="text-gray-300 hover:text-primary transition-colors">
                  Inteligencia Artificial
                </a>
              </li>
              <li>
                <a href="#services" class="text-gray-300 hover:text-primary transition-colors">
                  Consultoría IT
                </a>
              </li>
              <li>
                <a href="#services" class="text-gray-300 hover:text-primary transition-colors">
                  Cloud Computing
                </a>
              </li>
            </ul>
          </div>
          
          <!-- Company -->
          <div>
            <h3 class="text-lg font-bold mb-6 text-white">Empresa</h3>
            <ul class="space-y-3">
              <li>
                <a href="#about" class="text-gray-300 hover:text-primary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#contact" class="text-gray-300 hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-300 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-300 hover:text-primary transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-300 hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Bottom footer -->
      <div class="border-t border-white/5 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-sm">
            © 2024 SoftTech. Todos los derechos reservados.
          </p>
          <div class="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" class="hover:text-primary transition-colors">Términos de Servicio</a>
            <a href="#" class="hover:text-primary transition-colors">Política de Privacidad</a>
            <a href="#" class="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import {
  IconCube,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandInstagram
} from '@tabler/icons-vue';
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
</style> 