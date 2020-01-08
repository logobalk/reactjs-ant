
import green from '@material-ui/core/colors/green';

export default theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '90%',
  },
  colorSwitchBase: {
    color: green[300],
    '&$colorChecked': {
      color: green[500],
      '& + $colorBar': {
        backgroundColor: green[500],
      },
    },
  },
  colorBar: {},
  colorChecked: {},
});
