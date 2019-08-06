import api from './api';

/**
 * Calculate best buy
 * @param {object[]} cards 
 * @param {object} options 
 */
export const calculate = ({ cards, options }) => api.post('/best/calculate', { cards, options });
