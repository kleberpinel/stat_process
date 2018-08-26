import axios   from 'axios';

export default {
  setupInterceptors: (store) => {

    axios.interceptors.request.use(function (config) {

      // *******
      // This configs could be used for authenticated applications.
      // It would send the token as a header in every single request
      // *******
      // const cookies = new Cookies();
      // const opt = { path: "/" }
      // config.headers['access-token'] = cookies.get('access-token', opt);
      // config.headers['client'] = cookies.get('client', opt);
      // config.headers['uid'] = cookies.get('uid', opt);

      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      if ( error.response.status === 401) {

        // *******
        // Here is the call to remove the token and session from the browser
        // in case token is invalid / expired
        // *******
        // store.dispatch(logout());
      }
      return Promise.reject(error);
    });

  }
};