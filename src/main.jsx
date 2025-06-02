import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Search from './search.jsx'
import UserContextProvider from './components/constext.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/search', element: <Search /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>,
)
