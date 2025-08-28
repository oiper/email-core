import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return <h1>Hello Vite + React + TypeScript + SWC 🚀</h1>
}

const root = document.getElementById('app')
if (!root) throw new Error('Root element not found')

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
