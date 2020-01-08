import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the processOrderList state domain
 */

const selectProcessOrderListDomain = state =>
  state.get('processOrderList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ProcessOrderList
 */

const makeSelectProcessOrderList = () =>
  createSelector(selectProcessOrderListDomain, substate => substate.toJS());

export default makeSelectProcessOrderList;
export { selectProcessOrderListDomain };
