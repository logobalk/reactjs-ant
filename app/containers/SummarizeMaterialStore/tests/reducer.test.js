import { fromJS } from 'immutable';
import summarizeMaterialStoreReducer from '../reducer';

describe('summarizeMaterialStoreReducer', () => {
  it('returns the initial state', () => {
    expect(summarizeMaterialStoreReducer(undefined, {})).toEqual(fromJS({}));
  });
});
