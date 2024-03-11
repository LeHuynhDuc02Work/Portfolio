import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Projects,  {loader as projectsLoader} from './Components/Projects';
import Profile, {loader as profileLoader} from './Components/Profile';
import ProjectDetail from './Components/ProjectDetail';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        loader: profileLoader,
        element: <Profile />,
      },
      {
        path: "/projects",
        loader: projectsLoader,
        element: <Projects />,
      },
      {
        path: "/project/:name",
        element: <ProjectDetail />,
      },
      
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
