import { fromJS } from 'immutable';
import inspectionReportReducer from '../reducer';

describe('inspectionReportReducer', () => {
  it('returns the initial state', () => {
    expect(inspectionReportReducer(undefined, {})).toEqual(fromJS({}));
  });
});
