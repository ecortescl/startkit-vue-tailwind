<script setup>
import { 
  IconHome,
  IconUser,
  IconMail,
  IconHeart,
  IconStar,
  IconSettings,
  IconSearch,
  IconDownload,
  IconShoppingCart,
  IconCalendar,
  IconBell,
  IconCamera
} from '@tabler/icons-vue'
</script>

<template>
  <div class="icon-showcase">
    <!-- Título principal -->
    <h2 class="text-3xl font-bold text-center mb-2 text-gray-800 font-montserrat">
      Colección de Íconos Tabler
    </h2>
    <p class="text-center text-gray-600 mb-12 font-opensans">
      Explora estos 12 íconos populares listos para usar en tu proyecto
    </p>
    
    <!-- Grid de íconos -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
      <!-- Ícono 1: Home -->
      <div class="icon-card group">
        <div class="icon-container bg-blue-100 group-hover:bg-blue-200">
          <IconHome class="w-8 h-8 text-blue-600" />
        </div>
        <h3 class="font-semibold text-gray-700 font-inter">Home</h3>
        <p class="text-sm text-gray-500 font-roboto">IconHome</p>
      </div>

      <!-- Ícono 2: User -->
      <div class="icon-card group">
        <div class="icon-container bg-green-100 group-hover:bg-green-200">
          <IconUser class="w-8 h-8 text-green-600" />
        </div>
        <h3 class="font-semibold text-gray-700 font-inter">Usuario</h3>
        <p class="text-sm text-gray-500 font-roboto">IconUser</p>
      </div>

      <!-- Ícono 3: Mail -->
      <div class="icon-card group">
        <div class="icon-container bg-purple-100 group-hover:bg-purple-200">
          <IconMail class="w-8 h-8 text-purple-600" />
        </div>
        <h3 class="font-semibold text-gray-700 font-inter">Correo</h3>
        <p class="text-sm text-gray-500 font-roboto">IconMail</p>
      </div>

      <!-- Ícono 4: Heart -->
      <div class="icon-card group">
        <div class="icon-container bg-red-100 group-hover:bg-red-200">
          <IconHeart class="w-8 h-8 text-red-600" />
        </div>
        <h3 class="font-semibold text-gray-700 font-inter">Favoritos</h3>
        <p class="text-sm text-gray-500 font-roboto">IconHeart</p>
      </div>

      <!-- Ícono 5: Star -->
      <div class="icon-card group">
        <div class="icon-container bg-yellow-100 group-hover:bg-yellow-200">
          <IconStar class="w-8 h-8 text-yellow-600" />
        </div>
        <h3 class="font-semibold text-gray-700 font-inter">Calificación</h3>
        <p class="text-sm text-gray-500 font-roboto">IconStar</p>
      </div>

      <!-- Ícono 6: Settings -->
      <div class="icon-card group">
        <div class="icon-container bg-gray-100 group-hover:bg-gray-200">
          <IconSettings class="w-8 h-8 text-gray-600" />
        </div>
        <h3 class="font-semibold text-gray-700 font-inter">Configuración</h3>
        <p class="text-sm text-gray-500 font-roboto">IconSettings</p>
      </div>

      <!-- Ícono 7: Search -->
      <div class="icon-card group">
        <div class="icon-container bg-indigo-100 group-hover:bg-indigo-200">
          <IconSearch class="w-8 h-8 text-indigo-600" />
        </div>
        <h3 class="font-semibold text-gray-700 font-inter">Buscar</h3>
        <p class="text-sm text-gray-500 font-roboto">IconSearch</p>
      </div>

      <!-- Ícono 8: Download -->
      <div class="icon-card group">
        <div class="icon-container bg-teal-100 group-hover:bg-teal-200">
          <IconDownload class="w-8 h-8 text-teal-600" />
        </div>
        <h3 class="font-semibold text-gray-700 font-inter">Descargar</h3>
        <p class="text-sm text-gray-500 font-roboto">IconDownload</p>
      </div>

      <!-- Ícono 9: Shopping Cart -->
      <div class="icon-card group">
        <div class="icon-container bg-orange-100 group-hover:bg-orange-200">
          <IconShoppingCart class="w-8 h-8 text-orange-600" />
        </div>
        <h3 class="font-semibold text-gray-700 font-inter">Carrito</h3>
        <p class="text-sm text-gray-500 font-roboto">IconShoppingCart</p>
      </div>

      <!-- Ícono 10: Calendar -->
      <div class="icon-card group">
        <div class="icon-container bg-pink-100 group-hover:bg-pink-200">
          <IconCalendar class="w-8 h-8 text-pink-600" />
        </div>
        <h3 class="font-semibold text-gray-700 font-inter">Calendario</h3>
        <p class="text-sm text-gray-500 font-roboto">IconCalendar</p>
      </div>

      <!-- Ícono 11: Bell -->
      <div class="icon-card group">
        <div class="icon-container bg-cyan-100 group-hover:bg-cyan-200">
          <IconBell class="w-8 h-8 text-cyan-600" />
        </div>
        <h3 class="font-semibold text-gray-700 font-inter">Notificaciones</h3>
        <p class="text-sm text-gray-500 font-roboto">IconBell</p>
      </div>

      <!-- Ícono 12: Camera -->
      <div class="icon-card group">
        <div class="icon-container bg-emerald-100 group-hover:bg-emerald-200">
          <IconCamera class="w-8 h-8 text-emerald-600" />
        </div>
        <h3 class="font-semibold text-gray-700 font-inter">Cámara</h3>
        <p class="text-sm text-gray-500 font-roboto">IconCamera</p>
      </div>
    </div>

    <!-- SHOWCASE DE CÓDIGO - Movido debajo de los íconos -->
    <div class="code-showcase bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
      <div class="text-center mb-8">
        <h3 class="text-2xl font-bold text-gray-800 mb-3 font-montserrat">
          💻 Showcase de Código
        </h3>
        <p class="text-gray-600 font-opensans">
          Copia y pega estos ejemplos para usar los íconos en tu proyecto
        </p>
      </div>

      <!-- Ejemplo de importación -->
      <div class="mb-8">
        <h4 class="text-lg font-semibold mb-4 text-gray-800 font-inter flex items-center">
          <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          1. Importar íconos
        </h4>
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div class="bg-gray-800 text-white px-4 py-2 text-sm font-roboto">
            JavaScript / Vue.js
          </div>
          <pre class="p-4 text-sm overflow-x-auto font-roboto"><code class="text-gray-800">// Importar íconos específicos
import { 
  IconHome, IconUser, IconMail, IconHeart, 
  IconStar, IconSettings, IconSearch, IconDownload,
  IconShoppingCart, IconCalendar, IconBell, IconCamera
} from '@tabler/icons-vue'</code></pre>
        </div>
      </div>

      <!-- Ejemplo de uso en template -->
      <div class="mb-8">
        <h4 class="text-lg font-semibold mb-4 text-gray-800 font-inter flex items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
          2. Usar en template
        </h4>
        <div class="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div class="bg-gray-800 text-white px-4 py-2 text-sm font-roboto">
            Vue Template
          </div>
          <pre class="p-4 text-sm overflow-x-auto font-roboto"><code class="text-gray-800">&lt;!-- Ícono básico --&gt;
&lt;IconHome class="w-6 h-6" /&gt;

&lt;!-- Con colores y tamaños --&gt;
&lt;IconUser class="w-8 h-8 text-blue-600" /&gt;

&lt;!-- En botones --&gt;
&lt;button class="flex items-center gap-2"&gt;
  &lt;IconSettings class="w-4 h-4" /&gt;
  Configuración
&lt;/button&gt;</code></pre>
        </div>
      </div>

      <!-- Tipografías disponibles -->
      <div>
        <h4 class="text-lg font-semibold mb-4 text-gray-800 font-inter flex items-center">
          <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
          3. Tipografías disponibles
        </h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white rounded-lg border border-gray-200 p-4">
            <h5 class="font-inter text-lg font-semibold mb-2">Inter</h5>
            <p class="font-inter text-gray-600 mb-2">font-inter</p>
            <code class="text-sm bg-gray-100 px-2 py-1 rounded font-roboto">class="font-inter"</code>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 p-4">
            <h5 class="font-montserrat text-lg font-semibold mb-2">Montserrat</h5>
            <p class="font-montserrat text-gray-600 mb-2">font-montserrat</p>
            <code class="text-sm bg-gray-100 px-2 py-1 rounded font-roboto">class="font-montserrat"</code>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 p-4">
            <h5 class="font-roboto text-lg font-semibold mb-2">Roboto</h5>
            <p class="font-roboto text-gray-600 mb-2">font-roboto</p>
            <code class="text-sm bg-gray-100 px-2 py-1 rounded font-roboto">class="font-roboto"</code>
          </div>
          <div class="bg-white rounded-lg border border-gray-200 p-4">
            <h5 class="font-opensans text-lg font-semibold mb-2">Open Sans</h5>
            <p class="font-opensans text-gray-600 mb-2">font-opensans</p>
            <code class="text-sm bg-gray-100 px-2 py-1 rounded font-roboto">class="font-opensans"</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-showcase {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  background: white;
  transition: all 0.3s ease;
  cursor: pointer;
}

.icon-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04);
}

.icon-container {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.icon-card h3 {
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.icon-card p {
  font-size: 0.875rem;
}

.code-showcase {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

@media (max-width: 768px) {
  .icon-showcase {
    padding: 1rem;
  }
  
  .icon-card {
    padding: 1rem;
  }
  
  .icon-container {
    width: 3rem;
    height: 3rem;
  }
  
  .code-showcase {
    padding: 1.5rem;
  }
}
</style> 