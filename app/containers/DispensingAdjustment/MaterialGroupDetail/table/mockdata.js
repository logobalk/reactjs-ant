const createData = (
  id,
  roomNo,
  queue,
  itemCode,
  itemName,
  batchNo,
  quantity,
  adjustQty,
  actualQty,
  unit,
  condition2,
  condition3,
  condition4,
  status,
  processOrder,
  bin,
  validStatus,
  reason,
) => ({
  id,
  roomNo,
  queue,
  itemCode,
  itemName,
  batchNo,
  quantity,
  adjustQty,
  actualQty,
  unit,
  condition2,
  condition3,
  condition4,
  status,
  processOrder,
  bin,
  validStatus,
  reason,
});

export const data = [
  createData(1, '108', '1', '10000001', 'A', 'M000000011', '12.569', '12.000', '12.000', 'g', '45%', 'Flush N2', 'Protect from light', 'Completed', '1051079', 'F1.01.01.12', 'PASS'),
  createData(2, '108', '1', '10000001', 'A', 'MN00000025', '12.569', '0.569', '', 'g', '45%', 'Flush N2', 'Protect from light', '', '1051079', 'F1.01.01.13', 'PASS', 'Increase'),
  createData(3, '108', '1', '10000002', 'B', 'MN00000012', '24.000', '24.000', '24.000', 'g', '45%', 'Flush N2', 'Protect from light', 'Completed', '1051080', 'F1.01.01.13', 'PASS'),
  createData(4, '106', '2', '10000009', 'C', 'ML000000013', '50.000', '50.000', '50.000', 'g', '65%', 'Flush N2', 'non', 'Completed', '1051079', 'F1.01.01.14', 'PASS'),
  createData(5, '106', '2', '10000009', 'C', 'ML000000020', '50.000', '3.000', '', 'g', '65%', 'Flush N2', 'non', '', '1051079', 'F1.01.01.14', '', 'Re-dispense'),
];

// export const data = [
//   createData(1, '09', '1', '10000001', 'Hydroxine Di Hydrochloride', 'M000000099', 'SB59', 0, 2, 'Drum', '2', 'Drum', '4', 'Drum', 30, 'G', 'AB:TH', 'CH', 'In Progress', '30T : 30B', 0, 'PASS'),
//   createData(2, '01', '2', '10000007', 'Hydroxine Di Hydrochloride', 'M000000100', 'SB00', 'F1:01:13', 4, 'Drum', 0, 'Drum', '4', 'Drum', 50, 'G', 'PB:Spoon', 'MC:CH', 'Completed', '50T : 50B', 0, 'PASS'),
//   createData(3, '01', '3', '10000004', 'Hydroxine Di Hydrochloride', 'M000000097', 'SB00', 'F1:01:13', 3, 'Drum', 1, 'Drum', '4', 'Drum', 100, 'ml', 'AB:TH', 'CH', 'Waiting', '100T : 1000B', 0, 'FAIL'),
// ];
