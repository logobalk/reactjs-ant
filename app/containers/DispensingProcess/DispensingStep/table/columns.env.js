export default [
  {
    title: 'No.',
    dataIndex: 'id',
    width: 50,
  }, {
    title: 'Criteria',
    dataIndex: 'criteria',
  }, {
    title: 'Acceptance Criteria',
    dataIndex: 'acceptance',
  }, {
    title: 'Recording Result',
    dataIndex: 'result',
    align: 'center',
  },
  {
    title: 'System Validation',
    dataIndex: 'validStatus',
    align: 'center',
    width: 100,
    onCell: record => ({
      record,
      isValidStatus: true,
    }),
  },
];