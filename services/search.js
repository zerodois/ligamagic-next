import api from './api';
import { cleanJson } from '../utils';

export const best = async (form) => {
  const lines = form.list
    .trim('')
    .split('\n')
    .filter(line => line.trim());
  const options = {
    'free-shipping': form.free.split(';').map(item => item.trim()).filter(item => item),
  };
  const filters = {
    excludes: form.ban.split(';').filter(item => item)
  };
  const error = lines.some(line => !/^\d{1,2}\s.+$/.test(line));
  if (error) {
    throw new Error('Formato inválido');
  }
  const cards = lines.map((line) => {
    const [, number, name] = /^(\d{1,2})\s(.+)$/.exec(line);
    return { required: Number(number), name };
  });
  const request = { cards, options, filters };
  console.log('Request:', request);
  return api.post('/best', request)
    .then(json => cleanJson(json, 1));
};
