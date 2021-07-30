import postRequest from './AJAX';

export const SendService = (message, callback) => {
  const data = {
    text: message,
  };
  const url = 'http://10.0.2.2:8000/test/';
  postRequest(url, data, callback);
};
