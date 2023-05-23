import React from 'react'
import Cards from '../Cards/Cards'
import Style from './Home.module.css'



export default function Home({currentPage, setCurrentPage}) {


  return (
    <div className={Style.home}>
      {/* <SearchBar currentPage={currentPage} setCurrentPage={setCurrentPage}/> */}
      {/* <Filter/> */}
      <Cards currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </div>
  )
}

