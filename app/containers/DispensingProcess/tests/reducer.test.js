import { fromJS } from 'immutable';
import dispensingProcessReducer from '../reducer';

describe('dispensingProcessReducer', () => {
  it('returns the initial state', () => {
    expect(dispensingProcessReducer(undefined, {})).toEqual(fromJS({}));
  });
});
