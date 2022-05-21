import CompactArticle from "./CompactArticle";

export default function SearchOverlay({ isActive, data, closeNav }) {

    const renderedArticles = data.map(article => {
        return ( <CompactArticle closeNav={closeNav} key={article.id} article={article} text="Read more" /> )
    })

    return (
        <div id="searchOverlay" className={isActive ? "searchOverlayActive" : "searchOverlayInactive"}>
            {renderedArticles}
        </div>
    )
}