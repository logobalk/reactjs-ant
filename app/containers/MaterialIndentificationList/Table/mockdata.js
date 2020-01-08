import React from 'react';

const buildStatusBox = (status) => {
  const style = {
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '4px',
  };

  if (status === 1) {
    return (<span style={{ ...style, background: '#d4b106' }}>In progress</span>);
  }
  return (<span style={{ ...style, background: '#7cb305' }}>Completed</span>);
};

let counter = 0;
const createData = (
  incidentCode,
  receivedDate,
  inspectionLot,
  itemCode,
  itemName,
  batch,
  total,
  lotContainer,
  quantity,
  unit,
  status,
  createdDate,
  createdBy,
) => {
  counter += 1;
  return {
    id: counter,
    incidentCode,
    receivedDate,
    inspectionLot,
    itemCode,
    itemName,
    batch,
    total,
    lotContainer,
    quantity,
    unit,
    status,
    createdDate,
    createdBy,
  };
};

export const data = [
  createData('SBRM19S0001', '12.10.2018', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', '4/10', 'Box', '17.007', 'KG', buildStatusBox(1), '04/04/2019 15:48:15', 'Phongsathon Suriyo'),
  createData('SBRM19S0002', '12.10.2018', '9000005584', '10000001', 'A', '0000057398', '1/14', 'Box', '48.000', 'KG', buildStatusBox(1), '04/04/2019 15:48:15', 'Phongsathon Suriyo'),
  createData('SBRM19S0003', '12.10.2018', '9000005584', '10000002', 'B', '0000057398', '0/20', 'Box', '25.000', 'KG', buildStatusBox(1), '04/04/2019 15:48:15', 'Phongsathon Suriyo'),
  createData('SBRM19S0004', '12.10.2018', '9000005584', '10000003', 'C', '0000057398', '5/5', 'Box', '60.000', 'KG', buildStatusBox(2), '04/04/2019 15:48:15', 'Phongsathon Suriyo'),
  createData('SBRM19S0005', '12.10.2018', '9000005584', '10000004', 'D', '0000057398', '8/8', 'Box', '15.000', 'KG', buildStatusBox(2), '04/04/2019 15:48:15', 'Phongsathon Suriyo'),
  createData('SBRM19S0006', '12.10.2018', '9000005584', '10000050', 'E', '0000057398', '15/15', 'Box', '22.000', 'KG', buildStatusBox(2), '04/04/2019 15:48:15', 'Phongsathon Suriyo'),

];
