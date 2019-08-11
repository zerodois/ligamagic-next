import api from './api';

/**
 * 
 * @param {string[]} options 
 * @param {string} store 
 * @returns {bool}
 */
const hasFreeShipping = (options, store) => options.some(option => (
  new RegExp(option, 'i').test(store)
));

/**
 * Calculate best buy
 * @param {object[]} cards 
 * @param {object} options 
 */
export const calculate = async ({ cards: cardsFound, options: userOptions }) => {
  const free = {};

  cardsFound.forEach(({ stores }) => stores.forEach(store => {
    if (free[store.name]) return;
    const nameTest = hasFreeShipping(userOptions.free_shipping, store.name);
    if (nameTest) {
      free[store.name] = true;
    }
  }));

  const cards = cardsFound.map(card => ({
    stores: card.stores.map(store => ({
      name: store.name,
      offer: store.offer,
      price: store.price,
    })),
  }));

  const options = {
    free_shipping: free,
  };

  const { best, offers } = await api.post('/best/calculate', { cards, options });

  const stores = {};
  cardsFound.forEach((item, index) => {
    const offer = item.stores.find(store => store.offer === offers[index].offer);
    const store = stores[offer.name] || { cards: [] };
    if (!store.store) {
      store.store = { name: offer.name, image: offer.image };
    }
    const dataItem = { ...offer, ...cardsFound[index].card };
    store.cards.push(dataItem);
    stores[offer.name] = store;
  });

  return { best, stores: Object.values(stores) };
};
