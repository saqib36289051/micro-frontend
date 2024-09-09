import React from 'react'
import './index.scss'
// import store from 'main_container/store'
import { useAppSelector } from 'main_container/useReduxHooks'
import GrievenceDesk from './pages/GrievenceDesk'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const { user } = useAppSelector(state => state.setting)
  console.log("🚀 ~ App ~ user:", user)

  return (
    <>
      <Toaster />
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <GrievenceDesk />
      </div>
    </>
  )
}

export default App

