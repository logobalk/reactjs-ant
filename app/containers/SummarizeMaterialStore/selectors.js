import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the summarizeMaterialStore state domain
 */

const selectSummarizeMaterialStoreDomain = state =>
  state.get('summarizeMaterialStore', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SummarizeMaterialStore
 */

const makeSelectSummarizeMaterialStore = () =>
  createSelector(selectSummarizeMaterialStoreDomain, substate =>
    substate.toJS(),
  );

export default makeSelectSummarizeMaterialStore;
export { selectSummarizeMaterialStoreDomain };
