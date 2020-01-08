import { fromJS } from 'immutable';
import materialIndentificationFormReducer from '../reducer';

describe('materialIndentificationFormReducer', () => {
  it('returns the initial state', () => {
    expect(materialIndentificationFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
