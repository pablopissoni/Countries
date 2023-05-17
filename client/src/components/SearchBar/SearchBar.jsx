import { useState  } from "react";

function SearchBar () {
    const [nombre, setNombre] = useState('');

    const handleChange = (event) => {
        setNombre(event.target.value);
    
    }

    return (
        <div>
            <input placeholder="Pais..." type="search" value={nombre} onChange={handleChange} />
            <button onClick={() => {setNombre('')}}>Buscar</button>
        </div>
    )
    
}

export default SearchBar;