import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Fabricjs from './Fabricjs';
import LoginPage from './Login';
import SignUp from './SignUp';
import CreateTeamPage from './CreateTeam';
import ColorPicker from './colorPicker';
import MainInterface from './MainInterface';
import MainInterface2 from './MainInterface2';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <h1>Home</h1>
        <Link to="about">Fabricjs</Link>
        
       
  
        <div style={{ marginTop: '20px' }}><LoginPage /></div>
        <div style={{ marginTop: '20px' }}><SignUp /></div>
         
       <div style={{ marginTop: '20px' }}>
        <MainInterface/>
      </div>

      <div style={{ marginTop: '20px' }}>
        <MainInterface2/>
      </div>
        
        <div style={{ marginTop: '20px' }}><CreateTeamPage /></div>
        <div style={{ marginTop: '20px' }}><ColorPicker /></div>
      </div>
    ),
  },
  {
    path: "about",
    element: <Fabricjs />
  },
]);

createRoot(document.getElementById("root") as any).render(
  <RouterProvider router={router} />
);
