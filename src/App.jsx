import { useState } from 'react'
import Shop from './components/Shop'
import Home from './components/Home'
import AdminPortal from './components/AdminPortal'
import { SmoothieProvider } from './useContext/SmoothieContext'
import {BrowserRouter, Routes, Route} from "react-router"
import './App.css'

function App() {
  

  return (
    <div id='container'>
      <SmoothieProvider>
        Welcome
        <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/adminPortal' element={<AdminPortal/>}/>
        </Routes>
        </BrowserRouter>
      </SmoothieProvider>
    </div>
  )
}

export default App
