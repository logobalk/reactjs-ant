import React from 'react';

const renderSuccessMsg = (msg) => (<b style={{ color: '#5b8c00' }}>{msg}</b>);
const renderFailMsg = (msg) => (<b style={{ color: '#f5222d' }}>{msg}</b>);

const createData = (
  id,
  roomNo,
  queue,
  itemCode,
  itemName,
  batchNo,
  quantity,
  unit,
  condition2,
  condition3,
  condition4,
  status,
  processOrder,
  bin,
) => ({
  id,
  roomNo,
  queue,
  itemCode,
  itemName,
  batchNo,
  quantity,
  unit,
  condition2,
  condition3,
  condition4,
  status,
  processOrder,
  bin,
});

export const data = [
  createData(1, '108', '1', renderSuccessMsg('10000001'), 'Hydroxine Di Hydrochloride', renderSuccessMsg('M000000011'), '12.569', 'Kg', '45%', 'Flush N2', 'Protect from light', 'Loaded', '1051079', 'F1.01.01.12'),
  createData(2, '108', '1', renderSuccessMsg('10000007'), 'Hydroxine Di Hydrochloride', renderSuccessMsg('MN00000012'), '0.010', 'G', '45%', 'Flush N2', 'Protect from light', 'Loaded', '1051080', 'F1.01.01.13'),
  createData(3, '108', '2', renderSuccessMsg('10000004'), 'Hydroxine Di Hydrochloride', renderSuccessMsg('ML000000013'), '13.908', 'L', '65%', 'Flush N2', 'non', 'Loaded', '1051079', 'F1.01.01.14'),
  createData(4, '108', '3', '10000005', 'Hydroxine Di Hydrochloride', 'M000000003', '100.000', 'G', '25%', 'Flush N2', 'non', 'Wait', '1051079', 'F1.01.01.12'),
  createData(5, '108', '3', '10000002', 'Hydroxine Di Hydrochloride', 'M000000003', '150.900', 'Kg', '25%', 'non', 'Full drum', 'Wait', '1051080', 'F1.01.01.12'),
  createData(6, '108', '5', '10000002', 'Hydroxine Di Hydrochloride', 'MN00000020', '12.789', 'g', '65%', 'non', 'non', 'Wait', '1051081', 'F1.01.01.12'),
];
