import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dispensingMaterialGroup state domain
 */

const selectDispensingMaterialGroupDomain = state =>
  state.get('dispensingMaterialGroup', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DispensingMaterialGroup
 */

const makeSelectDispensingMaterialGroup = () =>
  createSelector(selectDispensingMaterialGroupDomain, substate =>
    substate.toJS(),
  );

export default makeSelectDispensingMaterialGroup;
export { selectDispensingMaterialGroupDomain };
