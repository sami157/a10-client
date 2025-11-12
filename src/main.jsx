import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import FindPartners from './pages/FindPartners';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthProvider from './provider/AuthProvider.jsx';
import Signup from './pages/Signup.jsx';
import Profile from './pages/Profile.jsx'
import PartnerProfile from './pages/PartnerProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/find-partners",
        element: <FindPartners />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: '/partner-profile',
        element: <PartnerProfile />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);