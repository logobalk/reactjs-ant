import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the samplingProcess state domain
 */

const selectSamplingProcessDomain = state =>
  state.get('samplingProcess', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SamplingProcess
 */

const makeSelectSamplingProcess = () =>
  createSelector(selectSamplingProcessDomain, substate => substate.toJS());

export default makeSelectSamplingProcess;
export { selectSamplingProcessDomain };
