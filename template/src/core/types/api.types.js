/**
 * @typedef {Object} ContactFormData
 * @property {string} name - The full name of the contact
 * @property {string} email - The email address
 * @property {string} message - The message content
 */

/**
 * @typedef {Object} ServiceRequest
 * @property {string} name - Client's name
 * @property {string} email - Client's email
 * @property {string} company - Client's company name
 * @property {string} description - Project description
 * @property {string} budget - Estimated budget
 * @property {string} timeline - Expected timeline
 */

/**
 * @typedef {Object} Service
 * @property {string} id - Unique identifier
 * @property {string} title - Service title
 * @property {string} description - Service description
 * @property {string[]} features - List of features
 * @property {string[]} technologies - List of technologies used
 * @property {Object[]} process - Work process steps
 * @property {string} process[].title - Step title
 * @property {string} process[].description - Step description
 */

/**
 * @typedef {Object} ApiResponse
 * @property {number} status - HTTP status code
 * @property {string} message - Response message
 * @property {Object} [data] - Response payload
 * @property {Object} [errors] - Validation errors
 */

export {}; 