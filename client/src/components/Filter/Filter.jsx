import React from "react";
import { useDispatch, useSelector } from 'react-redux';
// import { getActivities } from '../../redux/actions';
import  { continent, getSelectActivity } from '../../redux/actions';

export default function Filter({activities}) {

    //* Dispatch ---------------
    const dispatch = useDispatch();
    // dispatch(getActivities())
    // const activities = useSelector(state => state.activities); //!no trae las actividades, solo funciona desde HOME
    // console.log(activities)
    //* ------------------------
    // const handleContinent = (event) => {
    //     dispatch(continent(event.target.value))
    //     // setInput(1)
    //     // setCurrent(1)
    // }

    const handleActivity = (event) => {
        dispatch(getSelectActivity(event.target.value))
        // setInput(1)
        // setCurrent(1)
    }


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

        <label>Actividades</label>
        <select name="Activity" onChange={handleActivity}>
            <option value="all">All</option>
            {activities?.map((act, i) => 
                <option key={i} value={act.name}>{act.name}</option>)}
        </select>

    </div>
 );
}
