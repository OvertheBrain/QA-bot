import {postRequest} from './AJAX';

export const LoginService = (username, password, callback) => {
  const data = {
    username: username,
    password: password,
  };
  const url = 'http://10.0.2.2:8000/login/';
  postRequest(url, data, callback);
};
export const GetUser = (username, callback) => {
  const data = {
    username: username,
  };
  const url = 'http://10.0.2.2:8000/getuser/';
  postRequest(url, data, callback);
};
export const RegisterService = (username, password, usertype, callback) => {
  const data = {
    username: username,
    password: password,
    usertype: usertype,
  };
  const url = 'http://10.0.2.2:8000/register/';
  postRequest(url, data, callback);
};
