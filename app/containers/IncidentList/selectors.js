import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the incidentList state domain
 */

const selectIncidentListDomain = state =>
  state.get('incidentList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by IncidentList
 */

const makeSelectIncidentList = () =>
  createSelector(selectIncidentListDomain, substate => substate.toJS());

export default makeSelectIncidentList;
export { selectIncidentListDomain };
