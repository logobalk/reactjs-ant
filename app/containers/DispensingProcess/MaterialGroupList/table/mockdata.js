const createData = (
  id,
  queue,
  summarizeDate,
  loadingDate,
  roomNo,
  group,
  grade,
  summarizeBy,
  status,
  numOfMaterial,
) => ({
  id,
  queue,
  summarizeDate,
  loadingDate,
  roomNo,
  grade,
  group,
  summarizeBy,
  status,
  numOfMaterial,
});

export const data = [
  createData(1, '1', '21/03/2019 09:03:02', '21/03/2019 09:03:02', '102', '1001 - Penicilin', 'A', '100000000 : Phongsathon Suriyo', 'In progress', '3/20'),
  createData(2, '2', '21/03/2019 09:03:02', '21/03/2019 09:03:02', '103', '1002 - Cephalosporin', 'A', '100000000 : Phongsathon Suriyo', 'In progress', '0/10'),
  createData(3, '3', '21/03/2019 09:03:02', '21/03/2019 09:03:02', '104', '1003 - Carbapenem', 'C', '100000000 : Phongsathon Suriyo', 'In progress', '0/30'),
  createData(4, '4', '21/03/2019 09:03:02', '21/03/2019 09:03:02', '105', '1004 - API and Other', 'D', '100000000 : Phongsathon Suriyo', 'Completed', '0/5'),
];
