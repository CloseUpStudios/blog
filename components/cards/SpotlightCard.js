import Link from 'next/link';
import BackgroundImage from './BackgroundImage';

export default function Spotlight({article}) {
    return (
        <BackgroundImage className="spotlightSlide" imageName={article.imageName} spotlight={true} articleId={article._id}>
            <span className="spotlightTitle rubik">{article.content.title}</span>
            <div className="spotlightMeta">
                <span className="spotlightDate roboto" style={{fontWeight:"300", fontStyle:"italic"}}>{new Date(parseInt(article.log.timestamp)).toDateString()}</span>
                <div className="spotlightAuthor">
                    <span className="spotlightAuthorImage"></span>
                    <span className="spotlightAuthorName roboto" style={{fontWeight:"300"}}>{article.meta.author}</span>
                </div>
            </div>  
        </BackgroundImage>  
    )
}