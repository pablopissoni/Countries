import { useDispatch, useSelector } from 'react-redux';
import React from "react";

export default function Filter() {

    //* Dispatch ---------------
    // const dispatch = useDispatch();
    // const sorting = useSelector(state => state.sorting);
    //* ------------------------



  return (
    <div>
        <label>Continentes</label>
        <select>
            <option value="all">All</option>
            <option value="africa">Africa</option>
            <option value="antartica">Antartica</option>
            <option value="asia">Asia</option>
            <option value="europa">Europa</option>
            <option value="oceania">Oceania</option>
            <option value="northAmerica">North America</option>
            <option value="southAmerica">South America</option>
        </select>

        <select>

        </select>


        <label>Actividad</label>
        
    </div>
 );
}
