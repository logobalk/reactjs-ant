import green from '@material-ui/core/colors/green';
// import dimensions from '../../theme/dimensions';

export default theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: theme.palette.background.paper,
  },
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  cssOutlinedInput: {
    padding: '10px',
  },
  rootPaper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit * 0,
    width: '100%',
  },
  fontSize: {
    fontSize: '0.9em',
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  radio: {
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
  rootImage: {
    paddingTop: theme.spacing.unit * 4,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
    '&$active': {
      backgroundColor: 'pink',
    },
  },
  img: {
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
});
