import React from 'react'
import './index.scss'
// import store from 'main_container/store'
import { useAppSelector } from 'main_container/useReduxHooks'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const { user } = useAppSelector(state => state.setting)
  return (
    <>
      <Toaster />
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <p>this is mfe1</p>
      </div>
    </>
  )
}

export default App

