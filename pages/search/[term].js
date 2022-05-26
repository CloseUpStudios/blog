import Header from '../../components/Header';
import SpotlightSection from '../../components/sections/SpotlightSection';
import articleStyle from '../../styles/articleView.module.css';
import Card from "../../components/cards/Card";
import SearchViewBar from '../../components/SearchViewBar';
import { useState, useCallback } from 'react';

const SearchView = ({ data, term, reqFilteredData }) => {

    const saveDataInLocalStorage = (data) => {
        if(typeof window !== 'undefined') {
          // refresh data in localStorage
          localStorage.removeItem("data");
          localStorage.setItem('data', JSON.stringify(data))
        }
    }

    const [articles, setArticles] = useState(() => {
        reqFilteredData = JSON.stringify(reqFilteredData);
        reqFilteredData = JSON.parse(reqFilteredData);
        return reqFilteredData;
    });

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

    try {
    return (
        <div id="root">
        {saveDataInLocalStorage(data)}
            <Header title={`Search | Closed[in]`} />
            <main id="searchView" >
                <div id='content_wrapper' > 
                    <div id='searchTitle'>
                        <h1>Search</h1>
                    </div>
                    <SearchViewBar
                        onSearchSubmit={onSearchSubmit} 
                        clearResults={clearResults}
                        initTerm={term}
                    />
                    <div id="latest_articles">
                        {renderedArticles}
                    </div>
                    <SpotlightSection className={articleStyle.article_spotlight} data={data} forward={false} />
                </div>
            </main>
        </div>  )
    } catch(e) {
        return (e)
    }
}

import client from "../../components/SanityClient";
const filterArticles = async (term, dataToFilter) => {
    const results = dataToFilter.filter(article => 
    article.title.toLowerCase().includes(term.toLowerCase()) 
    || article.subtitle.toLowerCase().includes(term.toLowerCase())
    || article.author.name.toLowerCase().includes(term.toLowerCase())
    || article.tags.map(tag => tag.toLowerCase()).includes(term.toLowerCase()));
    return results;
}

export const getServerSideProps = async (context) => {
    const term = context.params.term;
    const data = await client.fetch(`*[_type == "post"]{
      ...,
      category->,
      author->
    }`) 
    const reqFilteredData = await filterArticles(term, data);

    return { props: { data, term, reqFilteredData }};
}

export default SearchView;