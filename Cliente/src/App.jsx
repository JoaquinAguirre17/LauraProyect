import './App.css';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import Form from './Components/FormComponents/Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavarComponent from './Components/NavarComponent/NavarComponent';
import ContactoComponent from './Components/ContactoComponent/ContactoComponent';
import FooterComponent from './Components/FooterComponen/FooterComponent';

function App() {
  return (
    <>
      <Router>
        <NavarComponent />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path='/contacto' element={<ContactoComponent />} />
            <Route path="/Turnos" element={<Form />} />
          </Routes>
        </div>
      </Router>
      <FooterComponent/>
    </>
  );
}

export default App;
