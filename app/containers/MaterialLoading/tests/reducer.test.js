import { fromJS } from 'immutable';
import materialLoadingReducer from '../reducer';

describe('materialLoadingReducer', () => {
  it('returns the initial state', () => {
    expect(materialLoadingReducer(undefined, {})).toEqual(fromJS({}));
  });
});
