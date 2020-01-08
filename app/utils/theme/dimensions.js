export default theme => ({
  appBar: {
    height: theme.spacing.unit * 6,
  },
  map: {
    infoBar: {
      width: theme.spacing.unit * 40,
    },
  },
  mainMenu: {
    drawer: {
      width: theme.spacing.unit * 30,
      height: '100vh',
    },
    icon: {
      width: theme.spacing.unit * 3,
      height: theme.spacing.unit * 3,
    },
  },
  sideBar: {
    tabs: {
      height: theme.spacing.unit * 6,
    },
    minWidth: theme.spacing.unit * 40,
  },
  tabs: {
    item: {
      minWidth: theme.spacing.unit * 5,
    },
  },
  listItem: {
    height: theme.spacing.unit * 6,
  },
  expansionItem: {
    height: theme.spacing.unit * 6,
    expanding: {
      height: theme.spacing.unit * 8,
    },
  },
  chart: {
    default: {
      height: theme.spacing.unit * 40,
    },
  },
});
