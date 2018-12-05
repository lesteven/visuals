import makeRouteObject from './utils/makeRouteObject';
import HomePage from './views/home/HomePage';
import AboutPage from './views/about/AboutPage';
import PhotographyPage from './views/photography/PhotographyPage';
import ContactPage from './views/contact/ContactPage';

const prefix = '';
const exactTrue = true;
const exactFalse = false;

const homeURL = '/';
const homeTitle = 'Home';

const aboutURL = '/about';
const aboutTitle = 'About';

const photographyURL = '/photography';
const photographyTitle = 'Photography';

const contactURL = '/contact';
const contactTitle = 'Contact';

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
      photographyURL,
      PhotographyPage,
      exactTrue,
      photographyTitle,
    ),
    makeRouteObject(
      prefix,
      aboutURL,
      AboutPage,
      exactTrue,
      aboutTitle,
    ),
    makeRouteObject(
      prefix,
      contactURL,
      ContactPage,
      exactTrue,
      contactTitle,
    ),
  ],
};


export default routes;
