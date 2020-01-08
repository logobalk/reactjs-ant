import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the inspectionList state domain
 */

const selectInspectionListDomain = state =>
  state.get('inspectionList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by InspectionList
 */

const makeSelectInspectionList = () =>
  createSelector(selectInspectionListDomain, substate => substate.toJS());

export default makeSelectInspectionList;
export { selectInspectionListDomain };
