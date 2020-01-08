export default class CookieUtil {

  static removeCookie(cname) {
    this.setCookie(cname, null, 0);
  }

  static setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = `expires= ${d.toUTCString()}`;
    if (!cvalue) {
      expires = 'expires=Thu, 01 Jan 1970 00:00:00 UTC';
    }
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }

  static getCookie(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i+=1) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
}