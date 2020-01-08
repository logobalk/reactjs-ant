import { fromJS } from 'immutable';
import dispensingSummarizeMaterialReducer from '../reducer';

describe('dispensingSummarizeMaterialReducer', () => {
  it('returns the initial state', () => {
    expect(dispensingSummarizeMaterialReducer(undefined, {})).toEqual(fromJS({}));
  });
});
