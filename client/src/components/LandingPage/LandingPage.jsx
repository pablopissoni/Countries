import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../LandingPage/LandingPage.module.css'



export default function LandingPage() {
  return (
    <div className={Style.LandingPage}>
      <h1>Bienvenido a conocer todos los paises</h1>
      <Link to = '/home' ><button>Home</button></Link>
    </div>
  )
}

