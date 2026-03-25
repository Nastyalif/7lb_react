// Загальний макет сайту: навігація залишається, змінюється лише вміст через Outlet.
import { NavLink, Outlet } from 'react-router-dom'
import './Layout.css'

// NavLink передає в className функцію: isActive — true, якщо посилання веде на поточний маршрут (для підсвітки пункту меню).
const navClass = ({ isActive }) =>
  isActive ? 'nav-link nav-link--active' : 'nav-link'

export default function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <p className="site-brand">Портфоліо фотографа</p>
        <nav className="site-nav" aria-label="Головна навігація">
          {/* end: для "/" підсвічується лише точне співпадіння, а не всі шляхи */}
          <NavLink to="/" end className={navClass}>
            Головна
          </NavLink>
          <NavLink to="/portfolio" className={navClass}>
            Портфоліо
          </NavLink>
          <NavLink to="/services" className={navClass}>
            Послуги
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Зв&apos;язатися зі мною
          </NavLink>
        </nav>
      </header>
      <main className="site-main">
        {/* Тут React Router підставляє компонент поточної дочірньої сторінки */}
        <Outlet />
      </main>
      <footer className="site-footer">
        <small>Лабораторна робота №7 · React Router v7</small>
      </footer>
    </div>
  )
}
