import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Navar from './Components/NavarComponent/NavarComponent'
import HomeComponent from './Components/HomeComponent/HomeComponent'
import FooterComponent from './Components/FooterComponen/FooterComponen'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navar />
        <div className='container'>

          <Routes>
            <Route exact path='/' element={<HomeComponent />}></Route>
            {/*
            <Route exact path='/detalle/:prodId' element={<ProducView />}></Route>
  <Route exact path='/categoria/:categoriaId' element={<ProductosComponent />}></Route>*/}
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>


    </>
  )
}

export default App
