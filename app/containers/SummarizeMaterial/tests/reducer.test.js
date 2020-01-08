import { fromJS } from 'immutable';
import summarizeMaterialReducer from '../reducer';

describe('summarizeMaterialReducer', () => {
  it('returns the initial state', () => {
    expect(summarizeMaterialReducer(undefined, {})).toEqual(fromJS({}));
  });
});
