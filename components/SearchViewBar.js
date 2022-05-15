import { useEffect, useState } from "react";

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
        <div id="searchWrapper" className="searchViewWrapper">
            <input
                type="text"
                placeholder="Search by Title, Author, Tags, Category or Subtitle"
                value={debounceTerm}
                onChange={e => setDebounceTerm(e.target.value)}
                className={"searchComp"}
                autoComplete="off"
            />
            </div>
    )
}

export default SearchBar;