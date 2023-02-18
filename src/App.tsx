
import { createBrowserRouter } from 'react-router-dom';
import { Outlet, RouterProvider } from 'react-router';
import 'antd/dist/reset.css';

import Home from './smart-components/Home';
import Contact from './smart-components/Contact';
import Sickness from './smart-components/Sickness';
import Layout from './dumb-components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/contact', element: <Contact /> },
      {
        path: '/sickness',
        element: <Outlet />,
        children: [
          { path: '', element: <>Bruh</>},
          { path: ':name', element: <Sickness /> }
        ]
      }
    ]
  }
], { basename: '/inside-out' });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
