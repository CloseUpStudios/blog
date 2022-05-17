import Link from "next/link";
import UserImage from "./UserImage"

export default function Meta({article}) {
    const date = new Date(article.publishedAt);
    const dateMonth = () => {
        if(date.getMonth() < 10) {
            return `0${date.getMonth()}`
        } else { return date.getMonth() }
    }
    const dateString = `${date.getDate()}.${dateMonth()}.${date.getFullYear()}`;
    return (
        <div className="spotlightMeta">
            <div className="spotlightDate roboto" style={{fontWeight:"300", fontStyle:"italic"}}>
            {dateString}
            </div>
            <Link href={`/author/${article.author.slug.current}`}  passHref>
                <div className="spotlightAuthor">
                    <UserImage image={article.author.image} username={article.author.name} />
                    <div className="spotlightAuthorName roboto" style={{fontWeight:"300"}}>{article.author.name}</div>
                </div>
            </Link>
        </div>  
    )
}