import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the summarizeMaterial state domain
 */

const selectSummarizeMaterialDomain = state =>
  state.get('summarizeMaterial', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SummarizeMaterial
 */

const makeSelectSummarizeMaterial = () =>
  createSelector(selectSummarizeMaterialDomain, substate => substate.toJS());

export default makeSelectSummarizeMaterial;
export { selectSummarizeMaterialDomain };
