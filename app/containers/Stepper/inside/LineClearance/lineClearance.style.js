
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
  rootCheckBox: {
    paddingLeft: theme.spacing.unit * 5,
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  chip: {
    margin: theme.spacing.unit,
  },
});
