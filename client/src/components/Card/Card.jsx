import React from 'react';
import Style from './Card.module.css';

export default function Card({img, name, continent}) {
  return (
    <div className = {Style.card}>
        <img src={img} alt="Imagen del pais" />
        <h3>{name}</h3>
        <h4>{continent}</h4>

    </div>
  )
}
