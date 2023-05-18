import { useState  } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";

function SearchBar () {
    const [nombre, setNombre] = useState('');
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setNombre(event.target.value);
    }

    const handleSubmit = () => {
        if (nombre.length) {
          dispatch(getByName(nombre)); //* Termina modificando el Sorting con los nombres que coinciden 
        }
      };

    return (
        <div>
            <input placeholder="Pais..." type="search" value={nombre} onChange={handleChange} />
            <button type="submit" onClick={(event) => handleSubmit(event)}>Buscar</button>
        </div>
    )
    
}

export default SearchBar;