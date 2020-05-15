import HttpClient from '@sgabskit/http-client';
import get from "lodash.get"
import Client from "@bankup/node-client";

export const http = new HttpClient();

export class Service {

  constructor(baseURL, session) {
    const token = get(session, 'user.data.access_token');
    this._get = (url, props) => http.get(url, {...props, bearer: token, baseURL});
    this._post = (url, props) => http.post(url, {...props, bearer: token, baseURL});
    this._delete = (url, props) => http.delete(url, {...props, bearer: token, baseURL});
  }
}


export const client = new Client({
  urls: {
    passport: '',
    wallet: '',
    accounts: '',
    content: '',
    branches: '',
    exchange_rates: ''
  }
});

