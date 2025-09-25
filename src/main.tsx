import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import './styles/globals.css'
import './i18n'

const root = document.getElementById('root')

createRoot(root!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
