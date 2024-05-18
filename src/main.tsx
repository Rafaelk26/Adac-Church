import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from 'react-hot-toast';

// Context
import { AuthProvider } from './context/Auth'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster 
      position='top-right'
      reverseOrder={false}
      containerClassName="custom-toaster"
      />
      <App />
    </AuthProvider>
  </React.StrictMode>,
)
