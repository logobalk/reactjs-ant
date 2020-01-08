import { fromJS } from 'immutable';
import dispensingMaterialGroupListReducer from '../reducer';

describe('dispensingMaterialGroupListReducer', () => {
  it('returns the initial state', () => {
    expect(dispensingMaterialGroupListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
