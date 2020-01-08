import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the summarizeMaterialListStore state domain
 */

const selectSummarizeMaterialListStoreDomain = state =>
  state.get('summarizeMaterialListStore', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SummarizeMaterialListStore
 */

const makeSelectSummarizeMaterialListStore = () =>
  createSelector(selectSummarizeMaterialListStoreDomain, substate =>
    substate.toJS(),
  );

export default makeSelectSummarizeMaterialListStore;
export { selectSummarizeMaterialListStoreDomain };
