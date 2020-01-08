import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the materialGroupList state domain
 */

const selectMaterialGroupListDomain = state =>
  state.get('materialGroupList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MaterialGroupList
 */

const makeSelectMaterialGroupList = () =>
  createSelector(selectMaterialGroupListDomain, substate => substate.toJS());

export default makeSelectMaterialGroupList;
export { selectMaterialGroupListDomain };
