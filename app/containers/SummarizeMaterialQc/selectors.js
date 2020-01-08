import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the summarizeMaterialQc state domain
 */

const selectSummarizeMaterialQcDomain = state =>
  state.get('summarizeMaterialQc', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SummarizeMaterialQc
 */

const makeSelectSummarizeMaterialQc = () =>
  createSelector(selectSummarizeMaterialQcDomain, substate => substate.toJS());

export default makeSelectSummarizeMaterialQc;
export { selectSummarizeMaterialQcDomain };
