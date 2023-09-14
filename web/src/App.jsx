import React, { useState, useEffect } from 'react'
import { AppContext } from './lib/contextLib'
import Landing from './pages/Landing'
import Account from './pages/Account'
import Purchase from './pages/Purchase'
import Subscribe from './pages/Subscribe'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import { Auth } from 'aws-amplify'
import Dashboard from './pages/Dashboard'
import { onError } from './lib/errorLib'

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(true)

  useEffect(() => {
    onLoad()
  }, [])

  async function onLoad() {
    try {
      await Auth.currentSession()
      userHasAuthenticated(true)
    } catch (e) {
      if (e !== 'No current user') {
        onError(e)
      }
    }

    setIsAuthenticating(false)
  }

  return (
    !isAuthenticating && (
      <div>
        <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
          <Nav />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/account' element={<Account />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/purchase' element={<Purchase />} />
            <Route path='/subscribe' element={<Subscribe />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </AppContext.Provider>
      </div>
    )
  )
}

export default App
