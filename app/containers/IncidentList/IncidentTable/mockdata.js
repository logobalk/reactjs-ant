import React from 'react';

const buildStatusBox = (status) => {
  const style = {
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '4px',
  };

  if (status === 1) {
    return (<span style={{ ...style, background: '#389e0d' }}>Accept</span>);
  }
  if (status === 2) {
    return (<span style={{ ...style, background: '#cf1322' }}>Reject</span>);
  }
  return (<span style={{ ...style, background: '#bfbfbf' }}>Pending</span>);
};

let counter = 0;
const createData = (
  incidentCode,
  incidentDate,
  inspectionLot,
  materialCode,
  materialName,
  batch,
  description,
  lotContainer,
  lotQuantity,
  unitOfMaterial,
  status
) => {
  counter += 1;
  return {
    id: counter,
    incidentCode,
    incidentDate,
    inspectionLot,
    materialCode,
    materialName,
    batch,
    description,
    lotContainer,
    lotQuantity,
    unitOfMaterial,
    status,
  };
};

export const data = [
  createData('SBRM19S0001', '12.10.2018', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', 'Incident description', 'Box', '17.007', 'KG', buildStatusBox(1)),
  createData('SBRM19S0002', '12.10.2018', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', 'Incident description', 'Box', '17.007', 'KG', buildStatusBox(2)),
  createData('SBRM19S0003', '12.10.2018', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', 'Incident description', 'Box', '17.007', 'KG', buildStatusBox(1)),
  createData('SBRM19S0004', '12.10.2018', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', 'Incident description', 'Box', '17.007', 'KG', buildStatusBox(3)),
  createData('SBRM19S0005', '12.10.2018', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', 'Incident description', 'Box', '17.007', 'KG', buildStatusBox(1)),
  createData('SBRM19S0006', '12.10.2018', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', 'Incident description', 'Box', '17.007', 'KG', buildStatusBox(1)),
  createData('SBRM19S0007', '12.10.2018', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', 'Incident description', 'Box', '17.007', 'KG', buildStatusBox(1)),
  createData('SBRM19S0008', '12.10.2018', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', 'Incident description', 'Box', '17.007', 'KG', buildStatusBox(1)),
  createData('SBRM19S0009', '12.10.2018', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', 'Incident description', 'Box', '17.007', 'KG', buildStatusBox(1)),

];
