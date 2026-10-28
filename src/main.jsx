import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import DetailedJob from './Components/DetailedJob/DetailedJob.jsx';

const router = createBrowserRouter([
{

  path: '/',
  element: <Root></Root>,
  errorElement: <ErrorPage></ErrorPage>, 
  children:[
    {
      path:'/',
      element: <Home></Home>
    },
    {
      path:'/applied',
      element: <AppliedJobs></AppliedJobs>
    },
    {
      path:'/job/:id',
      element: <DetailedJob></DetailedJob>,
      loader: () => fetch('jobs.json')
      
    }

  ]

}
]) 




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
