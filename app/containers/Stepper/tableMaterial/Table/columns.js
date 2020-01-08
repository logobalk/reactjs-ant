import React from 'react';
import { Button } from 'antd';

export default (openModal) => ([
  {
    title: '',
    dataIndex: 'list',
    align: 'center',
    width: 100,
    render: (id,detail) => (
      <Button icon="caret-right" onClick={openModal(detail)} type="primary">Start</Button>
    ),
  },
  {
    title: 'No.',
    dataIndex: 'id',
    width: 50,
  },
  {
    title: 'Material Group',
    dataIndex: 'materialGroup',
  },
  {
    title: 'Type',
    dataIndex: 'type',
  },
  {
    title: 'Grade',
    dataIndex: 'grade',
  },
  {
    title: 'Room No.',
    dataIndex: 'roomNo',
  },
  {
    title: 'Checked By',
    dataIndex: 'checkedBy',
  },
  {
    title: 'Finished Time',
    dataIndex: 'finishedTime',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 130,
    align: 'center',
  },
]);
