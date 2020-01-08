import NotFoundPage from 'containers/NotFoundPage/Loadable';

import samplingRoutes from './samplingRoutes';
import dispensingRoutes from './dispensingRoutes';
import otherRoutes from './otherRoutes';

const definitions = [
  ...samplingRoutes,
  ...dispensingRoutes,
  ...otherRoutes,
  {
    key: 'notFound',
    path: '',
    component: NotFoundPage,
  },
];

export default {
  create: () => definitions,
};