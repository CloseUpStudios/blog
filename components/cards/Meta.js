import Link from "next/link";
import UserImage from "./UserImage"

export default function Meta({article}) {
    return (
        <div className="spotlightMeta">
            <span className="spotlightDate roboto" style={{fontWeight:"300", fontStyle:"italic"}}>{new Date(article.publishedAt).toDateString()}</span>
            <Link href={`/user/${article.author.slug.current}`}  passHref>
                    <div className="spotlightAuthor">
                        <UserImage image={article.author.image} username={article.author.name} />
                        <span className="spotlightAuthorName roboto" style={{fontWeight:"300"}}>{article.author.name}</span>
                    </div>
            </Link>
        </div>  
    )
}