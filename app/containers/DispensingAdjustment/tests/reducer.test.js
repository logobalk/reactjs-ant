import { fromJS } from 'immutable';
import dispensingAdjustmentReducer from '../reducer';

describe('dispensingAdjustmentReducer', () => {
  it('returns the initial state', () => {
    expect(dispensingAdjustmentReducer(undefined, {})).toEqual(fromJS({}));
  });
});
