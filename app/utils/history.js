import createHistory from 'history/createBrowserHistory';
const history = createHistory({
  basename: BASENAME, // eslint-disable-line
});
export default history;
