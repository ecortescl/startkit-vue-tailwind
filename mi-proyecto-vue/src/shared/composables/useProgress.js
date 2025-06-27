import { ref, onMounted } from 'vue'

/**
 * Composable para manejar animaciones de progreso
 * @param {number} targetProgress - Progreso objetivo (0-100)
 * @param {number} duration - Duración en milisegundos
 * @returns {Object} - Objeto con progress reactivo
 */
export function useProgress(targetProgress = 75, duration = 2000) {
  const progress = ref(0)

  const animateProgress = () => {
    const steps = 60 // Para animación suave
    const increment = targetProgress / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      progress.value = Math.min(currentStep * increment, targetProgress)
      
      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepDuration)
  }

  const resetProgress = () => {
    progress.value = 0
  }

  return {
    progress,
    animateProgress,
    resetProgress
  }
} 