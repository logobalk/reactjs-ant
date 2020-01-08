import { fromJS } from 'immutable';
import summarizeMaterialQcReducer from '../reducer';

describe('summarizeMaterialQcReducer', () => {
  it('returns the initial state', () => {
    expect(summarizeMaterialQcReducer(undefined, {})).toEqual(fromJS({}));
  });
});
