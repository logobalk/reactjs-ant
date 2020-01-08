import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the incidentInfo state domain
 */

const selectIncidentInfoDomain = state =>
  state.get('incidentInfo', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by IncidentInfo
 */

const makeSelectIncidentInfo = () =>
  createSelector(selectIncidentInfoDomain, substate => substate.toJS());

export default makeSelectIncidentInfo;
export { selectIncidentInfoDomain };
