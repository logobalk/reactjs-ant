import { fromJS } from 'immutable';
import materialIdentityLabelReducer from '../reducer';

describe('materialIdentityLabelReducer', () => {
  it('returns the initial state', () => {
    expect(materialIdentityLabelReducer(undefined, {})).toEqual(fromJS({}));
  });
});
