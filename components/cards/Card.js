import Link from 'next/link'
import BackgroundImage from './BackgroundImage';

export default function Card({article}) {
    return (
        <Link href={`/post/${article.slug.current}`} passHref>
            <div className="article_card">

                <BackgroundImage image={article.mainImage} />           
                <div className="article_content">
                    <div className="content_header">
                        <span className="meta roboto roboto-light">{article.author.name} <span style={{fontStyle:"italic"}}>{new Date(article.publishedAt).toDateString()}</span></span>
                        <span className="title roboto-slab roboto-slab-bold">{article.title}</span>
                    </div>
                <div className='tags'>
                    {article.tags.map((tag, index) => (
                        <div key={index} className="tag roboto roboto-bold">{tag}</div>
                    ))}
                </div>
                    
                <div className="subtitle roboto roboto-light">{article.subtitle}</div>
                </div>
            </div>
        </Link>
    )
}