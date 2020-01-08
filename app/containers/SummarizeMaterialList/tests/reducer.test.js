import { fromJS } from 'immutable';
import summarizeMaterialListReducer from '../reducer';

describe('summarizeMaterialListReducer', () => {
  it('returns the initial state', () => {
    expect(summarizeMaterialListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
