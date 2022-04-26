import Link from 'next/link';

export default function Spotlight({article}) {
    return (
        <Link href={`/post/${article._id}`} passHref>
            <div className="spotlightSlide">
                <span className="spotlightTitle">{article.content.title}</span>
                <div className="spotlightMeta">
                    <span className="spotlightDate">{new Date(parseInt(article.log.timestamp)).toDateString()}</span>
                    <div className="spotlightAuthor">
                        <span className="spotlightAuthorImage"></span>
                        <span className="spotlightAuthorName">{article.meta.author}</span>
                    </div>
                </div>  
            </div>
        </Link>
    )
}