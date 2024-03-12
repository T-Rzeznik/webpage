import * as React from "react";
import { createRoot } from "react-dom/client";
import Fabricjs from "./Fabricjs";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import LoginPage from "./Login"
import SignUp from "./SignUp"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Home</h1>
        <Link to="about">Fabricjs</Link>
        
        <div style={{ marginTop: '20px' }}><LoginPage /></div>
        <div style={{ marginTop: '20px' }}><SignUp /></div>
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
