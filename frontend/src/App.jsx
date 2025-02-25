import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UserSignin from './pages/UserSignin'
import UserSignup from './pages/UserSignup'
import CaptainSignin from './pages/CaptainSignin'
import CaptainSignup from './pages/CaptainSignup'

const App = () => {
  return (
    <div  >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserSignin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<CaptainSignin/>}/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
      </Routes>
    </div>
  )
}

export default App
