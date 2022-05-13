import Card from "../cards/Card"
import { FaSearch } from "react-icons/fa";

import SearchBar from "../SearchBar.js"
import { useState, useEffect, useCallback } from "react";


export default function CardSection({data, overwrite="Latest"}) {

    const [articles, setArticles] = useState([]);

    const saveDataInLocalStorage = (data) => {
        if(typeof window !== 'undefined') {
          // refresh data in localStorage
          localStorage.removeItem("data");
          localStorage.setItem('data', JSON.stringify(data))
        }
    }

    const onSearchSubmit = useCallback(async term => {
        const data = JSON.parse(localStorage.getItem('data'));
        const results = data.filter(article => article.title.toLowerCase().includes(term.toLowerCase()) 
        || article.subtitle.toLowerCase().includes(term.toLowerCase())
        || article.author.name.toLowerCase().includes(term.toLowerCase())
        );
        setArticles(results);
    }, []);

    const clearResults = useCallback(() => {
        setArticles(JSON.parse(localStorage.getItem("data")))
    }, []);

    const renderedArticles = articles.map(article => {
        return (
            <Card key={article._id} article={article} />
        )
    })


    return (
        <div id="latest" >
        {saveDataInLocalStorage(data)}
            <div >
                <h2 className="smallHeader lightestOrange">{overwrite}</h2>
                <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults} />
            </div>

            <div id="latest_articles">
                {renderedArticles}
            </div>

        </div>
    )
}