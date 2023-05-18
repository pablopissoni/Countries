import React from 'react'
import Cards from '../Cards/Cards'
import SearchBar from '../SearchBar/SearchBar'
import Filter from '../Filter/Filter';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCountries, getActivities} from '../../redux/actions';

export default function Home() {

  //! COPIADO ---------------------
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  const sorting = useSelector((state) => state.sorting);

  useEffect(() => {
    if (!sorting[0]) {
      dispatch(getCountries());
    }
    if (!activities[0]) {
      dispatch(getActivities());
    }
  }, [dispatch, sorting, activities]);
  //! ---------------------

  return (
    <div>
      <SearchBar/>
      <Filter activities={activities}/>
      <Cards/>
    </div>
  )
}

