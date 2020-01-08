const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 5) {
    obj.props.colSpan = 0;
  }
  return obj;
};


export default [
  {
    title: 'No.',
    dataIndex: 'id',
    align: 'center',
    width: 50,
    render: renderContent,
  }, {
    title: 'Criteria',
    dataIndex: 'criteria',
    // width: 400,
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };
      if (index === 5) {
        obj.props.colSpan = 4;
      }
      return obj;
    },
  },
  {
    title: 'Evaluate',
    dataIndex: 'evaluate',
    align: 'center',
    width: 200,
    render: renderContent,
  },
  {
    title: 'System Validation',
    dataIndex: 'validStatus',
    align: 'center',
    width: 50,
    render: renderContent,
    onCell: record => ({
      record,
      isValidStatus: true,
    }),
  },
];