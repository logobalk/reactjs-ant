import React from 'react';
import { Button, Input } from 'antd';

export default [
  {
    title: 'Action',
    dataIndex: 'action',
    width: 120,
    align: 'center',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 130,
    align: 'center',
  },
  {
    title: 'No.',
    dataIndex: 'numOfCarton',
    align: 'center',
    width: 50,
  },
  {
    title: 'Carton No.',
    dataIndex: 'cartonNo',
    align: 'center',
    width: 120,
  }, {
    title: 'Store',
    children: [
      {
        title: 'By (Name)',
        dataIndex: 'qcName',
        key: 'storeName',
      },
      {
        title: 'Time',
        dataIndex: 'createdDate',
        key: 'storeTime',
      },
    ],
  }, {
    title: 'QC Receive',
    children: [
      {
        title: 'By (Name)',
        dataIndex: 'qcName',
      },
      {
        title: 'Time',
        dataIndex: 'createdDate',
        key: 'qcTime',
      },
    ],
  }, {
    title: 'Sampling Size',
    children: [
      {
        title: 'Quantity',
        dataIndex: 'quantity',
        width: 120,
      },
      {
        title: 'UOM',
        dataIndex: 'unit',
        width: 120,
      },
    ],
  },
  {
    title: 'Type',
    dataIndex: 'type',
    align: 'center',
  },
];