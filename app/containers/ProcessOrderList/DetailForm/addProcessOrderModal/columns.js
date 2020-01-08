import React from 'react';
import { Button, Checkbox } from 'antd';

export default [
  {
    title: '',
    dataIndex: 'checkbox',
    width: 50,
    render: () => <Checkbox />,
  }, {
    title: 'No.',
    dataIndex: 'id',
    width: 50,
  }, {
    title: 'Process Order',
    dataIndex: 'itemCode',
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
    title: 'Add',
    dataIndex: 'add',
    align: 'center',
    render: () => <Button type="primary" icon="plus"></Button>,
  },
];