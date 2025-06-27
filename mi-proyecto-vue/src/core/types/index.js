/**
 * Tipos y interfaces de la aplicación
 * Ayudan con la documentación y el desarrollo
 */

/**
 * @typedef {Object} Route
 * @property {string} path - Ruta de la URL
 * @property {string} name - Nombre de la ruta
 * @property {Object} component - Componente de Vue
 */

/**
 * @typedef {Object} ProgressConfig
 * @property {number} target - Progreso objetivo (0-100)
 * @property {number} duration - Duración en milisegundos
 */

/**
 * @typedef {Object} NotificationConfig
 * @property {'success'|'error'|'info'} type - Tipo de notificación
 * @property {string} message - Mensaje a mostrar
 * @property {number} [duration] - Duración en ms (opcional)
 */

// Exportar para uso en JSDoc
export const Types = {} 