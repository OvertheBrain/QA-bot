import {postRequest} from './AJAX';
import {server} from './settings';

export const LoginService = (username, password, callback) => {
  const data = {
    username: username,
    password: password,
  };
  const url = server + 'login/';
  postRequest(url, data, callback);
};
export const GetUser = (username, callback) => {
  const data = {
    username: username,
  };
  const url = server + 'getuser/';
  postRequest(url, data, callback);
};
export const RegisterService = (username, password, usertype, callback) => {
  const data = {
    username: username,
    password: password,
    usertype: usertype,
  };
  const url = server + 'register/';
  postRequest(url, data, callback);
};
