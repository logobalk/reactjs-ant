import { fromJS } from 'immutable';
import incidentListReducer from '../reducer';

describe('incidentListReducer', () => {
  it('returns the initial state', () => {
    expect(incidentListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
