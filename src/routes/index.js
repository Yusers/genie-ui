import Home from '~/pages/Home';
import Form from '~/pages/Form';

// Public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/form-input', component: Form },
  { path: '/form', component: Form, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
