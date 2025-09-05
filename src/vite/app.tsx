import { Link } from 'react-router'
import { componentPages } from './constants'

export function App() {
  return (
    <div>
      {componentPages.map(({ path }) => (
        <div key={path}>
          <h2>{path}</h2>
          <Link to={path}>Go to {path}</Link>
        </div>
      ))}
    </div>
  )
}
