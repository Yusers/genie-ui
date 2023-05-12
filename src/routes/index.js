import Home from '~/pages/Home';
import Form from '~/pages/Register';
import WeeklyOutfit from '~/pages/WeeklyOutfit';
import Community from '~/pages/Community';
import Register from '~/pages/Register';
import Outfited from '~/pages/WeeklyOutfit/Outfited';
import Login from '~/pages/Register/Login';
import About from '~/pages/About';

// Public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/community', component: Community },
  { path: '/about', component: About },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/weekly-outfit', component: WeeklyOutfit },
  { path: '/weekly-outfit/ur-outfit', component: Outfited },
  { path: '/form', component: Form, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
