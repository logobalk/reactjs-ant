import { fromJS } from 'immutable';
import materialGroupListReducer from '../reducer';

describe('materialGroupListReducer', () => {
  it('returns the initial state', () => {
    expect(materialGroupListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
