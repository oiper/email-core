import './index.css'

import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { App } from './app'
import { componentPages } from './constants'
import { RootLayout } from './layout'

const root = document.getElementById('root')

ReactDOM.createRoot(root!).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<App />} />

          {componentPages.map(({ path, element }) => (
            <Route key={path} path={path.toLowerCase().replace(' ', '-')} element={element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </>
)
