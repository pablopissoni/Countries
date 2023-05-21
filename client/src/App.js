import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

//* Componentes----------------
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Nav from './components/Nav/Nav';
import Create from './components/Create/Create';
import { useState } from 'react';


function App() {

  const {pathname} = useLocation(); //* Para saber la URL actual "location.pathname" hice destructurin de la variable "useLocation"

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="App">
      { pathname !== "/" && <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} pathname={pathname}/>} {/* Se muestra siempre y cuando no este en la pagina de LandingPage */ }
      <Routes>
        <Route path = "/" element={<LandingPage/>}/>
        <Route path= "/home" element={<Home currentPage={currentPage} setCurrentPage={setCurrentPage}/>}/>
        <Route path = '/countries/:id' element={<Detail/>} />
        <Route path = '/activity' element={<Create/>} />
      </Routes>
    </div>
  );
}

export default App;
