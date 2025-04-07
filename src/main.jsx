import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from "./Context/AuthProvider.jsx";

//  npm create vite@latest . -- --template react

createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <StrictMode>
        <App />
      </StrictMode>
      ,
    </AuthProvider>
)
