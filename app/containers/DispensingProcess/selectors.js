import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dispensingProcess state domain
 */

const selectDispensingProcessDomain = state =>
  state.get('dispensingProcess', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DispensingProcess
 */

const makeSelectDispensingProcess = () =>
  createSelector(selectDispensingProcessDomain, substate => substate.toJS());

export default makeSelectDispensingProcess;
export { selectDispensingProcessDomain };
