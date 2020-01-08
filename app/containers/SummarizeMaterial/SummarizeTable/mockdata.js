const createData = (
  lotOrigin,
  queue,
  itemCode,
  itemName,
  batchNo,
  storageLocation,
  bin,
  normalPlan,
  deviationPlan,
  totalSampling,
) => ({
  lotOrigin,
  queue,
  itemCode,
  itemName,
  batchNo,
  storageLocation,
  bin,
  normalPlan,
  deviationPlan,
  totalSampling,
});

export const data = [
  createData('9', '1', '10000001', 'Hydroxine Di Hydrochloride', 'M000000099', 'SB59', 0, 2, '2', '4'),
  createData('1', '2', '10000007', 'Hydroxine Di Hydrochloride', 'M000000100', 'SB00', 'F1:01:13', 4, 0, '4'),
  createData('1', '3', '10000004', 'Hydroxine Di Hydrochloride', 'M000000097', 'SB00', 'F1:01:13', 3, 1, '4'),
  createData('1', '4', '10000005', 'Hydroxine Di Hydrochloride', 'M000000096', 'SB00', 'F1:01:13', 1, 3, '4'),
  createData('1', '5', '10000002', 'Hydroxine Di Hydrochloride', 'M000000094', 'SB00', 'F1:01:13', 2, 2, '4'),
];
