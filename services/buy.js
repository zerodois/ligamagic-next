import api from './api';

export const createCart = async (cards) => {
  const items = cards.map((card) => ({
    quantity: card.quantity,
    offer: card.offer,
  }));
  const { cart } = await api.post('/buy', items)
  console.log('Cart created:', cart);
};
