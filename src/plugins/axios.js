import Vue from 'vue';
import Axios from 'axios';
import Snackbar from '../components/snackbar/index';

Vue.prototype.$http = Axios;

const service = Vue.prototype.$http.create({
  headers: {
    'content-type': Vue.prototype.contentType || 'application/json;charset=utf-8',
  },
});

service.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');

  if (token) {
    request.headers.Authorization = `${Vue.prototype.authType || 'Bearer'} ${token}`;
  }

  return request;
});

service.interceptors.response.use(response => response, (error) => {
  return Promise.reject(error.status ? error : error.response);
});

function access(url, param, method) {
  param = param || {};
  // if (window.location.search.indexOf('debug') > -1) {
  //   param.debug = true;
  // }

  let ret = null;
  const upperMethod = method.toUpperCase();

  const __randNum = Math.random();

  if (upperMethod === 'POST') {
    ret = service.post(url, param, {
      params: {
        __randNum
      }
    });
  } else if (upperMethod === 'PUT') {
    ret = service.put(url, param, {
      params: {
        __randNum
      }
    });
  } else if (upperMethod === 'DELETE') {
    ret = service.delete(url, {
      params: {
        ...param,
        __randNum
      }
    });
  } else {
    ret = service.get(url, {
      params: {
        ...param,
        __randNum
      }
    });
  }

  return ret.then((res) => {
    // Note:
    // When successful, the body data is returned;
    // when it fails, it returns res,
    // in order to ensure the same as the return value of the http request error.
    if (res.data.ok) {
      return res.data;
    }

    return Promise.reject(res);
  }, (res) => {
    // FIXME: This is not the best method.
    let errMsg = '';

    if (res.status === 401) {
      errMsg = res.status + ': 无权访问';
    } else if (res.status === 403) {
      errMsg = res.status + ': 禁止访问';
    } else if (res.status === 404) {
      errMsg = res.status + ': 画面未找到';
    } else if (res.status === 500) {
      errMsg = res.status + ': 服务器异常';
    }

    if (errMsg) {
      Snackbar.error(errMsg);
    }

    // Throw it again so you can handle it later.
    return Promise.reject(res);
  });
}

export default {
  get(url, param) {
    return access(url, param, 'get');
  },
  delete(url, param) {
    return access(url, param, 'delete');
  },
  post(url, param) {
    return access(url, param, 'post');
  },
  put(url, param) {
    return access(url, param, 'put');
  },
};