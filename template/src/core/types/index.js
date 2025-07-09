/**
 * Application types and interfaces
 * Help with documentation and development
 */

/**
 * @typedef {Object} Route
 * @property {string} path - URL path
 * @property {string} name - Route name
 * @property {Object} component - Vue component
 */

/**
 * @typedef {Object} ProgressConfig
 * @property {number} target - Target progress (0-100)
 * @property {number} duration - Duration in milliseconds
 */

/**
 * @typedef {Object} NotificationConfig
 * @property {'success'|'error'|'info'} type - Notification type
 * @property {string} message - Message to display
 * @property {number} [duration] - Duration in ms (optional)
 */

// Export for JSDoc usage
export const Types = {} 