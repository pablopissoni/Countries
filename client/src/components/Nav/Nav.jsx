import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';


export default function Nav() {



  return (
    <div>
        <SearchBar/>
        <Link  to= '/home'><button>Todos los paises</button></Link>
        <Link to = '/activity' ><button>Crear actividad</button></Link>
        <Link to = '/' ><button>Inicio</button></Link>
    </div>
  )
}
