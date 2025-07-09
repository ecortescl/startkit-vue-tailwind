import api from '../api';

export class ContactService {
  static async sendContactForm(data) {
    try {
      const response = await api.post('/contact', data);
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static async subscribeNewsletter(email) {
    try {
      const response = await api.post('/newsletter/subscribe', { email });
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static handleError(error) {
    // Custom error handling
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data?.message || 'An error occurred',
        errors: error.response.data?.errors
      };
    }
    return {
      status: 500,
      message: 'Network error or server is not responding',
    };
  }
} 