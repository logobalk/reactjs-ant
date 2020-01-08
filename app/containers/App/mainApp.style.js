const drawerWidth = 256;

export default theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'gray',
  },
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing.unit * 7,
    marginRight: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 4,
    height: '100%',
    // overflow: 'auto',
  },
  // appBarSpacer: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
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
    marginLeft: theme.spacing.unit * 30,
  },
  trigger: {
    fontSize: '18px',
    lineHeight: '64px',
    padding: '0 24px',
    cursor: 'pointer',
    transition: 'color .3s',
    color: '#fff',
    '&:hover': {
      color: '#001529',
    },
  },
});
