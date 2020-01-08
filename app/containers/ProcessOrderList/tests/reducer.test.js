import { fromJS } from 'immutable';
import processOrderListReducer from '../reducer';

describe('processOrderListReducer', () => {
  it('returns the initial state', () => {
    expect(processOrderListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
