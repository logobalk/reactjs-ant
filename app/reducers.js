/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import history from 'utils/history';
import { globalReducer } from 'containers/App';
import { navigationReducer } from 'containers/Navigator';
import { tableReducer } from 'containers/Table';
// import { mainPagerReducer } from 'containers/HomePage/InspectionList';
import languageProviderReducer from 'containers/LanguageProvider/reducer';
import { stepperReducer } from 'containers/Stepper';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    language: languageProviderReducer,
    ...injectedReducers,
    global: globalReducer,
    // main: mainPagerReducer,
    navigationItems: navigationReducer,
    table: tableReducer,
    stepperEnviroiment: stepperReducer,
  });
  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
