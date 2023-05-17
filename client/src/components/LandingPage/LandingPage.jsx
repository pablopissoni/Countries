//* "raftc" o "RFC" comando para crear componente
// import React from 'react'
import React from 'react'
import { Link } from 'react-router-dom'



export default function LandingPage() {
  return (
    <div>
      <Link to = '/home' ><button>Home</button></Link>
      <div>Bienvenido a conocer todos los paises</div>
    </div>
  )
}

