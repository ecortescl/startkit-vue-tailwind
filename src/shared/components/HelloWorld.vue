<script setup>
// Importar íconos específicos de Tabler Icons
import { 
  IconHome, 
  IconUser, 
  IconSettings, 
  IconHeart, 
  IconStar,
  IconMail,
  IconPhone,
  IconDownload,
  IconCheck,
  IconX
} from '@tabler/icons-vue'

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green flex items-center gap-2">
      <IconStar class="w-8 h-8" />
      {{ msg }}
    </h1>
    
    <h3 class="mb-6">
      You've successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a> +
      <strong>Tabler Icons</strong>
    </h3>

    <!-- Sección de ejemplos de íconos -->
    <div class="icons-demo">
      <h4 class="text-xl font-semibold mb-4 flex items-center gap-2">
        <IconSettings class="w-5 h-5" />
        Ejemplos de Tabler Icons
      </h4>
      
      <!-- Íconos básicos -->
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div class="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50">
          <IconHome class="w-8 h-8 mb-2 text-blue-500" />
          <span class="text-sm">Home</span>
        </div>
        
        <div class="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50">
          <IconUser class="w-8 h-8 mb-2 text-green-500" />
          <span class="text-sm">User</span>
        </div>
        
        <div class="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50">
          <IconMail class="w-8 h-8 mb-2 text-purple-500" />
          <span class="text-sm">Mail</span>
        </div>
        
        <div class="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50">
          <IconPhone class="w-8 h-8 mb-2 text-orange-500" />
          <span class="text-sm">Phone</span>
        </div>
        
        <div class="flex flex-col items-center p-4 border rounded-lg hover:bg-gray-50">
          <IconHeart class="w-8 h-8 mb-2 text-red-500" />
          <span class="text-sm">Heart</span>
        </div>
      </div>

      <!-- Botones con íconos -->
      <div class="flex flex-wrap gap-3 mb-6">
        <button class="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <IconDownload class="w-4 h-4" />
          Descargar
        </button>
        
        <button class="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          <IconCheck class="w-4 h-4" />
          Confirmar
        </button>
        
        <button class="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
          <IconX class="w-4 h-4" />
          Cancelar
        </button>
      </div>

      <!-- Diferentes tamaños -->
      <div class="mb-6">
        <h5 class="text-lg font-semibold mb-3">Diferentes tamaños:</h5>
        <div class="flex items-center gap-4">
          <IconStar class="w-4 h-4 text-yellow-500" />
          <IconStar class="w-6 h-6 text-yellow-500" />
          <IconStar class="w-8 h-8 text-yellow-500" />
          <IconStar class="w-12 h-12 text-yellow-500" />
        </div>
      </div>

      <!-- Código de ejemplo -->
      <div class="bg-gray-100 p-4 rounded-lg">
        <h5 class="text-lg font-semibold mb-2">Código de ejemplo:</h5>
        <pre class="text-sm text-gray-700"><code>// Importar íconos
import { IconHome, IconUser } from '@tabler/icons-vue'

// Usar en template
&lt;IconHome class="w-6 h-6 text-blue-500" /&gt;</code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.icons-demo {
  max-width: 800px;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
