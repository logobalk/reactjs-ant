import React from 'react';

const renderSuccessMsg = (msg) => (<b style={{ color: '#5b8c00' }}>{msg}</b>);
const renderFailMsg = (msg) => (<b style={{ color: '#f5222d' }}>{msg}</b>);

const createData = (
  seqNo,
  inspectionLotOrigin,
  queue,
  itemCode,
  itemName,
  batchNo,
  storageLocation,
  bin,
  normalPlan,
  unit,
  deviationPlan,
  unit1,
  totalSampling,
  unit2,
  status,
  name1,
  time1,
  name2,
  time2,
) => ({
  seqNo,
  inspectionLotOrigin,
  queue,
  itemCode,
  itemName,
  batchNo,
  storageLocation,
  bin,
  normalPlan,
  unit,
  deviationPlan,
  unit1,
  totalSampling,
  unit2,
  status,
  name1,
  time1,
  name2,
  time2,
});

export const data = [
  createData(1, '9000006843', '1', renderSuccessMsg('10000001'), 'Hydroxine Di Hydrochloride', renderSuccessMsg('M000000099'), 'SB59', 0, 2, 'Drum', '2', 'Drum', '4', 'Drum', 1, 'Phongsathon Suriyo', '09/05/2019 15:48:15', 'Phongsathon Suriyo', '09/05/2019 15:48:15'),
  createData(2, '1000005288', '2', renderSuccessMsg('10000007'), 'Hydroxine Di Hydrochloride', renderSuccessMsg('M000000100'), 'SB00', 'F1:01:13', 4, 'Drum', 0, 'Drum', '4', 'Drum', 1, 'Phongsathon Suriyo', '09/05/2019 15:48:15', 'Phongsathon Suriyo', '09/05/2019 15:48:15'),
  createData(3, '1000007574', '3', renderSuccessMsg('10000004'), 'Hydroxine Di Hydrochloride', renderSuccessMsg('M000000097'), 'SB00', 'F1:01:13', 3, 'Drum', 1, 'Drum', '4', 'Drum', 1, 'Phongsathon Suriyo', '09/05/2019 15:48:15', 'Phongsathon Suriyo', '09/05/2019 15:48:15'),
  createData(4, '1000005420', '4', '10000005', 'Hydroxine Di Hydrochloride', 'M000000096', 'SB00', 'F1:01:13', 1, 'Drum', 3, 'Drum', '4', 'Drum', 2),
  createData(5, '1000006601', '5', '10000002', 'Hydroxine Di Hydrochloride', 'M000000094', 'SB00', 'F1:01:13', 2, 'Drum', 2, 'Drum', '4', 'Drum', 2),
];
