// ** React Imports
import { lazy } from 'react';

const Market attendantAppRoutes = [
  {
    path: 'my-shop',
    component: lazy(() => import('views/market.attendant-views/order')),
  },
];

export default Market attendantAppRoutes;
