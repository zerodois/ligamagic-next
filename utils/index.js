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
