import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

// Crear instancia de axios con configuración base
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para agregar el token en cada petición
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de autenticación
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token inválido o expirado
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// ==================== AUTH ====================

export const authAPI = {
  
  register: async (userData) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  }
};

// ==================== PRODUCTS ====================

export const productsAPI = {
  
  getAll: async () => {
    const response = await api.get('/products');
    return response.data;
  },

  
  getById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  
  create: async (productData) => {
    const response = await api.post('/products', productData);
    return response.data;
  },

  
  update: async (id, productData) => {
    const response = await api.put(`/products/${id}`, productData);
    return response.data;
  },

  
  delete: async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  }
};

export default api;