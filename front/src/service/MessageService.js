import {postRequest} from './AJAX';
import {server} from './settings';

export const SendService = (message, callback) => {
  const data = {
    text: message,
  };
  const url = server + 'test/';
  postRequest(url, data, callback);
};
