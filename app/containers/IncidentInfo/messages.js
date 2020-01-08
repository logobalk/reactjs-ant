/*
 * IncidentInfo Messages
 *
 * This contains all the text for the IncidentInfo container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.IncidentInfo';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Sampling Material',
  },
  header2: {
    id: `${scope}.header2`,
    defaultMessage: 'Approval List',
  },
});
