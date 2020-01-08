import React from 'react';

let counter = 0;
const createData = (
  itemCode,
  processOrderNo,
  processOrderDate,
  materialNo,
  materialName,
  batch,
  total,
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
    itemCode,
    processOrderNo,
    processOrderDate,
    materialNo,
    materialName,
    batch,
    total,
    lotContainer,
    quantity,
    unit,
    status,
    selectionTime,
    selectionBy,
  };
};

export const data = [
  createData('0010', '10000032', '17/03/2019', '10000032', 'ANTATOZINE HYDROCHLORIDE', 'N0000052058', '3', 'Box', '77.357', 'KG', 'Dispensed', '07:45:28', 'Phongsathon Suriyo'),
  createData('0010', '10000032', '16/03/2019', '10000032', 'ANTATOZINE HYDROCHLORIDE', '0000057398', '10', 'Box', '17.007', 'KG', 'Dispensed', '07:39:12', 'Phongsathon Suriyo'),
  createData('0020', '10000114', '15/03/2019', '10000114', 'TETRAAHYDROZOLINE HYDROCHLORIDE', '0000051385', '5', 'Box', '32.386', 'KG', 'Dispensed', '07:40:25', 'Phongsathon Suriyo'),
  createData('0020', '10000114', '15/03/2019', '10000114', 'TETRAAHYDROZOLINE HYDROCHLORIDE', '0000051385', '5', 'Box', '32.386', 'KG', 'Dispensed', '07:40:25', 'Phongsathon Suriyo'),
];
