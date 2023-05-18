import React from "react";
import Style from "./Paginado.module.css"

export default function Paginado({sorting, setCurrentPage, countriesPorPagina, currentPage}) {


  const totalPages = Math.ceil(sorting.length / countriesPorPagina); // Cantidad de paginas totales;

  const goToNextPage = () => {
    setCurrentPage((nextPage) => nextPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={Style.paginado}>
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        Anterior
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button key={index} onClick={() => goToPage(index + 1)} className={index + 1 === currentPage ? Style.active : null}>
          {index + 1 }
        </button>
      ))}
     
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        Siguiente
      </button>
      <hr/>
    </div>
  );
}
