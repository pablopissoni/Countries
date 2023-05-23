// import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postActivity } from '../../redux/actions';
import Style from './Create.module.css';



export default function Create() {
    let countries = useSelector((state) => state.countries);
    let dispatch = useDispatch();

    const [create, setCreate] = useState({
        name: "",
        difficulty: "",
        duration: "" || null, //* Si no se pasa duracion queda en NULL
        season: "",
        countriesID: [],
      });

  //* Validaciones -------------------------
  const [error, setError] = useState({});
  function validation (create) {
    let errors = {};
    if (!create.name || !/^[A-Za-z\s]{2,30}$/.test(create.name )) errors.name = "Se requiere un nombre valido";

    if (!create.difficulty) errors.difficulty = "Selecciona la dificultad";

    if ( create.duration > 1000) errors.duration = "No debe pasar de 1000"; 

    if (!create.season) errors.season = "Selecciona una temporada";

    if (!create.countriesID[0]) errors.countriesID = "Selecciona algun Pais";

    setError(errors);
  }
  useEffect(() => {
    validation(create);
  },[create]);
  //* -------------------------

      const handleInput = (event) => {
        setCreate({
          ...create,
          [event.target.name]: event.target.value,
        });
      }

      const handleSelect = (event) => {
        if (event.target.value !== "countries") {
          setCreate({
            ...create,
            countriesID: [...create.countriesID, event.target.value],
          });
        }
      };

      let countriesSorted = countries.sort((a, b) => a.name.localeCompare(b.name)); 
      //* Ordena alfabeticamente los paises
      
      const handleDelete = (event) => {
        event.preventDefault();
        setCreate({
          ...create,
          countriesID: create.countriesID.filter(
            (country) => country !== event.target.value
            ),
          });
      };
        //*  Elimina el pais seleccionado ^^^^^^^^^^^^^^^^

  const resetForm = () => {
    setCreate({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countriesID: [],
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validation(create);
    dispatch(postActivity(create));
    resetForm();
  };
  
  return (
    <div className={Style.pageContainer}>
    <div className={Style.createContainer}>

        <form onSubmit={handleSubmit} className={Style.form}>
            <h2>Crear actividades</h2>

            <div>
                <label>Nombre<span style={{color: "red"}}>*</span></label>
                <input type="text" name="name" value={create.name} onChange={handleInput} className={Style.inputField} />
                {error.name && <p>{error.name}</p>}
            </div>

            <div>
                <label>
                  Dificultad<span style={{color: "red"}}>*</span>
                </label>
                <select
                  name="difficulty"
                  value={create.difficulty}
                  onChange={handleInput}
                  className={Style.selectField}
                  >
                  <option value="">-- Nivel --</option>
                  <option value="1">⭐ ☆ ☆ ☆ ☆</option>
                  <option value="2">⭐⭐ ☆ ☆ ☆</option>
                  <option value="3">⭐⭐⭐ ☆ ☆</option>
                  <option value="4">⭐⭐⭐⭐ ☆</option>
                  <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
                {error.difficulty && <p>{error.difficulty}</p>}
            </div>

            <div>
                <label>Duracion</label>
                <input
                  type="number"
                  name="duration"
                  value={create.duration}
                  onChange={handleInput}
                  min={0}
                  max={1000}
                  className={Style.durationField}
                  />
                {error.duration && <p>{error.duration}</p>}
            </div>

            <div>
                <label>Temporada<span style={{color: "red"}}>*</span></label>
                <select name="season" onChange={handleInput} value={create.season} className={Style.selectField}>
                  <option value="">-- Opciones --</option>
                  <option value="Verano">Verano</option>
                  <option value="Otoño">Otoño</option>
                  <option value="Invierno">Invierno</option>
                  <option value="Primavera">Primavera</option>
                </select>
                {error.season && <p>{error.season}</p>}
            </div>

            <div>
                <label>Paises<span style={{color: "red"}}>*</span></label>
                <select name="countriesID" value={create.countriesID} onChange={handleSelect} className={Style.selectField}>
                  <option >-- Opciones --</option>
                  {countriesSorted?.map((event, i) => (
                    <option key={i} value={event.id}>
                      {event.name}
                    </option>
                  ))}
                </select>
                {error.countriesID && <p>{error.countriesID}</p>}
            </div>

            <div>
            {create.countriesID?.map((countryId, i) => {
              const selectedCountry = countries.find((country) => country.id === countryId);
              return (
                  <span key={i} value={countryId} className={Style.countryItem}>
                    {selectedCountry && selectedCountry.name}
                    <button onClick={handleDelete} value={countryId} className={Style.deleteButton}>
                      X
                    </button>
                  </span>
                );
              })}
            </div>
            
            <button type="submit" disabled={Object.keys(error).length > 0} className={Style.submitButton}>
              Crear
            </button>
        </form>

    </div>
    </div>
  )
}

