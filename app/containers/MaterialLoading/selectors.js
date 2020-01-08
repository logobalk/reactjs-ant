import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the materialLoading state domain
 */

const selectMaterialLoadingDomain = state =>
  state.get('materialLoading', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MaterialLoading
 */

const makeSelectMaterialLoading = () =>
  createSelector(selectMaterialLoadingDomain, substate => substate.toJS());

export default makeSelectMaterialLoading;
export { selectMaterialLoadingDomain };
