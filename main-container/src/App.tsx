import React from 'react'
import './index.scss'
import { Routes, Route } from 'react-router-dom'
import RouteContainer from './components/container/RouteContainer'
import LoginPage from './pages/login/LoginPage'
import { useAppSelector } from './hooks/useReduxHooks'


const App = () => {
  const { user } = useAppSelector((state) => state.setting)
  console.log("🚀 ~ App ~ isLoggedIn:", user)
  const isLoggedIn = user?.token

  return (
    <Routes>
      {
        isLoggedIn
          ? <Route path="/*" element={<RouteContainer />} />
          : <Route path="/*" element={<LoginPage />} />
      }
      {!isLoggedIn && <Route path="/login" element={<LoginPage />} />}
    </Routes>
  )
}


export default App