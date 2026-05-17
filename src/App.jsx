import { useState } from 'react'
import Shop from './components/Shop'
import Home from './components/Home'
import AdminPortal from './components/AdminPortal'
import { SmoothieProvider } from './useContext/SmoothieContext'
import './App.css'

function App() {
  

  return (
    <>
      <SmoothieProvider>
        Welcome
        <Home/>
        <Shop/>
        <AdminPortal/>
      </SmoothieProvider>
    </>
  )
}

export default App
