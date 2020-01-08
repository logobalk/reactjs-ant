const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 0 || index === 2) {
    obj.props.rowSpan = 2;
  }
  if (index === 1 || index === 3) {
    obj.props.rowSpan = 0;
  }
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};


export default [
  {
    title: 'No.',
    dataIndex: 'seq',
    align: 'center',
    width: 50,
    render: renderContent,
  }, {
    title: 'Creteria',
    dataIndex: 'creteria',
    width: 250,
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 0 || index === 2) {
        obj.props.rowSpan = 2;
      }
      if (index === 1 || index === 3) {
        obj.props.rowSpan = 0;
      }
      if (index === 4) {
        obj.props.colSpan = 5;
      }
      return obj;
    },
  }, {
    title: 'Recording Result',
    children: [
      {
        title: 'Activities',
        dataIndex: 'activities',
        render: (value, row, index) => {
          const obj = {
            children: value,
            props: {},
          };
          if (index === 1) {
            obj.props.rowSpan = 1;
          }
          if (index === 4) {
            obj.props.colSpan = 0;
          }
          return obj;
        },
      },
      {
        title: 'Date',
        dataIndex: 'date',
        align: 'center',
        render: (value, row, index) => {
          const obj = {
            children: value,
            props: {},
          };
          if (index === 1) {
            obj.props.rowSpan = 1;
          }
          if (index === 4) {
            obj.props.colSpan = 0;
          }
          return obj;
        },
      },
    ],
  }, {
    title: 'Evaluate',
    dataIndex: 'evaluate',
    align: 'center',
    render: renderContent,
  },
];