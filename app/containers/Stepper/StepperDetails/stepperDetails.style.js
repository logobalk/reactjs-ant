
export default theme => ({
  root: {
    width: '90%',
  },
  paperRoot: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    // backgroundColor:'#F3D7E0',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    backgroundColor: '#AC1F2D',
    float:'right',
    color: 'white',
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});
