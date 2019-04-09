import api from './api';
import { cleanJson } from '../utils';

export const best = async (form) => {
  const lines = form.list
    .trim('')
    .split('\n');
  const options = {
    'free-shipping': form.free.split(';'),
    'excludes': form.ban.split(';')
  };
  const error = lines.some(line => !/^\d{1,2}\s.+$/.test(line));
  if (error) {
    throw new Error('Formato inválido');
  }
  const cards = lines.map((line) => {
    const [, number, name] = /^(\d{1,2})\s(.+)$/.exec(line);
    return { quantity: Number(number), name };
  });
  return api.post('/best', { cards, options })
    .then(json => cleanJson(json, 1));
};
