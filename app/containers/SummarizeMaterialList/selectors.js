import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the summarizeMaterialList state domain
 */

const selectSummarizeMaterialListDomain = state =>
  state.get('summarizeMaterialList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SummarizeMaterialList
 */

const makeSelectSummarizeMaterialList = () =>
  createSelector(selectSummarizeMaterialListDomain, substate =>
    substate.toJS(),
  );

export default makeSelectSummarizeMaterialList;
export { selectSummarizeMaterialListDomain };
