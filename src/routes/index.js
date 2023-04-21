import Home from '~/pages/Home';
import Form from '~/pages/Form';
import WeeklyOutfit from '~/pages/WeeklyOutfit';

// Public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/form-input', component: Form },
  { path: '/weekly-outfit', component: WeeklyOutfit },
  { path: '/form', component: Form, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
