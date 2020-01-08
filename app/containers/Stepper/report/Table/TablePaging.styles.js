import green from '@material-ui/core/colors/green';

export default theme => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  tableWrapper: {
    width: '100%',
  },
  table: {
    width: '100%',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  noRecordFound: {
    textAlign: 'center',
  },
  doneAll: {
    backgroundColor: 'green',
  },
  tableHeader: {
    backgroundColor: '#AC1E2E',
    color: theme.palette.common.white,
    fontWeight: 'normal',
    fontSize: 'initial',
  },
  deleteIcon: {
    marginRight: theme.spacing.unit * 6,
  },
  rootCheckBox: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
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
