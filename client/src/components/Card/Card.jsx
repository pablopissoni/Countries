import React from 'react';
import Style from './Card.module.css';
import { Link } from 'react-router-dom';


export default function Card({id, img, name, continent}) {
  return (
    <div className = {Style.card}>
        <img src={img} alt="Imagen del pais" />
        <h3>{name}</h3>
        <h4>{continent}</h4>
        <Link to={`/countries/${id}`}>Detalles</Link>

    </div>
  )
}
