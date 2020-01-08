/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const SSO_IFRAME_URL = 'http://10.1.198.43:8080/iam/siam-session-iframe';
export const SSO_IFRAME_NAME = 'sso-iframe';
export const tokenTimeout = 5000;
export const tokenOrigin = 'http://10.1.198.43:8080';
export const TOKEN = 'TOKEN';
export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const SET_MENU_ACTION = 'SET_MENU_ACTION';
export const SET_AUTH = 'sampling/App/SET_AUTH';
export const SET_CHECK_TOKEN = 'sampling/App/SET_CHECK_TOKEN';
export const LOGOUT = 'sampling/App/LOGOUT';
