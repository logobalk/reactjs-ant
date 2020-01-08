import React from 'react';
import { Button } from 'antd';


export default [
  {
    title: 'Scan',
    dataIndex: 'action',
    align: 'center',
    width: 80,
    render: (action) => (
      <Button icon="scan" type="primary" />
    ),
  },
  {
    title: 'No.',
    dataIndex: 'seqNo',
    align: 'center',
  },
  // {
  //   title: 'Item Code',
  //   dataIndex: 'itemCode',
  //   key: 'itemCode',
  // }, {
  //   title: 'Name',
  //   dataIndex: 'itemName',
  //   key: 'itemName',
  // }, {
  //   title: 'Batch No.',
  //   dataIndex: 'batchNo',
  //   align: 'center',
  //   key: 'batchNo',
  // },
  {
    title: 'Sample Size',
    className: 'spanColumn',
    children: [
      {
        title: 'Normal Plan',
        align: 'center',
        dataIndex: 'normalPlan',
        className: 'spanColumn',
        width: 100,
      },
      {
        title: 'Deviation Plan',
        align: 'center',
        dataIndex: 'deviationPlan',
        className: 'spanColumn',
        width: 100,
      },
      {
        title: 'Total',
        dataIndex: 'totalSampling',
        align: 'center',
        className: 'spanColumn',
        width: 80,
      },
    ],
  },
  {
    title: 'UOM',
    dataIndex: 'unit',
    align: 'center',
    width: 50,
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
  {
    title: 'Counter',
    dataIndex: 'counter',
    align: 'center',
    width: 100,
  },
  {
    title: 'Sample Qauntity',
    dataIndex: 'qauntity',
  },
  {
    title: 'Container Equipment',
    dataIndex: 'container',
  },
  {
    title: 'Type of Analytical',
    dataIndex: 'typeOfAnalytical',
  },
];