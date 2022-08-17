import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';

export const appRoutes = [
  { path: '', element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'contact', element: <Contact /> },
];
