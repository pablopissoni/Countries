import React from 'react'
import { Link } from 'react-router-dom';
import Style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar';

export default function Nav({currentPage, setCurrentPage, pathname}) {
  


  return (
    <div className={Style.navContainer}>
      <Link to="/home" className={Style.navLink}>
        <button className={Style.navButton}>Todos los países</button>
      </Link>
      <Link to="/activity" className={Style.navLink}>
        <button className={Style.navButton}>Crear actividad</button>
      </Link>
      <Link to="/" className={Style.navLink}>
        <button className={Style.navButton}>Inicio</button>
      </Link>
      { pathname === '/home' && <SearchBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
  </div>
  )
}
