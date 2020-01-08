import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the weighingModalExample state domain
 */

const selectWeighingModalExampleDomain = state =>
  state.get('weighingModalExample', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by WeighingModalExample
 */

const makeSelectWeighingModalExample = () =>
  createSelector(selectWeighingModalExampleDomain, substate => substate.toJS());

export default makeSelectWeighingModalExample;
export { selectWeighingModalExampleDomain };
