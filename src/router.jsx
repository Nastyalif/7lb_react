// Опис маршрутів SPA: шлях → який компонент показати, обробка помилок і «не знайдено».
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

// Loader спрацьовує перед рендером маршруту. Кидок Response з 404 дає змогу показати сторінку помилки через errorElement.
function notFoundLoader() {
  throw new Response('', { status: 404, statusText: 'Not Found' })
}

// createBrowserRouter використовує History API (адреса в рядку браузера без повного перезавантаження).
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // спільна оболонка: меню + місце для дочірніх сторінок (Outlet)
    errorElement: <ErrorPage />, 
    children: [
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <Contact /> },
      {
        path: '*', // усі невідомі шляхи під / — останній кандидат у списку
        loader: notFoundLoader, 
        element: <div hidden aria-hidden="true" />, 
      },
    ],
  },
])
