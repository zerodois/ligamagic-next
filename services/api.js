import 'isomorphic-fetch';
const { API_URL } = process.env;
const request = {};

const getRequestData = (method, data) => {
  if (/get|head/.test(method)) {
    return { qs: data };
  }
  return { body: JSON.stringify(data) };
};

const factory = (method) => (url, data) => {
  const uri = url;
  const reqData = getRequestData(method, data);
  const promise = fetch(`${API_URL}${uri}`, {
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
