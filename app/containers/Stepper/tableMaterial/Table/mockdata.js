import React from 'react';
import { Button } from 'antd';
import StatusBox from 'components/StatusBox';

const buildStatusBox = (status) => {
  if (status === 1) {
    return (<StatusBox type="warn" text="In process" />);
  }
  return (<StatusBox type="success" text="Avaiable" />);
};

let counter = 0;
const createData = (
  materialGroup,
  type,
  grade,
  roomNo,
  checkedBy,
  finishedTime,
  status,
) => {
  counter += 1;
  return {
    id: counter,
    materialGroup,
    type,
    grade,
    roomNo,
    checkedBy,
    finishedTime,
    status,
  };
};

export const data = [
  createData('-', 'N2 Gas', 'C/D', '', 'Admin', '', buildStatusBox(1)),
  createData('-', 'Weighing Scale Efficiency', 'C/D', '', 'Admin', '', buildStatusBox(1)),
  createData('Non beta lactam', 'Pressure Diff', 'D', '104,107,108', 'Admin', '', buildStatusBox(1)),
  createData('Non beta lactam', 'Pressure Diff', 'C', '115,116', 'Admin', '', buildStatusBox(1)),
  createData('Non beta lactam', 'Weighing  booth  Efficiency', 'C/D', 'C115,C116 : D104,107', 'Admin', '', buildStatusBox(1)),
  createData('Penicillin', 'Pressure Diff', 'D', '131,141,217', 'Admin', '04/10/2019 07:48:15', buildStatusBox(2)),
  createData('Cephalosporin', 'Pressure Diff', 'D', '514', 'Admin', '04/10/2019 07:48:15', buildStatusBox(2)),
  // createData('Cephalosporin', 'Admin', '04/11/2019 07:50:15', buildStatusBox(1)),
  // createData('Carbapenem', 'Admin', '04/12/2019 07:48:15', buildStatusBox(2)),
];
