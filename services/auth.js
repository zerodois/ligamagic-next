import api from './api';

/**
 * Create an user
 * @param {object} data User to be created
 * @param {string} data.email
 * @param {string} data.password
 */
export const createUser = async (data) => {
  return api.post('/auth/signup', data)
};
