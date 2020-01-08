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
  noRecordFound: {
    textAlign: 'center',
  },
  doneAll: {
    backgroundColor: 'green',
  },
  tableHeader: {
    backgroundColor: 'ghostwhite',
    color: theme.palette.common.black,
    fontWeight: 'normal',
    fontSize: 'initial',
  },
  deleteIcon: {
    marginRight: theme.spacing.unit * 6,
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: `${theme.palette.grey[300]}!important`,
      cursor: 'pointer',
    },
  },
});
