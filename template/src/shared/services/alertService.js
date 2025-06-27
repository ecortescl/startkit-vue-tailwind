/**
 * Servicio para manejar alertas de la aplicación
 * Siguiendo principios SOLID: SRP, OCP, DIP
 */

class AlertService {
  constructor() {
    this.alertComponent = null
    this.defaultPosition = 'top-right' // Posición por defecto
  }

  /**
   * Registra el componente de alertas
   * @param {Object} component - Instancia del componente AlertSystem
   */
  registerAlertComponent(component) {
    this.alertComponent = component
  }

  /**
   * Establece la posición por defecto de las alertas
   * @param {string} position - Posición ('top-right', 'top-left', 'bottom-right', 'bottom-left')
   */
  setDefaultPosition(position) {
    this.defaultPosition = position
    if (this.alertComponent) {
      this.alertComponent.setPosition(position)
    }
  }

  /**
   * Muestra una alerta de éxito
   * @param {string} message - Mensaje principal
   * @param {string} title - Título de la alerta (opcional)
   * @param {number} duration - Duración en ms (opcional, por defecto 5000)
   * @param {string} position - Posición de la alerta (opcional)
   */
  showSuccess(message, title = '¡Éxito!', duration = 5000, position = null) {
    return this.showAlert({
      type: 'success',
      title,
      message,
      duration,
      position
    })
  }

  /**
   * Muestra una alerta de peligro/error
   * @param {string} message - Mensaje principal
   * @param {string} title - Título de la alerta (opcional)
   * @param {number} duration - Duración en ms (opcional, por defecto 7000)
   * @param {string} position - Posición de la alerta (opcional)
   */
  showDanger(message, title = 'Error', duration = 7000, position = null) {
    return this.showAlert({
      type: 'danger',
      title,
      message,
      duration,
      position
    })
  }

  /**
   * Muestra una alerta de advertencia
   * @param {string} message - Mensaje principal
   * @param {string} title - Título de la alerta (opcional)
   * @param {number} duration - Duración en ms (opcional, por defecto 6000)
   * @param {string} position - Posición de la alerta (opcional)
   */
  showWarning(message, title = 'Advertencia', duration = 6000, position = null) {
    return this.showAlert({
      type: 'warning',
      title,
      message,
      duration,
      position
    })
  }

  /**
   * Muestra una alerta informativa
   * @param {string} message - Mensaje principal
   * @param {string} title - Título de la alerta (opcional)
   * @param {number} duration - Duración en ms (opcional, por defecto 5000)
   * @param {string} position - Posición de la alerta (opcional)
   */
  showInfo(message, title = 'Información', duration = 5000, position = null) {
    return this.showAlert({
      type: 'info',
      title,
      message,
      duration,
      position
    })
  }

  /**
   * Muestra una alerta personalizada
   * @param {Object} alertConfig - Configuración de la alerta
   * @param {string} alertConfig.type - Tipo de alerta (success, danger, warning, info)
   * @param {string} alertConfig.title - Título de la alerta
   * @param {string} alertConfig.message - Mensaje de la alerta
   * @param {number} alertConfig.duration - Duración en ms (0 para persistente)
   * @param {string} alertConfig.position - Posición de la alerta (opcional)
   */
  showAlert(alertConfig) {
    if (!this.alertComponent) {
      console.warn('AlertService: No se ha registrado el componente de alertas')
      return null
    }

    // Validar configuración mínima
    if (!alertConfig.message) {
      console.error('AlertService: El mensaje es obligatorio')
      return null
    }

    // Configuración por defecto
    const config = {
      type: 'info',
      title: 'Información',
      duration: 5000,
      position: this.defaultPosition,
      ...alertConfig
    }

    return this.alertComponent.addAlert(config)
  }

  /**
   * Remueve una alerta específica
   * @param {number|string} id - ID de la alerta a remover
   */
  removeAlert(id) {
    if (!this.alertComponent) return

    this.alertComponent.removeAlert(id)
  }

  /**
   * Métodos de conveniencia para casos comunes
   */
  
  // Éxito en operaciones
  showSaveSuccess() {
    return this.showSuccess('Los datos se han guardado correctamente')
  }

  showDeleteSuccess() {
    return this.showSuccess('El elemento se ha eliminado correctamente')
  }

  showUpdateSuccess() {
    return this.showSuccess('Los datos se han actualizado correctamente')
  }

  // Errores comunes
  showNetworkError() {
    return this.showDanger(
      'No se pudo conectar con el servidor. Verifica tu conexión a internet.',
      'Error de Conexión'
    )
  }

  showValidationError(message = 'Por favor, verifica los datos ingresados') {
    return this.showDanger(message, 'Error de Validación')
  }

  showPermissionError() {
    return this.showDanger(
      'No tienes permisos suficientes para realizar esta acción',
      'Acceso Denegado'
    )
  }

  // Advertencias comunes
  showUnsavedChanges() {
    return this.showWarning(
      'Tienes cambios sin guardar. Recuerda guardar antes de continuar.',
      'Cambios Pendientes',
      0 // Persistente hasta que el usuario la cierre
    )
  }

  showMaintenanceWarning() {
    return this.showWarning(
      'El sistema estará en mantenimiento pronto. Guarda tu trabajo.',
      'Mantenimiento Programado'
    )
  }

  // Información útil
  showWelcomeInfo() {
    return this.showInfo(
      '¡Bienvenido! Explora todas las funcionalidades disponibles.',
      '¡Hola!'
    )
  }

  showFeatureInfo(feature) {
    return this.showInfo(
      `La función "${feature}" está ahora disponible para usar.`,
      'Nueva Función'
    )
  }
}

// Exportar una instancia única (Patrón Singleton)
export const alertService = new AlertService()

// Para compatibilidad con el servicio anterior
export const notificationService = {
  showSuccess: (message) => alertService.showSuccess(message),
  showError: (message) => alertService.showDanger(message),
  showInfo: (message) => alertService.showInfo(message),
  handleNotifyMe: () => alertService.showSuccess('¡Gracias por tu interés! Te notificaremos cuando esté listo.')
} 