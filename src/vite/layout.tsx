import { HiOutlineHome } from 'react-icons/hi2'
import { PiPlayDuotone } from 'react-icons/pi'
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
            backgroundColor:
              location.pathname === '/' ? '#e7f3ff' : 'transparent',
          }}
        >
          <HiOutlineHome />
        </Link>

        <Link
          to="/playground"
          style={{
            height: '2.25rem',
            width: '2.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            fontWeight: 'bold',
            borderRadius: '6px',
            color: location.pathname === '/playground' ? '#007bff' : '#333',
            backgroundColor:
              location.pathname === '/playground' ? '#e7f3ff' : 'transparent',
          }}
        >
          <PiPlayDuotone />
        </Link>
        {componentPages.map(({ path }) => {
          const transformedPath = path.toLowerCase().replace(' ', '-')
          const isActive = location.pathname === `/${transformedPath}`

          return (
            <Link
              key={path}
              to={transformedPath}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '2.25rem',
                textDecoration: 'none',
                paddingInline: '1rem',
                borderRadius: '6px',
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
