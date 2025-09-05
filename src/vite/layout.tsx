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
            textDecoration: 'none',
            fontWeight: 'bold',
            color: '#333',
          }}
        >
          <svg
            fill="none"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M12 15L12 18"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{' '}
              <path
                d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
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
      </nav>

      <div style={{ padding: '1rem' }}>
        <Outlet />
      </div>
    </div>
  )
}
