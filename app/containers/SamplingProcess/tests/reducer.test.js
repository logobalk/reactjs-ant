import { fromJS } from 'immutable';
import samplingProcessReducer from '../reducer';

describe('samplingProcessReducer', () => {
  it('returns the initial state', () => {
    expect(samplingProcessReducer(undefined, {})).toEqual(fromJS({}));
  });
});
