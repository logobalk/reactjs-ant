import querystring from 'query-string';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export default class RouteHelper {
  /**
   * Get the "exact match" history path checker function.
   * @param {*} path - path to check.
   */
  static getExactMatchChecker(path) {
    return () => history.location.pathname === path;
  }

  /**
   * Get the "starts with" history path checker function.
   * @param {*} path - path to check.
   */
  static getStartsWithChecker(path) {
    return () => history.location.pathname.startsWith(path);
  }

  /**
   * Create querystring with previous url.
   */
  static createPrevLink() {
    return `?prev=${encodeURIComponent(history.location.pathname)}${encodeURIComponent(history.location.search)}`;
  }

  /**
   * Parse querystring to get previous url.
   */
  static getPrevQuery() {
    const searchParams = querystring.parse(history.location.search);
    return searchParams['?prev'] ? decodeURIComponent(searchParams['?prev']) : '';
  }
}
