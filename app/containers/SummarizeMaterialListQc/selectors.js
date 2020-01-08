import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the summarizeMaterialListQc state domain
 */

const selectSummarizeMaterialListQcDomain = state =>
  state.get('summarizeMaterialListQc', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SummarizeMaterialListQc
 */

const makeSelectSummarizeMaterialListQc = () =>
  createSelector(selectSummarizeMaterialListQcDomain, substate =>
    substate.toJS(),
  );

export default makeSelectSummarizeMaterialListQc;
export { selectSummarizeMaterialListQcDomain };
