import { fromJS } from 'immutable';
import summarizeMaterialListStoreReducer from '../reducer';

describe('summarizeMaterialListStoreReducer', () => {
  it('returns the initial state', () => {
    expect(summarizeMaterialListStoreReducer(undefined, {})).toEqual(fromJS({}));
  });
});
