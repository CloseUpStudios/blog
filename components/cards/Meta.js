import Link from "next/link";
import UserImage from "./UserImage"

export default function Meta({article}) {
    return (
        <div className="spotlightMeta">
            <div className="spotlightDate roboto" style={{fontWeight:"300", fontStyle:"italic"}}>
            {new Date(article.publishedAt).toDateString()}
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