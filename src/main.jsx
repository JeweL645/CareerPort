import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';

const router = createBrowserRouter([
{

  path: '/',
  element: <Root></Root>,
  children:[
    {
      path:'/',
      element: <Home></Home>
    }
  ]

}
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
