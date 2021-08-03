import {postRequest} from './AJAX';

export const addOrder = (data, callback) => {
  const url = 'http://10.0.2.2:8000/addOrder/';
  postRequest(url, data, callback);
};
