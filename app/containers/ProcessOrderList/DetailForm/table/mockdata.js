import React from 'react';

let counter = 0;
const createData = (
  incidentCode,
  processOrderNo,
  processOrderDate,
  materialNo,
  materialName,
  batch,
  numOfMaterial,
  lotContainer,
  quantity,
  unit,
  status,
  selectionTime,
  selectionBy,
) => {
  counter += 1;
  return {
    id: counter,
    incidentCode,
    processOrderNo,
    processOrderDate,
    materialNo,
    materialName,
    batch,
    numOfMaterial,
    lotContainer,
    quantity,
    unit,
    status,
    selectionTime,
    selectionBy,
  };
};

export const data = [
  createData('SBRM19S0001', '1057504', '17/03/2019', '24000013', 'ANTAZALLERGE EYE DROPS 10 ML', '0000057398', '4', 'Box', '17.007', 'KG', 'Dispensed', '07:45:28', 'Phongsathon Suriyo'),
  createData('SBRM19S0002', '1057503', '16/03/2019', '24000013', 'ANTAZALLERGE EYE DROPS 10 ML', '0000057398', '10', 'Box', '17.007', 'KG', 'In progress', '07:39:12', 'Phongsathon Suriyo'),
  createData('SBRM19S0003', '1057502', '15/03/2019', '24000013', 'ANTAZALLERGE EYE DROPS 10 ML', '0000057398', '5', 'Box', '17.007', 'KG', 'In progress', '07:40:25', 'Phongsathon Suriyo'),
];
