
import { SSO_IFRAME_NAME } from 'containers/App/constants';

export default class TokenChecker {

  static getToken(origin) {
    try {
      const iframe = document.getElementById(SSO_IFRAME_NAME);
      const windowIframe = iframe.contentWindow;
      windowIframe.postMessage({ action: 'get' }, origin);
    } catch (err) {
      throw new Error();
    }
  }

  static setToken(origin, token) {
    try {
      const iframe = document.getElementById('sso-iframe');
      const windowIframe = iframe.contentWindow;
      windowIframe.postMessage({ action: 'set', token }, origin);
    } catch (err) {
      throw new Error();
    }
  }
}
