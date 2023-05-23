import { useState  } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";
import Style from './SearchBar.module.css';


function SearchBar ({currentPage, setCurrentPage}) {
    const [nombre, setNombre] = useState('');
    const dispatch = useDispatch();
    

    const handleChange = (event) => {
        setNombre(event.target.value);
    }

    const handleSubmit = () => {
        if (nombre.length) {
          dispatch(getByName(nombre)); //* Termina modificando el Sorting con los nombres que coinciden 
          setNombre('');
            setCurrentPage(1);
        }
      };

    return (
        <div className={Style.searchContainer}>
            <input placeholder="Pais..." type="search" value={nombre} onChange={handleChange} className={Style.searchInput}/>
            <button type="submit" onClick={(event) => handleSubmit(event)} className={Style.searchButton}>Buscar</button>
        </div>
    )
    
}

export default SearchBar;