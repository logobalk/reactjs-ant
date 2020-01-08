import ApiService from '../apiService';

describe('apiService', () => {
  it('should throw refined exception on unreachable', async () => {
    try {
      const url = new URL('http://localhost:0000/unreachable');
      await ApiService.performs(url, 'GET');
    } catch (e) {
      expect(e).toMatchObject({
        status: 0,
      });
    }
  });
});
