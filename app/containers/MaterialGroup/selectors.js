import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the materialGroup state domain
 */

const selectMaterialGroupDomain = state =>
  state.get('materialGroup', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MaterialGroup
 */

const makeSelectMaterialGroup = () =>
  createSelector(selectMaterialGroupDomain, substate => substate.toJS());

export default makeSelectMaterialGroup;
export { selectMaterialGroupDomain };
