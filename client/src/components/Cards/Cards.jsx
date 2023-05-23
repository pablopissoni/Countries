
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions';
import Card from '../Card/Card';
import Paginado from '../Paginado/Paginado';
import Filter from '../Filter/Filter';
import Style from './Cards.module.css'





export default function Cards({currentPage, setCurrentPage}) {
    
    //* Dispatch --------------
    const dispatch = useDispatch()
    const sorting = useSelector(state => state.sorting)
    //* -----------------------
    
    //* Paginacion -------------
    const countriesPorPagina = 10; // Cantidad de paises por pagina
    // const [currentPage, setCurrentPage] = useState(1); // currentPage es mi N* de pagina
    
    const indexUltimoPais = currentPage * countriesPorPagina; // Indice del ultimo pais de la pagina
    const indexPrimerPais = indexUltimoPais - countriesPorPagina; // Indice del primer pais de la pagina
    const paisesPorPagina = sorting.slice(indexPrimerPais, indexUltimoPais); // Paises por pagina
    //* -----------------------
    
    
    //? Me carga los paises principales
    useEffect(() => {        
        dispatch(getCountries());
        
      },[dispatch]);
    
    
  return (
    <div>
        <Filter setCurrentPage={setCurrentPage}/>
        <div className={Style.cards}>
            {paisesPorPagina.map((pais,i) => (
                <Card
                    key= {i}
                    id={pais.id}
                    img= {pais.img}
                    name= {pais.name}
                    continent= {pais.continent}
                />
            ))}
        </div>
        <div className={Style.paginationContainer}>
            <Paginado 
                sorting={sorting} 
                setCurrentPage={setCurrentPage}
                countriesPorPagina={countriesPorPagina}
                currentPage={currentPage}
            />
        </div>
    </div>
  )
}
