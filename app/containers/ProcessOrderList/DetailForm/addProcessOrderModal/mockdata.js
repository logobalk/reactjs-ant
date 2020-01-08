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
  createData('1057502', '10000032', '17/03/2019', '10000032', 'ANTATOZINE HYDROCHLORIDE 1ML', 'N0000052058', '3', 'Box', '77.357', 'KG', 'In progress', '07:45:28', 'Phongsathon Suriyo'),
  createData('1057503', '10000032', '16/03/2019', '10000033', 'ANTATOZINE HYDROCHLORIDE 2ML', '0000057398', '10', 'Box', '17.007', 'KG', 'In progress', '07:39:12', 'Phongsathon Suriyo'),
  createData('1057504', '10000114', '15/03/2019', '10000114', 'TETRAAHYDROZOLINE HYDROCHLORIDE 5ML', '0000051385', '5', 'Box', '32.386', 'KG', 'In progress', '07:40:25', 'Phongsathon Suriyo'),
  createData('1057505', '10000114', '15/03/2019', '10000115', 'TETRAAHYDROZOLINE HYDROCHLORIDE 10ML', '0000051385', '5', 'Box', '32.386', 'KG', 'In progress', '07:40:25', 'Phongsathon Suriyo'),
];
