import 'isomorphic-fetch';
const API_URL = 'https://ligamagic-api.now.sh'; // 'http://localhost:3000';
const request = {};

const getRequestData = (method, data) => {
  if (/get|head/.test(method)) {
    return { qs: data };
  }
  return { body: JSON.stringify(data) };
};

const factory = (method) => (url, data) => {
  const uri = url.charAt(0) === '/'
    ? url
    : `/${url}`;
  const reqData = getRequestData(method, data);
  const promise = fetch(`${API_URL}${uri}`, {
    method,
    ...reqData,
  });
  return promise
    .then(async response => {
      if (response.status >= 400) {
        throw new Error(await response.text());
      }
      return response.json()
    })
};

['get', 'post', 'put', 'del'].forEach((method) => {
  request[method] = factory(method);
});

export default Object.freeze(request);
