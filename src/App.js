import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import CheckOut from './components/CheckOut/CheckOut';
import Course from './components/Course/Course';
import Courses from './components/Courses/Courses';
import FAQ from './components/FAQ/FAQ';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/routes/PrivateRoute';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: '/course/:id',
          element: <Course></Course>,
          loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)

        },

        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/checkout/:id',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },

      ]
    },
    {
      path: '*',
      element: <h1 className='text-amber-500 mt-5 text-4xl font-bold text-center'>Route Not Found. Code: 404</h1>
    },
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
