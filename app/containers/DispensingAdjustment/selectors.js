import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dispensingAdjustment state domain
 */

const selectDispensingAdjustmentDomain = state =>
  state.get('dispensingAdjustment', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DispensingAdjustment
 */

const makeSelectDispensingAdjustment = () =>
  createSelector(selectDispensingAdjustmentDomain, substate => substate.toJS());

export default makeSelectDispensingAdjustment;
export { selectDispensingAdjustmentDomain };
