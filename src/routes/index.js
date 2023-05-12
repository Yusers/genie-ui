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
  { path: '/genie-ui/', component: Home },
  { path: '/genie-ui/community', component: Community },
  { path: '/genie-ui/about', component: About },
  { path: '/genie-ui/register', component: Register },
  { path: '/genie-ui/login', component: Login },
  { path: '/genie-ui/weekly-outfit', component: WeeklyOutfit },
  { path: '/genie-ui/weekly-outfit/ur-outfit', component: Outfited },
  { path: '/genie-ui/form', component: Form, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
