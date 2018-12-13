import routes from './routes';
import slideRoutes from './views/photography/slideRoutes';

const masterRoutes = [
  ...routes.routes,
  ...slideRoutes.routes,
];

export default masterRoutes;
