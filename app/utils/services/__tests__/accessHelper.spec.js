import moment from 'moment';
import AccessHelper from '../accessHelper';

const mockStorageKey = '__STORE__';

const tokenData = {
  accessToken: 'AVC13kdAe-723Xea',
  tokenType: 'Bearer',
  expiresIn: moment().add('1d').toDate().getTime() / 1000,
  refreshToken: 'iEoweldad3289kkAc3',
  created: new Date(),
};

const storedKey = 'access-token';
const storedValue = JSON.stringify(tokenData);

beforeEach(() => {
  localStorage.clear();
});

describe('AccessHelper', () => {
  describe('storeAccessToken', () => {
    it('should store accessToken data', () => {
      AccessHelper.storeAccessToken(tokenData);

      expect(localStorage.setItem).toHaveBeenLastCalledWith(storedKey, storedValue);
      expect(localStorage[mockStorageKey][storedKey]).toBe(storedValue);
      expect(Object.keys(localStorage[mockStorageKey]).length).toBe(1);
    });
  });

  describe('clearAccessToken', () => {
    it('should clear accessToken data', () => {
      AccessHelper.storeAccessToken(tokenData);
      expect(localStorage[mockStorageKey][storedKey]).toBe(storedValue);

      AccessHelper.clearAccessToken();
      expect(Object.keys(localStorage[mockStorageKey]).length).toBe(0);
    });
  });

  describe('getAccessToken', () => {
    it('should return null when there is not token stored', () => {
      const data = AccessHelper.getAccessToken();
      expect(data).toBeNull();
    });

    it('should return the accessToken which has been stored', () => {
      AccessHelper.storeAccessToken(tokenData);
      const { accessToken } = AccessHelper.getAccessToken();
      expect(accessToken).toBe(tokenData.accessToken);
    });
  });

  describe('validateAccessToken', () => {
    it('should return falsy value if there is no accessToken stored', () => {
      const result = AccessHelper.validateAccessToken();
      expect(result).toBeFalsy();
    });

    it('should return truthy if there is accessToken', () => {
      AccessHelper.storeAccessToken(tokenData);
      const result = AccessHelper.validateAccessToken();
      expect(result).toBeTruthy();
    });

    it('should return true if todayTimestamp less than expiry', () => {
      const tokenDataCheckExpiry = tokenData;
      tokenDataCheckExpiry.created = new Date();
      AccessHelper.storeAccessToken(tokenDataCheckExpiry);
      const result = AccessHelper.validateAccessToken();
      expect(result).toBeTruthy();
    });

    it('should return false if todayTimestamp more than expiry', () => {
      const tokenDataCheckExpiry = tokenData;
      const today = new Date();
      const twentyFourBack = today.getTime() - ((tokenDataCheckExpiry.expiresIn * 1000) + 1);
      tokenDataCheckExpiry.created = new Date(twentyFourBack);
      AccessHelper.storeAccessToken(tokenDataCheckExpiry);
      const result = AccessHelper.validateAccessToken();
      expect(result).toBeFalsy();
    });
  });
});
