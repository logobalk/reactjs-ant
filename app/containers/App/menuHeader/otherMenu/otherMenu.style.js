export default theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    background: 'none',
    border: 'none',
    borderRadius: 4,
    color:'#fff',
    fontSize: '16px',
    marginRight: '12px',
    cursor: 'pointer',
    '&:hover': {
      background: 'none',
      color:'#fff',
    },
    '&:focus': {
      background: 'none',
      color:'#fff',
    },
  },
  paddingMenu: {
    paddingLeft: '17em',
  },
});
