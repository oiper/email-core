import { Link, Outlet, useLocation } from 'react-router'
import { componentPages } from './constants'

export function RootLayout() {
  const location = useLocation()

  return (
    <div>
      <nav
        style={{
          top: 0,
          position: 'sticky',
          padding: '1rem',
          backgroundColor: '#fff',
          borderBottom: '1px solid #ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: '100%',
          boxSizing: 'border-box',
          gap: '1rem',
        }}
      >
        <Link
          to="/"
          style={{
            height: '2.25rem',
            width: '2.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            fontWeight: 'bold',
            borderRadius: '6px',
            color: location.pathname === '/' ? '#007bff' : '#333',
            backgroundColor: location.pathname === '/' ? '#e7f3ff' : 'transparent',
          }}
        >
          <svg
            fill="none"
            width="1.25em"
            height="1.25em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 15L12 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
              <path
                d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
        </Link>

        {componentPages.map(({ path }) => {
          const isActive = location.pathname === `/${path}`
          return (
            <Link
              key={path}
              to={path}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '2.25rem',
                textDecoration: 'none',
                paddingInline: '1rem',
                borderRadius: '6px',
                textTransform: 'capitalize',
                color: isActive ? '#fff' : '#333',
                backgroundColor: isActive ? '#007bff' : '#f5f5f5',
              }}
            >
              {path.replace('/', '')}
            </Link>
          )
        })}
      </nav>

      <div style={{ padding: '1rem' }}>
        <Outlet />
      </div>
    </div>
  )
}
