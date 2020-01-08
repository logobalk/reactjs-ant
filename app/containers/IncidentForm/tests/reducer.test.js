import { fromJS } from 'immutable';
import incidentFormReducer from '../reducer';

describe('incidentFormReducer', () => {
  it('returns the initial state', () => {
    expect(incidentFormReducer(undefined, {})).toEqual(fromJS({}));
  });
});
