import { fromJS } from 'immutable';
import dispensingMaterialGroupReducer from '../reducer';

describe('dispensingMaterialGroupReducer', () => {
  it('returns the initial state', () => {
    expect(dispensingMaterialGroupReducer(undefined, {})).toEqual(fromJS({}));
  });
});
