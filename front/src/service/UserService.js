export const SendService = (message, callback) => {
  const data = {
    'text': message,
  };
  const url = 'http://10.0.2.2:8000/test/';
  postRequest(url, data, callback);
};

let postRequest = (url, json, callback) => {
  let opts = {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(json),
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      callback(data);
    })
    .catch(error => {
      console.log(error);
    });
};
