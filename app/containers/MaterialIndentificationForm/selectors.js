import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the materialIndentificationForm state domain
 */

const selectMaterialIndentificationFormDomain = state =>
  state.get('materialIndentificationForm', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MaterialIndentificationForm
 */

const makeSelectMaterialIndentificationForm = () =>
  createSelector(selectMaterialIndentificationFormDomain, substate =>
    substate.toJS(),
  );

export default makeSelectMaterialIndentificationForm;
export { selectMaterialIndentificationFormDomain };
