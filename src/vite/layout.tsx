import { Link, Outlet } from 'react-router'
import { componentPages } from './constants'

export function RootLayout() {
  return (
    <div>
      <nav
        style={{
          top: 0,
          position: 'sticky',
          padding: '1rem',
          backgroundColor: '#fff',
          borderBottom: '1px solid #ccc',
          marginBottom: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              fontWeight: 'bold',
              color: '#333',
            }}
          >
            Home
          </Link>
          {componentPages.map(({ path }) => (
            <Link
              key={path}
              to={path}
              style={{
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                backgroundColor: '#f5f5f5',
                borderRadius: '4px',
                color: '#333',
                textTransform: 'capitalize',
              }}
            >
              {path.replace('/', '')}
            </Link>
          ))}
        </div>
      </nav>
      <div style={{ padding: '0 1rem' }}>
        <Outlet />
      </div>
    </div>
  )
}
