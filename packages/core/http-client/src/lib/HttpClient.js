import axios from 'axios';
import get from 'lodash.get';

export default class HttpClient {

  constructor(props) {
    this.props = props;
  }

  call = (method, url, props) => {
    const { baseURL, data, bearer, timeout } = props || {};
    const headers = (props || {}).headers || {};
    if (bearer) {
      headers['Authorization'] = 'Bearer ' + bearer;
    }

    return axios({
      method,
      baseURL,
      url,
      data,
      timeout: timeout || 5000,
      headers,
    }).then( (response)=>response)
      .catch((err) => {
        const message = get(err, 'response.data.message') ||
          get(err, 'response.message') ||
          get(err, 'response.data') ||
          get(err, 'message');
        throw new Error(message);
      });
  };

  post = (url, props) => this.call('POST', url, props);

  get = (url, props) => this.call('GET', url, props);

  delete = (url, props) => this.call('DELETE', url, props);

};
