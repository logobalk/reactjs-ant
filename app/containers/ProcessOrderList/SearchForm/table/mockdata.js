import React from 'react';

let counter = 0;
const createData = (
  incidentCode,
  selectionDate,
  inspectionLot,
  itemCode,
  itemName,
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
    incidentCode,
    selectionDate,
    inspectionLot,
    itemCode,
    itemName,
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
  createData('SBRM19S0001', '17/03/2019 07:35:08', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', '3', 'Box', '17.007', 'KG', 'In progress', '07:45:28', 'Phongsathon Suriyo'),
  createData('SBRM19S0002', '16/03/2019 07:40:12', '900005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', '10', 'Box', '17.007', 'KG', 'In progress', '07:39:12', 'Phongsathon Suriyo'),
  createData('SBRM19S0003', '15/03/2019 07:28:45', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', '5', 'Box', '17.007', 'KG', 'In progress', '07:40:25', 'Phongsathon Suriyo'),
  createData('SBRM19S0004', '14/03/2019 07:50:33', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', '2', 'Box', '17.007', 'KG', 'In progress', '07:33:59', 'Phongsathon Suriyo'),
  createData('SBRM19S0005', '13/03/2019 07:12:18', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', '1', 'Box', '17.007', 'KG', 'Completed', '07:35:11', 'Phongsathon Suriyo'),
  createData('SBRM19S0006', '12/03/2019 07:33:21', '9000005584', '10000069', 'Hydroxine Di Hydrochloride', '0000057398', '8', 'Box', '17.007', 'KG', 'Completed', '07:46:20', 'Phongsathon Suriyo'),

];
