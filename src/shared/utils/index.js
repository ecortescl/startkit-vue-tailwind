/**
 * Utilidades generales para toda la aplicación
 */

/**
 * Valida si un email es válido
 * @param {string} email - Email a validar
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Formatea un número como porcentaje
 * @param {number} value - Valor a formatear
 * @param {number} decimals - Número de decimales
 * @returns {string}
 */
export const formatAsPercentage = (value, decimals = 0) => {
  return `${value.toFixed(decimals)}%`
}

/**
 * Simula una pausa/delay
 * @param {number} ms - Milisegundos a esperar
 * @returns {Promise}
 */
export const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
} 