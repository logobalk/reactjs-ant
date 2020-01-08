import React from 'react';
import StatusBox from 'components/StatusBox';

const createData = (
  id,
  queue,
  summarizeDate,
  group,
  grade,
  summarizeBy,
  numOfInspection,
  status,
) => ({
  id,
  queue,
  summarizeDate,
  grade,
  group,
  summarizeBy,
  numOfInspection,
  status,
});

export const data = [
  createData(1, '1', '21/03/2019 09:03:02', '1001 - Penicilin', 'A', 'Phongsathon Suriyo', '6', <StatusBox type="warn" text="In process" />),
  createData(2, '2', '21/03/2019 09:03:02', '1002 - Cephalosporin', 'A', 'Phongsathon Suriyo', '2', <StatusBox type="success" text="Loaded" />),
  createData(3, '3', '21/03/2019 09:03:02', '1003 - Carbapenem', 'C', 'Phongsathon Suriyo', '3', <StatusBox type="success" text="Loaded" />),
  createData(4, '4', '21/03/2019 09:03:02', '1004 - API and Other', 'D', 'Phongsathon Suriyo', '10', <StatusBox type="warn" text="In process" />),
  createData(5, '1', '20/03/2019 17:45:33', '1001 - Penicilin', 'A', 'Phongsathon Suriyo', '3', <StatusBox type="warn" text="In process" />),
  createData(6, '2', '20/03/2019 17:45:33', '1002 - Cephalosporin', 'A', 'Phongsathon Suriyo', '4', <StatusBox type="warn" text="In process" />),
];
