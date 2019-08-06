import 'isomorphic-fetch';
import qs from 'qs';

const API_URL = 'http://localhost:8080';
const request = {};

const isGet = method => /get|head/.test(method);

const getRequestData = (method, data) => {
  if (isGet(method)) {
    return {};
  }
  return { body: JSON.stringify(data) };
};

const factory = (method) => (url, data = {}) => {
  const uri = url;
  const reqData = getRequestData(method, data);
  const dataQs = data.qs || (isGet(method) ? data : {})
  const query = qs.stringify(dataQs);
  const promise = fetch(`${API_URL}${uri}?${query}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
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
