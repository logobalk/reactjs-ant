import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dispensingMaterialGroupList state domain
 */

const selectDispensingMaterialGroupListDomain = state =>
  state.get('dispensingMaterialGroupList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DispensingMaterialGroupList
 */

const makeSelectDispensingMaterialGroupList = () =>
  createSelector(selectDispensingMaterialGroupListDomain, substate =>
    substate.toJS(),
  );

export default makeSelectDispensingMaterialGroupList;
export { selectDispensingMaterialGroupListDomain };
