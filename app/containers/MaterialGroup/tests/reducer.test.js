import { fromJS } from 'immutable';
import materialGroupReducer from '../reducer';

describe('materialGroupReducer', () => {
  it('returns the initial state', () => {
    expect(materialGroupReducer(undefined, {})).toEqual(fromJS({}));
  });
});
