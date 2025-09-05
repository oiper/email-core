export function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8f9fa',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        padding: '2rem',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          color: '#333',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: '#1a1a1a',
          }}
        >
          Oiper Email Renderer
        </h1>
        <p
          style={{
            fontSize: '1.1rem',
            fontWeight: '400',
            marginBottom: '2rem',
            color: '#666',
            lineHeight: '1.6',
          }}
        >
          A powerful, flexible email component library for building beautiful, responsive email
          templates
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
          }}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '8px',
              padding: '1.5rem',
              border: '1px solid #e1e5e9',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            }}
          >
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#1a1a1a',
              }}
            >
              Component-Based
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: '1.5',
                margin: 0,
              }}
            >
              Build emails using reusable, customizable components
            </p>
          </div>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '8px',
              padding: '1.5rem',
              border: '1px solid #e1e5e9',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            }}
          >
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#1a1a1a',
              }}
            >
              Type-Safe
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: '1.5',
                margin: 0,
              }}
            >
              Fully typed with TypeScript for better developer experience
            </p>
          </div>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '8px',
              padding: '1.5rem',
              border: '1px solid #e1e5e9',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            }}
          >
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#1a1a1a',
              }}
            >
              Email-First
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: '1.5',
                margin: 0,
              }}
            >
              Optimized for email clients with proper fallbacks and compatibility
            </p>
          </div>
          <div
            style={{
              background: '#ffffff',
              borderRadius: '8px',
              padding: '1.5rem',
              border: '1px solid #e1e5e9',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            }}
          >
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#1a1a1a',
              }}
            >
              Responsive
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: '1.5',
                margin: 0,
              }}
            >
              Mobile-first design that works perfectly across all devices and screen sizes
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
