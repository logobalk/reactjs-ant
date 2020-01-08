/*
 * WeightingModal Messages
 *
 * This contains all the text for the WeightingModal component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.WeightingModal';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Weighting Process',
  },
  gross: {
    id: `${scope}.gross`,
    defaultMessage: 'Weighting Process (G, GLP)',
  },
  tare: {
    id: `${scope}.tare`,
    defaultMessage: 'Weighting Process (N, T, G#, GLP)',
  },
  statistics: {
    id: `${scope}.statistic`,
    defaultMessage: 'Weighting Process (Statistics, GLP)',
  },
});
