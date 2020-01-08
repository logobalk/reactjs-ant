import deepPurple from '@material-ui/core/colors/deepPurple';
import dimensions from '../../utils/theme/dimensions';

export default theme => ({
  orangeAvatar: {
    width: '2em',
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  drawerDocked: {
    position: 'sticky',
    top: 0,
  },
  drawerPaper: {
    position: 'fixed',
    paddingTop: '4em',
    whiteSpace: 'nowrap',
    width: dimensions(theme).mainMenu.drawer.width * 1.2,
    height: dimensions(theme).mainMenu.drawer.height,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 0,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: theme.mixins.toolbar,
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    // boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: 10,
    paddingBottom: 10,
  },
  firebase: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white,
  },
  itemActionable: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemActiveItem: {
    color: 'black',
    // backgroundColor: 'darkgray',
  },
  itemPrimary: {
    color: 'gray',
    fontSize: theme.typography.fontSize,
    fontFamily: theme.typography.fontFamily,
    '&$textDense': {
      fontSize: theme.typography.fontSize,
      fontFamily: theme.typography.fontFamily,
    },
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2,
  },
  leftSpace: {
    padding: '.5em',
    paddingLeft: '5em',
  },
  logo: {
    height: '64px',
    position: 'relative',
    lineHeight: '64px',
    padding: '0px 5px 5px 16px',
    transition: 'all .3s',
    background: '#989292',
    // box-shadow: 1px 1px 0 0 #e8e8e8;
    // div {
    //   height: 32px;
    //   background: #f1f1f1;
    // }
  },
  span: {
    marginLeft: '14px',
    color: '#fff',
    display: 'inline-block',
    fontSize: '15px',
    fontWeight: '600',
    lineHeight: '63px',
  },
});
