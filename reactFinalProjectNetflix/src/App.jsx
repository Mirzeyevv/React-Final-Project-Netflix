import React from 'react'
import Landing from './landing/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './locales/i18n';
import Login from './login/login';
import Register from './register/Register';
import HomePage from './homepage/HomePage';


const App = () => {
  
 

  return (
    <div className='bg-black mx-auto h-full min-h-screen w-full transition duration-300 ease-in-out overflow-hidden'>
      
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Landing/>}></Route>
          <Route path='login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/home' element={<HomePage/>}></Route>

        </Routes>
      </BrowserRouter>
      

       
    </div>
  )
}

export default App
