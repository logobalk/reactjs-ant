import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the materialIdentityLabel state domain
 */

const selectMaterialIdentityLabelDomain = state =>
  state.get('materialIdentityLabel', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MaterialIdentityLabel
 */

const makeSelectMaterialIdentityLabel = () =>
  createSelector(selectMaterialIdentityLabelDomain, substate =>
    substate.toJS(),
  );

export default makeSelectMaterialIdentityLabel;
export { selectMaterialIdentityLabelDomain };
