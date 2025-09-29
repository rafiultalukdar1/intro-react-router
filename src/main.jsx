import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './component/Root/Root.jsx';
import Home from './component/Home/Home.jsx';
import About from './component/About/About.jsx';
import Gallery from './component/Gallery/Gallery.jsx';
import Blog from './component/Blog/Blog.jsx';
import Contact from './component/Contact/Contact.jsx';
import Users from './component/Users/Users.jsx';
import UsersDetails from './component/UsersDetails/UsersDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'about', Component: About},
      {path: 'gallery', Component: Gallery},
      {path: 'blog', Component: Blog},
      {path: 'contact', Component: Contact},
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'users/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UsersDetails
      }
    ]
  },
  {
    path: '*',
    element: <div className='container text-center'><h1>Not Fount: 404 Status</h1></div>
  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
