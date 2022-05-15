import SearchField from "react-search-field";

const SearchBarComp = () => {

    const searchArticle = (term) => {
        console.log(term);
        if(term.length > 0) {
            window.location.href = "/search/" + term;
        }
    }

    return (
        <div id="searchWrapper">
            <div id="searchComp">
                <SearchField 
                    placeholder="Search..."
                    onEnter={searchArticle}
                    onSearchClick={searchArticle}
                    classNames={"searchComp"}
                />
            </div>
        </div>
    )
}

export default SearchBarComp;