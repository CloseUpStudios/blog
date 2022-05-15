import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar  = ({ onSearchSubmit, clearResults }) => {

    const expandSearch = () => {
        const search = document.getElementById("articleSearch");
        search.classList.toggle("expand");
    }
        
    const [term, setTerm] = useState("");
    const [debounceTerm, setDebounceTerm] = useState(term);

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
        <div id="searchWrapper">
            <FaSearch id="searchIcon" className="searchIcon" onClick={() => expandSearch()} />
            <div id="search">
                <input 
                id="articleSearch" 
                type="search" 
                placeholder="Articles, Subtitle, Authors"
                onChange={e => setDebounceTerm(e.target.value)}
                value={debounceTerm}
                autoComplete="off"
                ></input>
            </div>
        </div>
    )
}

export default SearchBar;