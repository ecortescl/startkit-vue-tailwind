/**
 * Servicio para manejar animaciones de progreso
 * Diseñado para trabajar con Options API
 */

class ProgressService {
  /**
   * Anima el progreso de un componente
   * @param {Object} component - Instancia del componente Vue
   * @param {string} propertyName - Nombre de la propiedad data que contiene el progreso
   * @param {number} targetProgress - Progreso objetivo (0-100)
   * @param {number} duration - Duración en milisegundos
   */
  animateProgress(component, propertyName = 'progress', targetProgress = 75, duration = 2000) {
    const steps = 60 // Para animación suave
    const increment = targetProgress / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      component[propertyName] = Math.min(currentStep * increment, targetProgress)
      
      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepDuration)

    return timer // Retorna el timer por si se necesita cancelar
  }

  /**
   * Resetea el progreso a 0
   * @param {Object} component - Instancia del componente Vue
   * @param {string} propertyName - Nombre de la propiedad data que contiene el progreso
   */
  resetProgress(component, propertyName = 'progress') {
    component[propertyName] = 0
  }

  /**
   * Formatea el progreso como porcentaje
   * @param {number} value - Valor del progreso
   * @param {number} decimals - Número de decimales
   * @returns {string}
   */
  formatAsPercentage(value, decimals = 0) {
    return `${value.toFixed(decimals)}%`
  }
}

// Exportar una instancia única (Singleton)
export const progressService = new ProgressService() 