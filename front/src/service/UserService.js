import postRequest from './AJAX';

export const LoginService = (username, password, callback) => {
  const data = {
    username: username,
    password: password,
  };
  const url = 'http://10.0.2.2:8000/login/';
  postRequest(url, data, callback);
};