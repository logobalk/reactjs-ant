import React from 'react';
import { Button } from 'antd';


export default [
  // {
  //   title: 'Action',
  //   dataIndex: 'action',
  //   align: 'center',
  //   width: 80,
  //   render: (action) => (
  //     <Button icon="barcode" type="primary" >Scan</Button>
  //   ),
  // }, 
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
    width: 70,
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