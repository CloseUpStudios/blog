import { useEffect, useState } from "react";
import Ripples from "react-ripples";
import { FaSearch } from "react-icons/fa";

const SearchBar  = ({ onSearchSubmit, clearResults, initTerm }) => {
    
    const [term, setTerm] = useState(initTerm);
    const [debounceTerm, setDebounceTerm] = useState(term);

    useEffect(() => {
        const timer = setTimeout(() => setTerm(debounceTerm), 100);
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
        <div id="searchWrapper" className="searchViewWrapper searchWrapper">
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
                </form>
            </div>
        </div>
    )
}

export default SearchBar;