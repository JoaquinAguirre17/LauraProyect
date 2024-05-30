import { useState } from 'react'
import './App.css'
import Navar from './Components/NavarComponent/NavarComponent'
import HomeComponent from './Components/HomeComponent/HomeComponent'

function App() {


  return (
    <>
      <Navar />
      <div className='container'>
        <HomeComponent/>
      </div>


    </>
  )
}

export default App
