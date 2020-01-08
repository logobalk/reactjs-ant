import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dispensingSummarizeMaterial state domain
 */

const selectDispensingSummarizeMaterialDomain = state =>
  state.get('dispensingSummarizeMaterial', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DispensingSummarizeMaterial
 */

const makeSelectDispensingSummarizeMaterial = () =>
  createSelector(selectDispensingSummarizeMaterialDomain, substate =>
    substate.toJS(),
  );

export default makeSelectDispensingSummarizeMaterial;
export { selectDispensingSummarizeMaterialDomain };
