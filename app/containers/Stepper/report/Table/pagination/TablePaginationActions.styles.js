import { dimensions } from '../../../../../utils/theme';

export default theme => ({
  root: {
    flexGrow: 1,
    height: `${dimensions(theme).sideBar.tabs.height}px`,
    width: '100%',
  },
});
