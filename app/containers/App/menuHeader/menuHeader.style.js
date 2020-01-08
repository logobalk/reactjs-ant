const drawerWidth = 256;

export default theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#989292',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    backgroundColor: '#E9E9E9',
    height: '100vh',
    overflow: 'auto',
  },
  appBarSpacer: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    color:'#fff',
    fontSize: '16px',
    marginRight: '25px',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },

  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  paddingMenu: {
    paddingLeft: '17em',
  },
});
