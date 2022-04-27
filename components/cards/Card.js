import Link from 'next/link'
import BackgroundImage from './BackgroundImage';

export default function Card({article}) {

    const tagArray = article.meta.tags.split(",");
    // remove last tag if empty
    if(tagArray[tagArray.length-1].length == 0) {
        tagArray.splice(-1);
    } 
    return (
        <Link href={`/post/${article._id}`} passHref>
            <div className="article_card">

                <BackgroundImage imageName={article.imageName} />           
                <div className="article_content">
                    <div className="content_header">
                        <span className="meta roboto roboto-light">{article.meta.author} <span style={{fontStyle:"italic"}}>{new Date(parseInt(article.log.timestamp)).toDateString()}</span></span>
                        <span className="title roboto-slab roboto-slab-bold">{article.content.title}</span>
                    </div>
                <div className='tags'>
                    {tagArray.map((tag, index) => (
                        <div key={index} className="tag roboto roboto-bold">{tag}</div>
                    ))}
                </div>
                    
                <div className="subtitle roboto roboto-light">{article.content.subtitle}</div>
                </div>
            </div>
        </Link>
    )
}