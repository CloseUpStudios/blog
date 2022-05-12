import Card from "../cards/Card"
import { FaSearch } from "react-icons/fa";

const expandSearch = () => {
    const search = document.getElementById("articleSearch");
    search.classList.toggle("expand");
}

export default function CardSection({data, overwrite="Latest"}) {
    return (
        <div id="latest" >
            <div >
                <h2 className="smallHeader lightestOrange">{overwrite}</h2>
                <div id="searchWrapper">
                    <FaSearch id="searchIcon" className="searchIcon" onClick={expandSearch} />
                    <div id="search">
                        <input id="articleSearch" type="search" ></input>
                    </div>
                </div>
            </div>

            <div id="latest_articles">
                {data.map(article => (
                    <Card key={article._id} article={article}></Card>     
                ))}
            </div>

        </div>
    )
}