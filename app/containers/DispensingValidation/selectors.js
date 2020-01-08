import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dispensingValidation state domain
 */

const selectDispensingValidationDomain = state =>
  state.get('dispensingValidation', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DispensingValidation
 */

const makeSelectDispensingValidation = () =>
  createSelector(selectDispensingValidationDomain, substate => substate.toJS());

export default makeSelectDispensingValidation;
export { selectDispensingValidationDomain };
