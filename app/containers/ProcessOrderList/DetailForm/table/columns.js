import React from 'react';
import { Button } from 'antd';

export default [
  {
    title: 'List of Material',
    dataIndex: 'list',
    align: 'center',
    width: 100,
    render: () => <Button type="primary" icon="ordered-list" id="list">List</Button>,
  },
  {
    title: 'No.',
    dataIndex: 'id',
    width: 50,
  }, {
    title: 'Process Order',
    dataIndex: 'processOrderNo',
    align: 'center',
  }, {
    title: 'Process Order Date',
    dataIndex: 'processOrderDate',
    align: 'center',
  }, {
    title: 'Material No.',
    dataIndex: 'materialNo',
    align: 'center',
  }, {
    title: 'Material Name',
    dataIndex: 'materialName',
    align: 'center',
  },
  {
    title: 'Num of Material',
    dataIndex: 'numOfMaterial',
    align: 'center',
  },
  {
    title: 'Dispense Status',
    dataIndex: 'status',
    align: 'center',
  },
  {
    title: 'Remove',
    dataIndex: 'action',
    align: 'center',
    render: () => <Button type="danger" icon="delete" />,
  },
];