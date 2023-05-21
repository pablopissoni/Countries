import React from 'react'
import Cards from '../Cards/Cards'
import SearchBar from '../SearchBar/SearchBar'
import Filter from '../Filter/Filter';

export default function Home({currentPage, setCurrentPage}) {


  return (
    <div>
      {/* <SearchBar currentPage={currentPage} setCurrentPage={setCurrentPage}/> */}
      {/* <Filter/> */}
      <Cards currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

