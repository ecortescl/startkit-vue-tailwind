<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
    <div class="max-w-lg w-full text-center">
      <!-- Logo o icono -->
      <div class="mb-8">
        <div class="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
      </div>

      <!-- Título principal -->
      <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Coming Soon
      </h1>

      <!-- Subtítulo -->
      <p class="text-xl text-gray-600 mb-8">
        Estamos trabajando en algo increíble
      </p>

              <!-- Descripción -->
        <p class="text-gray-500 mb-8 leading-relaxed">
          Nuestro proyecto está en desarrollo. Pronto tendrás acceso a una experiencia única y moderna.
        </p>

        <!-- Enlaces de navegación -->
        <div class="flex justify-center mb-8">
          <router-link 
            to="/docs" 
            class="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-blue-500/25"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Ver Documentación
          </router-link>
        </div>

      <!-- Indicador de progreso -->
      <div class="mb-8">
        <div class="text-sm text-gray-500 mb-2">Progreso del desarrollo</div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="text-sm text-gray-500 mt-2">{{ progress }}% completado</div>
      </div>
    </div>
  </div>
</template>

<script>
import { progressService } from '@/shared/services/progressService.js'
import { PROGRESS_TARGET, PROGRESS_ANIMATION_DURATION } from '@/core/constants'

export default {
  name: 'HomeView',
  data() {
    return {
      progress: 0
    }
  },
  methods: {
    animateProgress() {
      progressService.animateProgress(this, 'progress', PROGRESS_TARGET, PROGRESS_ANIMATION_DURATION)
    }
  },
  mounted() {
    this.animateProgress()
  }
}
</script>
