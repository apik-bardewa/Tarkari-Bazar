
import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import {Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Detail from './components/Detail'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Contact from './components/Contact'
function App() {
  return (
    <div className='bg-zinc-300'>
      <h1>Handling Conceptual Logic Only</h1>
       <Nav/>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/detail' element={<Detail/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element = {<SignUp/>}/>
       </Routes>
       <Hero />
    </div>
  )
}

export default App
