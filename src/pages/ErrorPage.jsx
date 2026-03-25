// Сторінка помилок: підключена в router як errorElement, отримує помилку маршруту з контексту.
import { isRouteErrorResponse, useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
  // Остання помилка з навігації / loader (наприклад Response 404).
  const error = useRouteError()
  const is404 =
    isRouteErrorResponse(error) && error.status === 404

  return (
    <div className="error-page">
      <h1>{is404 ? '404 — сторінку не знайдено' : 'Щось пішло не так'}</h1>
      <p>
        {is404
          ? 'За цим посиланням немає сторінки. Перевірте адресу або поверніться на головну.'
          : isRouteErrorResponse(error)
            ? `${error.status} ${error.statusText || ''}`.trim()
            : error instanceof Error
              ? error.message
              : 'Сталася несподівана помилка.'}
      </p>
      <p>
        {/* Link — клієнтський перехід на головну без повного перезавантаження сторінки */}
        <Link to="/" className="error-page__link">
          На головну
        </Link>
      </p>
    </div>
  )
}
