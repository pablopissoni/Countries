import React from 'react';
import Style from './Card.module.css';
import { Link } from 'react-router-dom';


export default function Card({id, img, name, continent}) {
  return (
    <div className = {Style.card}>

      <Link to={`/countries/${id}`}>
        <img src={img} alt="Imagen del pais" />
      </Link>
        <h3>{name}</h3>

        <h4>{continent}</h4>

    </div>
  )
}
