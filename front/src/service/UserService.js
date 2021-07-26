export const SendService = (message, callback) => {
  const data = {
    'text': message,
  };

  fetch('http://10.0.2.2:8000/test/', {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      // console.log(data);
      callback(data);
    })
    .catch(error => {
      console.log(error);
    });
};
