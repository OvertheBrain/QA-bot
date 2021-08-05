import {postRequest} from './AJAX';
import {server} from './settings';

export const addOrder = (data, callback) => {
  const url = server + 'addOrder/';
  postRequest(url, data, callback);
};

export const getApiStoreList = (data, callback) => {
  const url = server + 'getApiStoreList/';
  postRequest(url, data, callback);
};
export const getApiOrderList = (data, callback) => {
  const url = server + 'getApiOrderList/';
  postRequest(url, data, callback);
};

export const getOrder = (OrderID, callback) => {
  const data = {
    orderid: OrderID,
  };
  const url = server + 'getOrder/';
  postRequest(url, data, callback);
};
