import {postRequest} from './AJAX';
import {server} from './settings';

export const addOrder = (data, callback) => {
  const url = server + 'addOrder/';
  postRequest(url, data, callback);
};
