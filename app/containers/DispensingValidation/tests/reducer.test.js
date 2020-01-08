import { fromJS } from 'immutable';
import dispensingValidationReducer from '../reducer';

describe('dispensingValidationReducer', () => {
  it('returns the initial state', () => {
    expect(dispensingValidationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
