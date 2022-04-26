import Card from "../cards/Card"

export default function CardSection({data}) {
    return (
        <div id="latest">
        <h2 className="smallHeader">Latest Articles</h2>

        <div id="filter">
            <div>
                <input id="articleSearch" type="text"></input>
                <label className="rubik_light" id="projectLabel">search</label>
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