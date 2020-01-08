/**
 *
 * Asynchronously loads the component for MaterialLoading
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
