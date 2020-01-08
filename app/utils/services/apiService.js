export default class ApiService {
  static headers = {
    'Content-Type': 'application/json',
    // Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJleHAiOjE1NDY0OTI3NzcsImlhdCI6MTU0NjQ4OTE3NywiY2xpZW50X2lkIjoxOSwiZW1haWwiOiJhZG1pbkBob3RtYWlsLmNvbSIsImF1dGhvcml0aWVzIjpbImFkbWluIl0sInVzZXJuYW1lIjoiYWRtaW4ifQ.zahteN_C50ULVRC5-BFT8by9hmw4Wj5oj-vZj6Xr_EyLjF9kHJAH3_112XyeYy1L6eGAYeyO4o3rijopiCJNdQ',
  };

  static errorDispatcher = () => { };

  static getApiUrl() {
    const apiUrl = process.env.REACT_APP_API_URL || process.env.REACT_APP_DEV_API_URL;
    return apiUrl;
  }

  static registerErrorDispatcher(errorDispatcher) {
    ApiService.errorDispatcher = errorDispatcher;
  }

  static get(url, queryParams = null, options = null) {
    const queryString = (queryParams
      && `?${
        Object.keys(queryParams).reduce(
          (array, key) => [...array, `${key}=${queryParams[key]}`],
          [],
        ).join('&')
      }`) || '';
    return ApiService.performs(`${url}${queryString}`, 'GET', null, options);
  }

  static post(url, data, options = null) {
    return ApiService.performs(url, 'POST', data, options);
  }

  static put(url, data, options = null) {
    return ApiService.performs(url, 'PUT', data, options);
  }

  static patch(url, data, options = null) {
    return ApiService.performs(url, 'PATCH', data, options);
  }

  static delete(url, data, options = null) {
    return ApiService.performs(url, 'DELETE', data, options);
  }

  static async performs(url, method, body = null, options = null) {
    /* eslint-disable */
    if (BASENAME !== '/') {
      url = `${BASENAME}${url}`
    }
    /* eslint-enable */

    const requestHeaders = { ...ApiService.headers };

    // Override headers if specified in options.
    if (options && options.headers) {
      Object.assign(requestHeaders, options.headers);
    }

    const params = {
      method,
      headers: requestHeaders,
    };

    if (body) {
      let requestBody = body;
      if (requestHeaders['Content-Type'] === 'application/json') {
        requestBody = JSON.stringify(requestBody);
      }
      params.body = requestBody;
    }

    try {
      const response = await fetch(url, params);
      if (!response.ok) {
        throw response;
      }

      ApiService.errorDispatcher(null);
      const text = await response.text();
      if (!text) {
        return null;
      }
      return JSON.parse(text);
    } catch (error) {
      const refinedError = {
        status: error.status || 0,
        statusText: error.statusText || error.message,
        original: error,
      };

      ApiService.errorDispatcher(refinedError);
      throw refinedError;
    }
  }
}
