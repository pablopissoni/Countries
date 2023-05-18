import React from 'react'
import Style from './Detail.module.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCountriesById } from '../../redux/actions'


export default function Detail() {
  //* Dispatch y ejecutado
  const dispatch = useDispatch()
  const detail = useSelector(state => state.detail) //* Detalles del pais por el ID
  // const actividades = detail.activities             //! al usarlo asi falla al reiniciar la pagina
  const {id} = useParams() // accedo a los parametros de la ruta

  console.log(detail.activities)
  //* -----------------
  useEffect(() => {
    dispatch(getCountriesById(id))
  }, [dispatch, id])
  //* -----------------

  return (
    <div className={Style.detail}>
      <h4>Detail del id: {id}</h4>
      <h4>Nombre: {detail.name}</h4>
      <img src={detail.img} alt='Imagen del pais'/>
      <h4>Continente: {detail.continent}</h4>
      <h4>Capital: {detail.capital}</h4>
      <h4>Sub-Region: {detail.subregion? detail.subregion : 'Sin subregion'}</h4>
      <h4>Area: {detail.area? detail.area : 'Sin area'}</h4>
      <h4>Poblacion: {detail.population? detail.population : 'No hay datos'}</h4>
      <hr/>

      {detail.activities? detail.activities.map((act,i) => //! Revisar porque aveces da error y al comentarlo por un segundo se soluciona
        <div key={i}>
          <h4>Name: {act.name}</h4>
          <h4>Dificultad: {act.difficulty}</h4>
          <h4>Duracion: {act.duration}</h4>
          <h4>Season: {act.season}</h4>
          <br/>
        </div>) 
      : <h4>Sin actividades</h4>}
    
   </div>
  )
}
