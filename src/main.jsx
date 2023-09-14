import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter, Outlet} from "react-router-dom"
import { RegisterDriver } from './Driver/RegisterDriver/RegisterDriver.jsx'
import { LookupVehicles } from './User/LookupVehicles/LookupVehicles.jsx'
import { TrackVechicle } from './User/TrackVechicle/TrackVechicle.jsx'
import SendLocation from './Driver/SendLocation/SendLocation.jsx'
import TypeOfUser from "./TypeOfUser.jsx";
const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path: "/bus-real",
        element:<TypeOfUser/>
      },
      {
        path:"/bus-real/driver/registerDriver",
        element:<RegisterDriver />
      },
      {
        path:"/bus-real/driver/sendLocation/:id",
        element:<SendLocation/>
      },
      {
        path:"/bus-real/user/lookupVehicle",
        element:<LookupVehicles />
      },
      {
        path:"/bus-real/user/trackVehicle/:id",
        element:<TrackVechicle />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  </React.StrictMode>,
)
