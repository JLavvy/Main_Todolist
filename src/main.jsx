import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <GoogleOAuthProvider clientId='693789928417-ntbp03eq0e35jb3f05ies1en5mhr5nvu.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
    

  </React.StrictMode>,
)
