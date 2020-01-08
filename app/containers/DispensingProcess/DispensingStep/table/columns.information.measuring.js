import React from 'react';
import { Button } from 'antd';

export default [
  {
    title: 'No.',
    dataIndex: 'id',
    align: 'center',
    width: 50,
  },
  {
    title: 'Measuring',
    dataIndex: 'measuring',
    align: 'center',
    width: 50,
    render: () => <Button type="primary" icon="experiment">Measuring</Button>,
  },
  {
    title: 'Number of Measuring',
    dataIndex: 'numOfWeighting',
    align: 'center',
    width: 100,
  },

  {
    title: 'Item Code',
    dataIndex: 'itemCode',
  }, {
    title: 'Item Name',
    dataIndex: 'itemName',
  }, {
    title: 'Batch No.',
    dataIndex: 'batchNo',
  }, {
    title: 'Req Qty',
    dataIndex: 'quantity',
    align: 'center',
  },
  {
    title: 'Actual Qty',
    dataIndex: 'actualQty',
    align: 'center',
  },
  {
    title: 'UOM',
    dataIndex: 'unit',
    align: 'center',
  }, {
    title: 'PO',
    dataIndex: 'processOrder',
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