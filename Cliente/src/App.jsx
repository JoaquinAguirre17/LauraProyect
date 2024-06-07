<<<<<<< HEAD
import './App.css';
import Navar from './Components/NavarComponent/NavarComponent';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import Form from './Components/FormComponents/Form'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/form" element={<Form />} />
                </Routes>
            </div>
        </Router>
    );
=======
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Navar from './Components/NavarComponent/NavarComponent'
import HomeComponent from './Components/HomeComponent/HomeComponent'
import FooterComponent from './Components/FooterComponen/FooterComponent'
import ContactoComponent from './Components/ContactoComponent/ContactoComponent'



function App() {


  return (
    <>
      <BrowserRouter>
        <Navar />
        <div className='container'>

          <Routes>
            <Route exact path='/' element={<HomeComponent />}></Route>
            <Route exact path='/Contacto' element={<ContactoComponent/>}></Route>
           
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>


    </>
  )
>>>>>>> 6c34bba31357fcb86a03bd9d80a78b9cb0d66ee3
}

export default App;
