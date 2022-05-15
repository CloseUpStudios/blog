import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Ripples from "react-ripples";

const SearchBarComp = ({ closenav }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchClasses, setSearchClasses] = useState("btn searchButton");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm);
        if(searchTerm.length > 0) {
            closenav();
            window.location.href = "/search/" + searchTerm;
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

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        e.target.value.length != 0 ? setSearchClasses("btn searchButton searchActive") : setSearchClasses("btn searchButton")
    }

    return (
        <div id="searchWrapper">
            <div id="searchComp">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input 
                        type="search"
                        placeholder="Search..."
                        onChange={(e) => handleChange(e)}
                        name="q"
                        autoComplete="off"
                    />
                    <Ripples>
                        <button className={searchClasses} type="submit" value="Submit" > 
                            <FaSearch /> 
                        </button>
                    </Ripples>
                </form>
            </div>
        </div>
    )
}

export default SearchBarComp;