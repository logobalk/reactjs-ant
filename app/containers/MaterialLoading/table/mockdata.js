const createData = (
  id,
  queue,
  summarizeDate,
  group,
  grade,
  summarizeBy,
  status,
) => ({
  id,
  queue,
  summarizeDate,
  grade,
  group,
  summarizeBy,
  status,
});

export const data = [
  createData(1, '1', '21/03/2019 09:03:02', '1001 - Penicilin', 'A', '100000000 : Phongsathon Suriyo', 'Wait for loading'),
  createData(2, '2', '21/03/2019 09:03:02', '1002 - Cephalosporin', 'A', '100000000 : Phongsathon Suriyo', 'Wait for loading'),
  createData(3, '3', '21/03/2019 09:03:02', '1003 - Carbapenem', 'C', '100000000 : Phongsathon Suriyo', 'Wait for loading'),
  createData(4, '4', '21/03/2019 09:03:02', '1004 - API and Other', 'D', '100000000 : Phongsathon Suriyo', 'Wait for loading'),
];
