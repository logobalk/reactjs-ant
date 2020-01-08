import { fromJS } from 'immutable';
import inspectionListReducer from '../reducer';

describe('inspectionListReducer', () => {
  it('returns the initial state', () => {
    expect(inspectionListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
