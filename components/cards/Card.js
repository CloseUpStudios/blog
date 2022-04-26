import Link from 'next/link'

export default function Card({article}) {
    return (
        <Link href={`/post/${article._id}`} passHref>
            <div className="article_card">
                <div className="article_image"></div>
                <div className="article_content">
                    <div className="content_header">
                        <span className="meta">{article.meta.author} on {new Date(parseInt(article.log.timestamp)).toDateString()}</span>
                        <span className="title">{article.content.title}</span>
                    </div>
                    <div className="tags"></div>
                    <div className="subtitle">{article.content.subtitle}</div>
                </div>
            </div>
        </Link>
    )
}