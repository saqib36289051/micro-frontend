import React from 'react'
import './index.css'
import AddGrievence from './pages/grievence/addGrievence'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import GrievenceDesk from './pages/grievence/grievenceDesk'

const App = () => {
  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/" element={<GrievenceDesk />} />
        <Route path="/add" element={<AddGrievence />} />
      </Routes>
    </div>
  )
}

export default App

