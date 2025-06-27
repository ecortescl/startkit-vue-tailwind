/**
 * Servicio para manejar notificaciones de la aplicación
 * Siguiendo el principio de Responsabilidad Única (SRP)
 */

class NotificationService {
  /**
   * Muestra una notificación de éxito
   * @param {string} message - Mensaje a mostrar
   */
  showSuccess(message) {
    // Por ahora usamos alert, pero aquí se podría integrar
    // una librería como Toastify o similar
    alert(`✅ ${message}`)
  }

  /**
   * Muestra una notificación de error
   * @param {string} message - Mensaje de error
   */
  showError(message) {
    alert(`❌ ${message}`)
  }

  /**
   * Muestra una notificación informativa
   * @param {string} message - Mensaje informativo
   */
  showInfo(message) {
    alert(`ℹ️ ${message}`)
  }

  /**
   * Maneja la notificación de "Notificarme cuando esté listo"
   */
  handleNotifyMe() {
    this.showSuccess('¡Gracias por tu interés! Te notificaremos cuando esté listo.')
  }
}

// Exportar una instancia única (Singleton)
export const notificationService = new NotificationService() 