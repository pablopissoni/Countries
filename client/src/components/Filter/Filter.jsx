import React, { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import  { continent, deleteFilters, getActivities, getSelectActivity, getSort, population } from '../../redux/actions';
import Style from './Filter.module.css'

export default function Filter({setCurrentPage}) {

    //* Dispatch ---------------
    const dispatch = useDispatch();
    //* ------------------------

    const activities = useSelector(state => state.activities)

    useEffect(() => {
        dispatch(getActivities())
    },[dispatch])


    //* FUNCION DE ORDENAMIENTO ---------------
    const handleContinent = (event) => {
        dispatch(continent(event.target.value))
        // setInput(1)
        setCurrentPage(1)
    }

    const handleActivity = (event) => {
        dispatch(getSelectActivity(event.target.value))
        // setInput(1)
        setCurrentPage(1)
    }

    const handleSort = (event) => {
        dispatch(getSort(event.target.value))
        setCurrentPage(1)
    }

    const handlePopulation = (event) => {
        dispatch(population(event.target.value))
        setCurrentPage(1)
    }
    //* ------------------------^^^^^^^^^^

    //* FUNCION DE BORRADO ---------------
        //? todos los select pasan a 0, y se borran los filtros 
    const handleDelete = () => {
        const selects = document.querySelectorAll(".resetSelect");
        selects.forEach((select) => (select.selectedIndex = 0));
        dispatch(deleteFilters());
        setCurrentPage(1);
      }
    //* -------------------------------------------------------

  return (
    <div className={Style.filterContainer}>
        <div className={Style.filterRow}>
            <label>Orden</label>
            <select name="Sort" onChange={handleSort} className={`${Style.filterSelect} resetSelect`}>
                <option value="sort">Sort</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
        </div>

        <div className={Style.filterRow}>
            <label htmlFor="" >Population</label>
            <select name="Population"  onChange={handlePopulation} className={`${Style.filterSelect} resetSelect`}>
                <option value='population' >Population</option>
                <option value='high'>Highest (↑)</option>
                <option value='low'>Lowest (↓)</option>
            </select>
        </div>

        <div className={Style.filterRow}>
        <label>Continentes</label>
        <select name="Continent" onChange={handleContinent} className={`${Style.filterSelect} resetSelect`}>
            <option value="all">All</option>
            <option value="Africa">Africa</option>
            <option value="Antarctica">Antartica</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceania</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
        </select>
        </div>

        <div className={Style.filterRow}>
        <label>Actividades</label>
        <select name="Activity" onChange={handleActivity} className={`${Style.filterSelect} resetSelect`}>
            <option value="all">All</option>
            {activities?.map((act, i) => 
                <option key={i} value={act.name}>{act.name}</option>)}
        </select>
        </div>

        <div className={Style.filterRow}>
            <button onClick={handleDelete} className={Style.deleteButton}>Borrar filtros</button>
        </div>
    </div>
 );
}
