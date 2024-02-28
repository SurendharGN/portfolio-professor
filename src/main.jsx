import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// importing react-router-dom
import { createBrowserRouter, RouterProvider, Route, BrowserRouter}from 'react-router-dom';

// importing the pages
import Books from './pages/Books.jsx';
import Career from './pages/Career.jsx';
import Projects from './pages/Projects.jsx';
import Conferences from './pages/Conferences.jsx';
import Education from './pages/Education.jsx';
import Experience from './pages/Experience.jsx';
import Journals from './pages/Journals.jsx';
import Membership from './pages/Membership.jsx';
import OtherAchievements from './pages/OtherAchievements.jsx';
import Patents from './pages/Patents.jsx';
import Workshop from './pages/Workshop.jsx';
import Papers from './pages/Papers.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
  },
  {
    path:"/education",
    element:<Education/>,
  },{
    path:"/career",
    element:<Career/>,
  },{
    path:"/patents",
    element:<Patents/>,
  },{
    path:"/workshops",
    element:<Workshop/>,
  },{
    path:"/books",
    element:<Books/>,
  },{
    path:"/projects",
    element:<Projects/>,
  },{
    path:"/papers",
    element:<Papers/>,
  },{
    path:"/conferences",
    element:<Conferences/>,
  },{
    path:"/experience",
    element:<Experience/>,
  },{
    path:"/membership",
    element:<Membership/>,
  },{
    path:"/journals",
    element:<Journals/>,
  },{
    path:"/otherAchievements",
    element:<OtherAchievements/>,
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    
  </React.StrictMode>,
)
