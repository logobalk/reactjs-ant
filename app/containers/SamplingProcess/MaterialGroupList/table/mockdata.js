const createData = (
  id,
  queue,
  summarizeDate,
  loadingDate,
  group,
  grade,
  summarizeBy,
  status,
) => ({
  id,
  queue,
  summarizeDate,
  loadingDate,
  grade,
  group,
  summarizeBy,
  status,
});

export const data = [
  createData(1, '1', '21/03/2019 09:03:02', '21/03/2019 09:03:02', '1001 - Penicilin', 'A', '100000000 : Phongsathon Suriyo', 'Wait for sampling'),
  createData(2, '2', '21/03/2019 09:03:02', '21/03/2019 09:03:02', '1002 - Cephalosporin', 'A', '100000000 : Phongsathon Suriyo', 'Wait for sampling'),
  createData(3, '3', '21/03/2019 09:03:02', '21/03/2019 09:03:02', '1003 - Carbapenem', 'C', '100000000 : Phongsathon Suriyo', 'Wait for sampling'),
  createData(4, '4', '21/03/2019 09:03:02', '21/03/2019 09:03:02', '1004 - API and Other', 'D', '100000000 : Phongsathon Suriyo', 'Wait for sampling'),
];
