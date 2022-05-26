import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Ripples from "react-ripples";

const SearchBarComp = ({ closenav, setIsActive, setData }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchClasses, setSearchClasses] = useState("btn searchButton");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm);
        if(searchTerm.length > 0) {
            window.location.href = "/search/" + searchTerm;
            closenav();
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

    // highlights search button when search term is entered
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        const term = e.target.value;

        term.length > 0 ? setIsActive(true) : setIsActive(false);

        term.length != 0 ? setSearchClasses("btn searchButton searchActive") : setSearchClasses("btn searchButton")
        
        if(term.length > 0) {
            const data = JSON.parse(localStorage.getItem('data'));
            const results = data.filter(article => 
            article.title.toLowerCase().includes(term.toLowerCase()) 
            || article.subtitle.toLowerCase().includes(term.toLowerCase())
            || article.author.name.toLowerCase().includes(term.toLowerCase())
            || article.tags.join("").toLowerCase().includes(term.toLowerCase())
            || article.category.title.toLowerCase().includes(term.toLowerCase()));
    
            setData(results);
        } else {
            // setData to all articles
            setData(JSON.parse(localStorage.getItem("data")));
        }
    }

    return (
        <div id="searchWrapper" className="searchWrapper">
            <div id="searchComp" className="searchComp">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input 
                        type="search"
                        placeholder="Search..."
                        onChange={(e) => handleChange(e)}
                        name="q"
                        autoComplete="off"
                    />
                    <Ripples>
                        <button className={searchClasses} type="submit" value="Submit" aria-label="Submit Search" > 
                            <FaSearch aria-hidden="true" /> 
                        </button>
                    </Ripples>
                </form>
            </div>
        </div>
    )
}

export default SearchBarComp;