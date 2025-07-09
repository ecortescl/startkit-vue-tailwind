import api from '../api';

export class ServicesService {
  static async getServices() {
    try {
      const response = await api.get('/services');
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static async getServiceDetails(serviceId) {
    try {
      const response = await api.get(`/services/${serviceId}`);
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static async requestService(serviceId, data) {
    try {
      const response = await api.post(`/services/${serviceId}/request`, data);
      return response;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static handleError(error) {
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data?.message || 'An error occurred while fetching services',
        errors: error.response.data?.errors
      };
    }
    return {
      status: 500,
      message: 'Network error or server is not responding',
    };
  }
} 