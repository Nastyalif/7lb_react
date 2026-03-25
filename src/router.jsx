import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

function notFoundLoader() {
  throw new Response('', { status: 404, statusText: 'Not Found' })
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <Contact /> },
      {
        path: '*',
        loader: notFoundLoader,
        element: <div hidden aria-hidden="true" />,
      },
    ],
  },
])
