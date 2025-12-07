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
import { Sidebar } from '@/components/ui/Sidebar.tsx'
import { FloatingMenu } from './components/ui/FloatingMenu'
import { Profile } from './components/ui/Components'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10">
      <Sidebar />
      <FloatingMenu />
      <Profile />
      <App />
    </div>
  </StrictMode>,
)
