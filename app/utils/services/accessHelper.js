export default class AccessHelper {
  static storeAccessToken({
    accessToken,
    tokenType,
    expiresIn,
    refreshToken,
    created,
  }) {
    localStorage.setItem('access-token', JSON.stringify({
      accessToken,
      tokenType,
      expiresIn,
      refreshToken,
      created,
    }));
  }

  static clearAccessToken() {
    localStorage.removeItem('access-token');
  }

  static getAccessToken() {
    const storedToken = localStorage.getItem('access-token');
    if (!storedToken) {
      return null;
    }
    return JSON.parse(storedToken);
  }

  static validateAccessToken() {
    const accessToken = AccessHelper.getAccessToken();
    if (!accessToken) {
      return false;
    }

    const todayTimestamp = new Date().getTime();
    const expiry = new Date(accessToken.created);
    if (todayTimestamp > expiry.getTime() + accessToken.expiresIn * 1000) {
      return false;
    }

    return true;
  }
}
