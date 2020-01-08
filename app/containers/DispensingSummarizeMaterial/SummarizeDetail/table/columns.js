import React from 'react';
import { Button } from 'antd';

export default [
  // {
  //   title: 'Material Loaded',
  //   dataIndex: 'id',
  //   key: 'action',
  //   align: 'center',
  //   width: 50,
  //   render: (id, record) => (
  //     <Button type="primary" icon="scan" />
  //   ),
  // },
  {
    title: 'Status',
    dataIndex: 'status',
    align: 'center',
    onCell: record => ({
      record,
      isValidStatus: true,
    }),
  },
  {
    title: 'No.',
    dataIndex: 'id',
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
    title: 'Scan',
    dataIndex: 'barcode1',
    align: 'center',
    render: (action) => (
      <Button icon="scan" type="primary" id="barcode" />
    ),
  }, {
    title: 'Item Name',
    dataIndex: 'itemName',
  }, {
    title: 'Batch No.',
    dataIndex: 'batchNo',
  }, {
    title: 'Scan',
    dataIndex: 'barcode2',
    align: 'center',
    render: (action) => (
      <Button icon="scan" type="primary" id="barcode" />
    ),
  }, {
    title: 'Req Qty',
    dataIndex: 'quantity',
    align: 'center',
  }, {
    title: 'Actual Qty',
    dataIndex: 'quantity',
    key: 'actualQty',
    align: 'center',
  },
  {
    title: 'UOM',
    dataIndex: 'unit',
    align: 'center',
  },
  // {
  //   title: 'BIN Location',
  //   dataIndex: 'bin',
  //   align: 'center',
  // }, 
  {
    title: 'PO',
    dataIndex: 'processOrder',
    align: 'center',
  },
];