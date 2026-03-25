// Точка входу в застосунок: монтує React у DOM і підключає маршрутизатор.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './router.jsx'

// createRoot рендерить дерево компонентів усередині #root з index.html.
// RouterProvider отримує конфігурацію маршрутів і керує відображенням сторінок без перезавантаження.
// StrictMode вмикає додаткові перевірки в режимі розробки (не впливає на production).
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
