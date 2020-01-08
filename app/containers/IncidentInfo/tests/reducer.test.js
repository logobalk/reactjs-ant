import { fromJS } from 'immutable';
import incidentInfoReducer from '../reducer';

describe('incidentInfoReducer', () => {
  it('returns the initial state', () => {
    expect(incidentInfoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
