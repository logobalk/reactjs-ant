const createData = (
  id,
  queue,
  roomNo,
  summarizeDate,
  group,
  grade,
  summarizeBy,
  status,
  numOfMaterial,
) => ({
  id,
  queue,
  roomNo,
  summarizeDate,
  grade,
  group,
  summarizeBy,
  status,
  numOfMaterial,
});

export const data = [
  createData(1, '1', '108', '21/03/2019 09:03:02', '1001 - Penicilin', 'A', '100000000 : Phongsathon Suriyo', 'In progress', '20'),
  createData(2, '2', '108','21/03/2019 09:03:02', '1002 - Cephalosporin', 'A', '100000000 : Phongsathon Suriyo', 'In progress', '30'),
  createData(3, '3', '106','21/03/2019 09:03:02', '1003 - Carbapenem', 'C', '100000000 : Phongsathon Suriyo', 'In progress', '10'),
  createData(4, '4', '106','21/03/2019 09:03:02', '1004 - API and Other', 'D', '100000000 : Phongsathon Suriyo', 'Loaded', '5'),
  createData(5, '1', '102','20/03/2019 09:03:02', '1001 - Penicilin', 'A', '100000000 : Phongsathon Suriyo', 'Loaded', '15'),
  createData(6, '2', '102','20/03/2019 09:03:02', '1002 - Cephalosporin', 'A', '100000000 : Phongsathon Suriyo', 'Loaded', '45'),
];
