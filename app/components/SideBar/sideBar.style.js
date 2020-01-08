
export default theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    // position: 'fixed',
    // top: '18em',
    zIndex: 100,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});
