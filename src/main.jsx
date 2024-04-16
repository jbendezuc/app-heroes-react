import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter,HashRouter } from 'react-router-dom'

import './style.css'
import { HeroesApp } from './HeroesApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
       <HeroesApp />
    </HashRouter>
  </React.StrictMode>,
)
