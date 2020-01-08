/*
 * StatusBox Messages
 *
 * This contains all the text for the StatusBox component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.StatusBox';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the StatusBox component!',
  },
});
