import React from 'react'
import './index.scss'
import { useAppSelector } from './hooks/useReduxHooks'
import GrievenceDesk from './components/GrievenceDesk'

const App = () => {
  const { user } = useAppSelector(state => state.setting)
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <GrievenceDesk token={user?.token} />
    </div>
  )
}

export default App

