// import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postActivity, getCountries } from '../../redux/actions';
import Style from './Create.module.css';
import { useNavigate } from 'react-router-dom';


export default function Create() {
  const navigate = useNavigate();
    let countries = useSelector((state) => state.countries);
    let dispatch = useDispatch();

    const [create, setCreate] = useState({
        name: "",
        difficulty: "",
        duration: "" || null, //* Si no se pasa duracion queda en NULL
        season: "",
        countriesID: [],
        // flags: ''
      });

  //* Validaciones -------------------------
  const [error, setError] = useState({});
  function validation (create) {
    let errors = {};
    if (!create.name || !/^[A-Za-z\s]{2,30}$/.test(create.name )) errors.name = "Se requiere un nombre valido";

    if (!create.difficulty) errors.difficulty = "Selecciona la dificultad";

    if ( create.duration > 1000) errors.duration = "No debe pasar de 1000"; //! Duracion no es obligatorio

    if (!create.season) errors.season = "Selecciona una temporada";

    if (!create.countriesID[0]) errors.countriesID = "Selecciona algun Pais";

    setError(errors);
    // return Object.keys(errors).length === 0;
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
            // flags: [...create.flags, event.target.valor]
          });
        }
      };

      let countriesSorted = countries.sort((a, b) => a.name.localeCompare(b.name)); 
      //! REVISAR QUE HACE BIEN ^^^^^^^^^^^^^^^^
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
        //! REVISAR QUE HACE BIEN ^^^^^^^^^^^^^^^^

  // const handleSubmit = (event) => {
  //   dispatch(postActivity(create))
  //   event.preventDefault();
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    validation(create);
    dispatch(postActivity(create));
    dispatch(getCountries());
    setCreate({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countriesID: [],
    });
    navigate("/home");
    console.log(create);
  };

  return (
    <div className={Style.pageContainer}>
    <div className={Style.createContainer}>

        <form onSubmit={handleSubmit} className={Style.form}>
            <h2>Crear actividades</h2>

            <div>
                <label>Nombre*</label>
                <input type="text" name="name" onChange={handleInput} className={Style.inputField} />
                {error.name && <p>{error.name}</p>}
            </div>

            <div>
                <label>Dificultad*</label>
                <select
                  name="difficulty"
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
                  onChange={handleInput}
                  min={0}
                  max={1000}
                  className={Style.durationField}
                />
                {error.duration && <p>{error.duration}</p>}
            </div>

            <div>
                <label>Temporada*</label>
                <select name="season" onChange={handleInput} className={Style.selectField}>
                  <option value="">-- Opciones --</option>
                  <option value="Verano">Verano</option>
                  <option value="Otoño">Otoño</option>
                  <option value="Invierno">Invierno</option>
                  <option value="Primavera">Primavera</option>
                </select>
                {error.season && <p>{error.season}</p>}
            </div>

            <div>
                <label>Paises*</label>
                <select name="countriesID" onChange={handleSelect} className={Style.selectField}>
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
              {create.countriesID?.map((country, i) => (
                <span key={i} value={country}>
                  {country}
                  <button onClick={handleDelete} value={country} >
                    X
                  </button>
                </span>
              ))}
            </div>
            
            <button type="submit" disabled={Object.keys(error).length > 0} className={Style.submitButton}>
              Create
            </button>
        </form>

    </div>
    </div>
  )
}

