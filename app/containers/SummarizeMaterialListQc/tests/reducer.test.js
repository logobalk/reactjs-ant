import { fromJS } from 'immutable';
import summarizeMaterialListQcReducer from '../reducer';

describe('summarizeMaterialListQcReducer', () => {
  it('returns the initial state', () => {
    expect(summarizeMaterialListQcReducer(undefined, {})).toEqual(fromJS({}));
  });
});
