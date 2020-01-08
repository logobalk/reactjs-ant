import { fromJS } from 'immutable';
import materialIndentificationListReducer from '../reducer';

describe('materialIndentificationListReducer', () => {
  it('returns the initial state', () => {
    expect(materialIndentificationListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
