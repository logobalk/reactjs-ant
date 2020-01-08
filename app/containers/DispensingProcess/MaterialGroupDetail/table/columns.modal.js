import React from 'react';
import { Checkbox } from 'antd';

export default [
  {
    title: '',
    dataIndex: 'action',
    align: 'center',
    render: (action) => (
      <Checkbox />
    ),
  },
  {
    title: 'No.',
    dataIndex: 'id',
    align: 'center',
    width: 50,
  },
  {
    title: 'Room No.',
    dataIndex: 'roomNo',
    align: 'center',
  },
  {
    title: 'Queue',
    dataIndex: 'queue',
    align: 'center',
    width: 50,
  }, {
    title: 'Item Code',
    dataIndex: 'itemCode',
  }, {
    title: 'Item Name',
    dataIndex: 'itemName',
  }, {
    title: 'Batch No.',
    dataIndex: 'batchNo',
  }, {
    title: 'Qty',
    dataIndex: 'quantity',
    align: 'center',
  },
  {
    title: 'UOM',
    dataIndex: 'unit',
    align: 'center',
  }, {
    title: 'BIN Location',
    dataIndex: 'bin',
    align: 'center',
  }, {
    title: 'PO',
    dataIndex: 'processOrder',
    align: 'center',
  },
];