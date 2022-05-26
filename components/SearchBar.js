import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Ripples from "react-ripples";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SearchBar  = ({ onSearchSubmit, clearResults }) => {   
    const [term, setTerm] = useState("");
    const [debounceTerm, setDebounceTerm] = useState(term);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(debounceTerm.length > 0) {
            window.location.href = "/search/" + debounceTerm;
        } else {
            toast.error('Please enter a search value before trying to search.', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => setTerm(debounceTerm), 250);
        return () => clearTimeout(timer);
    }, [debounceTerm]);

    useEffect(() => {
        if(term !== "") {
            onSearchSubmit(term);
        } else {
            clearResults();
        }
    }, [term, clearResults, onSearchSubmit]);

    return (
        <div id="searchWrapper" className="searchWrapper">
            <div id="searchComp" className="searchComp">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input 
                        type="search"
                        id="articleSearch" 
                        placeholder="Search..."
                        onChange={e => setDebounceTerm(e.target.value)}
                        value={debounceTerm}
                        name="q"
                        autoComplete="off"
                    />
                    <Ripples>
                        <button className="btn searchButton" type="submit" value="Submit" aria-label="Submit Search" > 
                            <FaSearch aria-hidden="true" /> 
                        </button>
                    </Ripples>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;