import React from 'react';
import { Button, Input, Select } from 'antd';
import StatusBox from 'components/StatusBox';

const { Option } = Select;

const buildStatusBox = (status) => {
  if (status === 1) {
    return (<StatusBox type="success" text="Transferred" />);
  }
  if (status === 2) {
    return (<StatusBox type="error" text="Rejected" />);
  }
  return (<StatusBox type="warn" text="Pending" />);
};

let counter = 0;
const createData = (
  incidentCode,
  numOfCarton,
  cartonNo,
  qcName,
  room,
  batch,
  total,
  grade,
  quantity,
  unit,
  status,
  createdDate,
  createdBy,
  action,
  type,
) => {
  counter += 1;
  return {
    id: counter,
    incidentCode,
    numOfCarton,
    cartonNo,
    qcName,
    room,
    batch,
    total,
    grade,
    quantity,
    unit,
    status,
    createdDate,
    createdBy,
    action,
    type,
  };
};

export const data = [
  createData('SBRM19S0001', '1/10', '1', 'Phongsathon Suriyo', '39', '0000057398', '10', 'A', '2.000', 'G', buildStatusBox(1), '04/04/2019 15:48:15', 'Phongsathon Suriyo', '', 'Sampling'),
  createData('SBRM19S0002', '2/10', '2', 'Phongsathon Suriyo', '39', '0000057398', '10', 'A', '2.000', 'G', buildStatusBox(1), '04/04/2019 15:48:15', 'Phongsathon Suriyo', '', 'Sampling'),
  createData('SBRM19S0003', '3/10', '3', 'Phongsathon Suriyo', '39', '0000057398', '10', 'C', '2.000', 'G', buildStatusBox(2), '04/04/2019 15:48:15', 'Phongsathon Suriyo', '', 'Sampling'),
  createData('SBRM19S0004', '4/10', '4', 'Phongsathon Suriyo', '39', '0000057398', '10', 'C', '2.000', 'G', buildStatusBox(3), '04/04/2019 15:48:15', 'Phongsathom Suriyo', '', 'Dispensing'),
  createData('SBRM19S0005', '5/10', <Input placeholder="Carton No." />, <Button type="primary" icon="scan">Scan</Button>, '', '0000057398', '', '', <Input placeholder="Quantity" />, <Select style={{ width: '100%' }} placeholder="UOM"><Option value="1">KG</Option></Select>, '', '', '', <Button type="primary" icon="check">Done</Button>),
  createData('SBRM19S0006', '6/10', '', '', '', '0000057398', '', '', '', '', '', '', ''),
  createData('SBRM19S0006', '7/10', '', '', '', '0000057398', '', '', '', '', '', '', ''),
  createData('SBRM19S0006', '8/10', '', '', '', '0000057398', '', '', '', '', '', '', ''),
  createData('SBRM19S0006', '9/10', '', '', '', '0000057398', '', '', '', '', '', '', ''),
  createData('SBRM19S0006', '10/10', '', '', '', '0000057398', '', '', '', '', '', '', ''),
];
