import Card from "../cards/Card"
import { FaSearch } from "react-icons/fa";

export default function CardSection({data}) {
    if(data == "error") {
        return (
            <div>{data}</div>
        )
    }
    return (
        <div id="latest" >
            <div style={{display: "flex", flexDirection:"row", alignItems: "center", justifyContent:"space-between"}}>
                <h2 className="smallHeader lightestOrange">Latest</h2>

                <FaSearch className="searchIcon" />
                <div id="search" style={{display:"none"}}>
                    <div>
                        <input id="articleSearch" type="text"></input>
                        <label className="rubik_light" id="projectLabel">search</label>
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