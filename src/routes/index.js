import Home from '~/pages/Home';
import Form from '~/pages/Form';
import WeeklyOutfit from '~/pages/WeeklyOutfit';

// Public routes
const publicRoutes = [
  { path: '/genie-ui/', component: Home },
  { path: '/genie-ui/form-input', component: Form },
  { path: '/genie-ui/weekly-outfit', component: WeeklyOutfit },
  { path: '/genie-ui/form', component: Form, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
