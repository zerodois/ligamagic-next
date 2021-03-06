/**
 * All card status
 */
export const status = [
  { id: 'M', name: 'Mint' },
  { id: 'NM', name: 'Near Mint' },
  { id: 'SP', name: 'Slightly Played' },
  { id: 'MP', name: 'Moderately Playerd' },
  { id: 'HP', name: 'Heavily Played' },
  { id: 'D', name: 'Damaged' },
];

/**
 * @description LigaMagic login page URL
 */
export const LIGA_URL = 'https://www.ligamagic.com.br';

/**
 * @description Create cart URL
 */
export const BUY_URL = `${LIGA_URL}/ajax/cards/compra_lista.php`;

/**
 * Format URL with https://
 * @param {string} url url to be formatted
 * @returns {string}
 */
export const formatUrl = (url) => {
  if (url.charAt(0) === '/') {
    return 'https:' + url;
  }
  return url;
};

/**
 * Build buy url by offer id
 * @param {number} offer offer id of card
 * @returns {string}
 */
export const buyUrl = (offer) => `${LIGA_URLa}/b/?p=e${offer}`;

/**
 * Format number to BRL price
 * @param {number} price
 * @returns {string}
 */
export const formatPrice = (price) => parseFloat(price / 100)
  .toFixed(2)
  .replace('.', ',');

/**
 * Promise wrapper to async/await use
 * @param {<Promise>} promise
 * @returns {<Promise>}
 */
export const to = promise => promise
  .then(data => [null, data])
  .catch(err => [err, null]);

/**
 * Convert JSON to camel case pattern
 * @param {Object} json
 */
export const cleanJson = (json, max = 0, level = 0) => {
  const isMax = (max && max === level);
  if (typeof json !== 'object' || Array.isArray(json) || isMax)
    return json;
  const resp = {};
  for (const index in json) {
    const all = index
      .split(/-/g)
      .map(piece => piece.charAt(0).toUpperCase() + piece.substr(1))
      .join('');
    const plain = all.charAt(0).toLocaleLowerCase() + all.substr(1);
    resp[plain] = cleanJson(json[index], max, level + 1);
  }
  return resp;
};
