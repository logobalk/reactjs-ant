import { fromJS } from 'immutable';
import weighingModalExampleReducer from '../reducer';

describe('weighingModalExampleReducer', () => {
  it('returns the initial state', () => {
    expect(weighingModalExampleReducer(undefined, {})).toEqual(fromJS({}));
  });
});
