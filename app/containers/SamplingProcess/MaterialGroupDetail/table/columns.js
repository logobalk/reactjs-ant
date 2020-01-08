import React from 'react';
import { Button } from 'antd';

export default (onClickStart) => (
  [
    {
      title: 'Action',
      dataIndex: 'action',
      align: 'center',
      width: 80,
      render: (action) => (
        <Button icon="poweroff" onClick={onClickStart} type="primary">Sampling</Button>
      ),
    }, {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
    }, {
      title: 'Queue',
      dataIndex: 'queue',
      align: 'center',
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
      align: 'center',
      key: 'batchNo',
    }, {
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
      title: 'Sampler Qauntity',
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
  ]
);