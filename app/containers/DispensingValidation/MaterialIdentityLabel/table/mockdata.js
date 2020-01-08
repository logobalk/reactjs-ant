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
  validStatus,
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
  validStatus,
});

export const data = [
  createData(1, '108', '1', '10000001', 'Hydroxine Di Hydrochloride', 'M000000011', '12.569', 'Kg', '45%', 'Flush N2', 'Protect from light', 'Pending', '1051079', 'F1.01.01.12', 'PASS'),
  createData(2, '108', '1', '10000007', 'Hydroxine Di Hydrochloride', 'MN00000012', '0.010', 'G', '45%', 'Flush N2', 'Protect from light', 'Pending', '1051080', 'F1.01.01.13', 'PASS'),
  createData(3, '106', '2', '10000004', 'Hydroxine Di Hydrochloride', 'ML000000013', '13.908', 'L', '65%', 'Flush N2', 'non', 'Pending', '1051079', 'F1.01.01.14', 'PASS'),
  createData(4, '106', '3', '10000005', 'Hydroxine Di Hydrochloride', 'M000000003', '100.000', 'G', '25%', 'Flush N2', 'non', 'Completed', '1051079', 'F1.01.01.12', 'FAIL'),
  createData(5, '106', '3', '10000002', 'Hydroxine Di Hydrochloride', 'M000000003', '150.900', 'Kg', '25%', 'non', 'Full drum', 'Completed', '1051080', 'F1.01.01.12', 'FAIL'),
  createData(6, '106', '5', '10000002', 'Hydroxine Di Hydrochloride', 'MN00000020', '12.789', 'g', '65%', 'non', 'non', 'Completed', '1051081', 'F1.01.01.12', 'FAIL'),
];

// export const data = [
//   createData(1, '09', '1', '10000001', 'Hydroxine Di Hydrochloride', 'M000000099', 'SB59', 0, 2, 'Drum', '2', 'Drum', '4', 'Drum', 30, 'G', 'AB:TH', 'CH', 'RL CALC SPRQ', '30T : 30B', 0, 'PASS'),
//   createData(2, '01', '2', '10000007', 'Hydroxine Di Hydrochloride', 'M000000100', 'SB00', 'F1:01:13', 4, 'Drum', 0, 'Drum', '4', 'Drum', 50, 'G', 'PB:Spoon', 'MC:CH', 'REL CALC SPRQ', '50T : 50B', 0, 'PASS'),
//   createData(3, '01', '3', '10000004', 'Hydroxine Di Hydrochloride', 'M000000097', 'SB00', 'F1:01:13', 3, 'Drum', 1, 'Drum', '4', 'Drum', 100, 'ml', 'AB:TH', 'CH', 'CRTD CHCR SPRQ', '100T : 1000B', 0, 'FAIL'),
// ];
