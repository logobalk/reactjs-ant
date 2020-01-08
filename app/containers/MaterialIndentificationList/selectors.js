import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the materialIndentificationList state domain
 */

const selectMaterialIndentificationListDomain = state =>
  state.get('materialIndentificationList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MaterialIndentificationList
 */

const makeSelectMaterialIndentificationList = () =>
  createSelector(selectMaterialIndentificationListDomain, substate =>
    substate.toJS(),
  );

export default makeSelectMaterialIndentificationList;
export { selectMaterialIndentificationListDomain };
