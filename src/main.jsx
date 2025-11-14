import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import FindPartners from './pages/FindPartners';
import Login from './pages/Login';
import NotFound from './components/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthProvider, { AuthContext } from './provider/AuthProvider.jsx';
import Signup from './pages/Signup.jsx';
import PartnerProfile from './pages/PartnerProfile.jsx';
import UserProfile from './pages/UserProfile.jsx';
import Home from './pages/Home.jsx';
import axios from 'axios';
import ProfileData from './pages/ProfileData.jsx';
import MyConnections from './pages/MyConnections.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => axios.get('http://localhost:3000/study-partners/top')
      },
      {
        path: "/find-partners",
        element: <FindPartners />,
        loader: () => axios.get('http://localhost:3000/study-partners')
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
        Component: <PrivateRoute><UserProfile /></PrivateRoute>
      },
      {
        path: '/partner-profile',
        element: <PrivateRoute><PartnerProfile /></PrivateRoute>
      },
      {
        path: '/partner-profile/:id',
        element: <PrivateRoute><ProfileData /></PrivateRoute>,
        loader: async ({ params }) => {
          const res = await axios.get(`http://localhost:3000/study-partners/find/${params.id}`);
          return res.data;
        },
      },
      {
        path: '/my-connections/:email',
        element: <PrivateRoute><MyConnections/></PrivateRoute>,
        loader: async ({params}) => {
          const res = await axios.get(`http://localhost:3000/partner-requests/sent/${params.email}`)
          return res.data
        }
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