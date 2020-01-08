import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the inspectionReport state domain
 */

const selectInspectionReportDomain = state =>
  state.get('inspectionReport', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by InspectionReport
 */

const makeSelectInspectionReport = () =>
  createSelector(selectInspectionReportDomain, substate => substate.toJS());

export default makeSelectInspectionReport;
export { selectInspectionReportDomain };
