import {postRequest} from './AJAX';
import {server} from './settings';

export const SendService = (message, callback) => {
  const data = {
    username: 'testu',
    msg: message,
  };
  const url = server + 'sendMsgByApp/';
  postRequest(url, data, callback);
};
