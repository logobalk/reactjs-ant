export default [
  {
    title: 'Seq No.',
    dataIndex: 'seqNo',
    width: 50,
  },
  {
    title: 'Inspection Lot Origin',
    dataIndex: 'inspectionLotOrigin',
    key: 'lotOrigin',
    width: 100,
  }, {
    title: 'Queue',
    dataIndex: 'queue',
    key: 'queue',
  }, {
    title: 'Item Code',
    dataIndex: 'itemCode',
    key: 'itemCode',
  }, {
    title: 'Name',
    dataIndex: 'itemName',
    key: 'itemName',
  }, {
    title: 'Batch No.',
    dataIndex: 'batchNo',
    key: 'batchNo',
  }, {
    title: 'Normal Plan',
    className: 'spanColumn',
    children: [
      {
        title: 'Qty',
        align: 'center',
        dataIndex: 'normalPlan',
        className: 'spanColumn',
        width: 80,
      },
      {
        title: 'UOM',
        dataIndex: 'unit',
        className: 'spanColumn',
        width: 50,
      },
    ],
  }, {
    title: 'Deviation Plan',
    className: 'spanColumn',
    children: [
      {
        title: 'Qty',
        align: 'center',
        dataIndex: 'deviationPlan',
        className: 'spanColumn',
        width: 80,
      },
      {
        title: 'UOM',
        dataIndex: 'unit1',
        className: 'spanColumn',
        width: 50,
      },
    ],
  }, {
    title: 'Total',
    className: 'spanColumn',
    children: [
      {
        title: 'Qty',
        dataIndex: 'totalSampling',
        align: 'center',
        className: 'spanColumn',
        width: 80,
      },
      {
        title: 'UOM',
        dataIndex: 'unit2',
        className: 'spanColumn',
        width: 50,
      },
    ],
  },
  {
    title: 'Sampling',
    className: 'spanColumn',
    children: [
      {
        title: 'Qty',
        dataIndex: 'sampling',
        align: 'center',
        className: 'spanColumn',
        width: 80,
      },
      {
        title: 'UOM',
        dataIndex: 'unit3',
        className: 'spanColumn',
        width: 50,
      },
    ],
  },
  {
    title: 'Container Equipment',
    dataIndex: 'container',
    width: 100,
  },
  {
    title: 'Type of Analytical',
    dataIndex: 'typeOfAnalytical',
    width: 100,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    align: 'center',
    width: 200,
  },
];