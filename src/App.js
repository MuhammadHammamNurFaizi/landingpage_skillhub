import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from '../src/pages/Landing';
import Courses from '../src/pages/Courses'
import About from '../src/pages/About'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/> ,
  },
  { 
    path: "/about",
    element: <About/> ,
  },
  {
    path: "/courses",
    element: <Courses/> ,
  },
  {
    path: "/login",
    element: <Login/> ,
  },
  {
    path: "/signup",
    element: <Signup/> ,
  },
]);
function App() {
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
