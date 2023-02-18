import React from 'react';
import 'antd/dist/reset.css';

import Home from './smart-components/Home';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Sickness from './smart-components/Sickness';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/sickness', element: <Sickness /> }
]);

function App() {
  return <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>;
}

export default App;
