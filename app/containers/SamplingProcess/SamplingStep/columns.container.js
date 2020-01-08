import React from 'react';
import { Button } from 'antd';

export default [
  {
    title: '',
    dataIndex: 'action',
    align: 'center',
    width: 100,
    render: () => <Button icon="delete" type="danger">Remove</Button>,
  },
  {
    title: 'ชั้นที่',
    dataIndex: 'id',
    align: 'center',
    width: 60,
  }, {
    title: 'ภาชนะบรรจุ',
    children: [
      {
        title: 'รูปแบบ',
        dataIndex: 'type',
        width: 200,
      },
      {
        title: 'สีภาชนะบรรจุ',
        dataIndex: 'color',
        width: 300,
      },
    ],
  }, {
    title: 'การล็อคปากภาชนะ',
    dataIndex: 'lock',
    width: 400,
  }, {
    title: 'ลักษณะความผิดปกติ',
    dataIndex: 'status',
    align: 'center',
    width: 300,
  },
];