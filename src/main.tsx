/**
 * @copyright 2025 Orem Gitonga.
 * @license Apache-2.0
 */

/**
 * Node Modules
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/**
 * Styles
 */

import './index.css'

/**
 * Components
 */

import { App } from '@/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
