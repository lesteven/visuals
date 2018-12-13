import makeRouteObject from '../../utils/makeRouteObject';
import PhotographyPage from './PhotographyPage';

const prefix = '/photography';
const exactTrue = true;
const exactFalse = false;

const slideUrl = '/:current';
const title = '';

const slideRoutes = {
  routes: [
    makeRouteObject(
      prefix,
      slideUrl,
      PhotographyPage,
      exactTrue,
      title,
    ),
  ]
}



export default slideRoutes;
