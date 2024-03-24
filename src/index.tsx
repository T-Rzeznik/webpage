// index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Fabricjs from './Fabricjs';
import LoginPage from './Login';
import SignUp from './SignUp';
import CreateTeamPage from './CreateTeam';
import ColorPicker from './colorPicker';
import TopBar from './TopBar'; // New component
import MainSection from './MainSection'; // New component

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <TopBar />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 'calc(100vh - 100px)', // Adjust for the height of TopBar
          }}
        >
          <h1>Home</h1>
          <Link to="about">Fabricjs</Link>

          <div style={{ marginTop: '20px' }}>
            <LoginPage />
          </div>
          <div style={{ marginTop: '20px' }}>
            <SignUp />
          </div>
          <div style={{ marginTop: '20px' }}>
            <CreateTeamPage />
          </div>
          <div style={{ marginTop: '20px' }}>
            <ColorPicker />
          </div>
          <MainSection />
        </div>
      </div>
    ),
  },
  {
    path: 'about',
    element: <Fabricjs />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
