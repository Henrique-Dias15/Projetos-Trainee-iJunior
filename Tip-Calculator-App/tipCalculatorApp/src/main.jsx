import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Display from './components/display.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Display />
  </React.StrictMode>,
)
