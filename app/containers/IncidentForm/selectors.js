import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the incidentForm state domain
 */

const selectIncidentFormDomain = state =>
  state.get('incidentForm', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by IncidentForm
 */

const makeSelectIncidentForm = () =>
  createSelector(selectIncidentFormDomain, substate => substate.toJS());

export default makeSelectIncidentForm;
export { selectIncidentFormDomain };
