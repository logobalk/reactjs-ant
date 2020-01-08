import React from 'react';
import StatusBox from 'components/StatusBox';

const createData = (
  id,
  groupPeriods,
  groupDate,
  groupBy,
  updatedDate,
  updatedBy,
  numOfInspectionLot,
  status,
) => ({
  id,
  groupPeriods,
  groupDate,
  groupBy,
  updatedDate,
  updatedBy,
  numOfInspectionLot,
  status,
});

export const data = [
  createData(1, '15/03/2019 - 20/03/2019', '21/03/2019 14:07:15', 'Phongsathon Suriyo','21/03/2019 14:07:15', '100000000 : Phongsathon Suriyo',  '20', <StatusBox type="warn" text="In process"/>),
  createData(2, '15/03/2019 - 15/03/2019', '16/03/2019 13:09:22', 'Phongsathon Suriyo','21/03/2019 14:07:15', '100000000 : Phongsathon Suriyo',  '10', <StatusBox type="warn" text="In process"/>),
  createData(3, '14/03/2019 - 14/03/2019', '14/03/2019 07:45:03', 'Phongsathon Suriyo','21/03/2019 14:07:15', '100000000 : Phongsathon Suriyo',  '65', <StatusBox type="success" text="Completed"/>),
];
