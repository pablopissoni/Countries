import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

//* Componentes----------------
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Nav from './components/Nav/Nav';



function App() {

  const {pathname} = useLocation(); //* Para saber la URL actual "location.pathname" hice destructurin de la variable "useLocation"


  return (
    <div className="App">
      { pathname !== "/" && <Nav/>} {/* Se muestra siempre y cuando no este en la pagina de LandingPage */ }
      <Routes>
        <Route path = "/" element={<LandingPage/>}/>
        <Route path= "/home" element={<Home/>}/>
        <Route path = '/detail' element={<Detail/>} />
      </Routes>
      <h1>Soy un H1 en APP</h1>
    </div>
  );
}

export default App;
