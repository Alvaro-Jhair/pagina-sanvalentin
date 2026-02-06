import { useState, useEffect } from 'react'
import Login from './components/Login'
import Proposal from './components/Proposal'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false) // Track if "Yes" was clicked

  useEffect(() => {
    if (isSuccess) {
      document.body.classList.remove('scroll-locked');
      document.body.classList.add('scroll-enabled');
    } else {
      document.body.classList.add('scroll-locked');
      document.body.classList.remove('scroll-enabled');
    }
  }, [isSuccess]);

  return (
    <div className={`app-container ${isSuccess ? 'scroll-enabled' : 'scroll-locked'}`}>
      {!isAuthenticated ? (
        <Login onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <Proposal onSuccess={() => setIsSuccess(true)} />
      )}
    </div>
  )
}

export default App
