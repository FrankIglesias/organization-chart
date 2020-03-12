import api from '../config/api';

export const getChief = () => api.get('/EmployeesChart-Api', { manager: 0 });

export const getEmployeesByManager = manager => api.get('/EmployeesChart-Api', { manager });
