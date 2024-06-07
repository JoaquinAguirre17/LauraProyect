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
}

export default App;
