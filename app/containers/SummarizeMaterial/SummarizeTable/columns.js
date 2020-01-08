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
    title: 'Storage Location',
    dataIndex: 'storageLocation',
    key: 'storageLocation',
    width: 100,
  }, {
    title: 'BIN',
    dataIndex: 'bin',
    key: 'bin',
  }, {
    title: 'Normal Plan',
    className: 'spanColumn',
    children: [
      {
        title: 'Qty',
        align: 'center',
        dataIndex: 'quantity',
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
        dataIndex: 'quantity2',
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
  }, {
    title: 'Total',
    className: 'spanColumn',
    children: [
      {
        title: 'Qty',
        dataIndex: 'quantity3',
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
];