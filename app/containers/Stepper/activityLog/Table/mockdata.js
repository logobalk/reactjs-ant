import React from 'react';
import { Button } from 'antd';

const buildStatusBox = (status) => {
  const style = {
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '4px',
    width: '100%',
  };

  if (status === 1) {
    return (<Button style={{ ...style, background: '#389e0d' }}>Open</Button>);
  }
  return (<Button style={{ ...style, background: '#bfbfbf' }}>Completed</Button>);
};

let counter = 0;
const createData = (
  round,
  createdDate,
  checkedBy,
) => {
  counter += 1;
  return {
    id: counter,
    round,
    createdDate,
    checkedBy,
  };
};

export const data = [
  createData('1', '04/10/2019 07:48:15', 'Admin'),
  createData('2', '04/11/2019 07:50:15', 'Admin'),
  createData('3', '04/12/2019 07:48:15', 'Admin'),
  createData('1', '04/13/2019 07:50:15', 'Admin'),
];
