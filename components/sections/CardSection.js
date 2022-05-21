import Card from "../cards/Card"
import SearchBar from "../SearchBar.js"
import SectionHeaderWithSearch from "../SectionHeaderWithSearch";
import { useState, useCallback } from "react";

export default function CardSection({ data, overwrite="Latest" }) {
    const saveDataInLocalStorage = (data) => {
        if(typeof window !== 'undefined') {
          // refresh data in localStorage 
          localStorage.removeItem("data");
          localStorage.setItem('data', JSON.stringify(data))
        }
    }

    const [articles, setArticles] = useState([]);

    const onSearchSubmit = useCallback(async term => {
        const data = JSON.parse(localStorage.getItem('data'));
        const results = data.filter(article => 
        article.title.toLowerCase().includes(term.toLowerCase()) 
        || article.subtitle.toLowerCase().includes(term.toLowerCase())
        || article.author.name.toLowerCase().includes(term.toLowerCase())
        || article.tags.join("").toLowerCase().includes(term.toLowerCase())
        || article.category.title.toLowerCase().includes(term.toLowerCase())
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
            <div>
                <SectionHeaderWithSearch title={overwrite} withSearch={true} onSearchSubmit={onSearchSubmit} clearResults={clearResults} />
            </div>
            <div id="latest_articles">
                {renderedArticles}
            </div>
        </div>
    )
}