import loglevel from 'loglevel';

export default class Logger {
  static error(message) {
    loglevel.error(message);
  }

  static info(message) {
    loglevel.info(message);
  }

  static debug(message) {
    loglevel.debug(message);
  }

  static trace(message) {
    loglevel.trace(message);
  }

  static warn(message) {
    loglevel.warn(message);
  }
}
