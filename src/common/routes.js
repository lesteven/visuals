import makeRouteObject from './utils/makeRouteObject';
import HomePage from './views/home/HomePage';
import AboutPage from './views/about/AboutPage';
import ProjectsPage from './views/projects/ProjectsPage';


const prefix = '';
const exactTrue = true;
const exactFalse = false;

const homeURL = '/';
const homeTitle = 'Home';

const aboutURL = '/about';
const aboutTitle = 'About';

const projectsURL = '/projects';
const projectsTitle = 'Projects';


const routes = {
  routes: [
    makeRouteObject(
      prefix,
      homeURL,
      HomePage,
      exactTrue,
      homeTitle,
    ),
    makeRouteObject(
      prefix,
      projectsURL,
      ProjectsPage,
      exactTrue,
      projectsTitle,
    ),
    makeRouteObject(
      prefix,
      aboutURL,
      AboutPage,
      exactTrue,
      aboutTitle,
    ),
  ],
};


export default routes;
