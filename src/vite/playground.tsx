import { useRef, useState } from 'react'
import { RenderEmail } from '../render/render-email'
import { zodEmailNodeSchema } from '../schema'
import { TEmailNodeUnion } from '../schema/types.t'

export function Playground() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [error, setError] = useState<string | null>(null)

  const [jsonValue, setJsonValue] = useState('[]')
  const [parsedValue, setParsedValue] = useState<TEmailNodeUnion[]>([])

  function handleJsonChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setJsonValue(e.target.value)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      try {
        const parsed = JSON.parse(e.target.value)
        if (!Array.isArray(parsed)) {
          throw new Error('JSON must be an array of email nodes')
        }

        const validated = zodEmailNodeSchema.array().parse(parsed)
        setParsedValue(validated)
        setError(null)
      } catch (err) {
        console.error(err)
        setError(err instanceof Error ? err.message : 'Invalid JSON')
      }
    }, 500)
  }

  return (
    <div
      style={{
        display: 'flex',
        height: 'calc(100vh - 64px)',
        gap: '1rem',
        background: '#f8f9fa',
      }}
    >
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2 style={{ margin: 0, fontSize: '1.2rem' }}>JSON Editor</h2>
          {error && (
            <span
              style={{
                color: '#dc3545',
                fontSize: '0.85rem',
                background: '#f8d7da',
                padding: '2px 8px',
                borderRadius: '4px',
                border: '1px solid #f5c6cb',
              }}
            >
              {error}
            </span>
          )}
        </div>
        <textarea
          value={jsonValue}
          onChange={handleJsonChange}
          placeholder="Paste your email JSON here (e.g., [])"
          style={{
            flex: 1,
            padding: '1rem',
            borderRadius: '8px',
            border: `1px solid ${error ? '#dc3545' : '#e1e5e9'}`,
            fontFamily:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            fontSize: '14px',
            lineHeight: '1.5',
            resize: 'none',
            outline: 'none',
            boxShadow: error
              ? '0 0 0 2px rgba(220, 53, 69, 0.1)'
              : '0 2px 4px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.2s ease',
          }}
          spellCheck={false}
        />
      </div>

      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Preview</h2>
        <div
          style={{
            flex: 1,
            background: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #e1e5e9',
            overflow: 'auto',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
            position: 'relative',
          }}
        >
          {error && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(255, 255, 255, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1,
                backdropFilter: 'blur(2px)',
              }}
            >
              <div style={{ textAlign: 'center', color: '#666' }}>
                <p>Fix JSON errors to update preview</p>
              </div>
            </div>
          )}
          <RenderEmail
            body={parsedValue}
            shouldRenderOnlyMain
            config={{ maxWidth: '600px' }}
          />
        </div>
      </div>
    </div>
  )
}
