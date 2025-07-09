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
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
