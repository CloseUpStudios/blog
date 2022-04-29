import Link from 'next/link';
import BackgroundImage from './BackgroundImage';

export default function Spotlight({article}) {
    return (
        <BackgroundImage className="spotlightSlide" image={article.mainImage} spotlight={true} slug={article.slug.current}>
            <span className="spotlightTitle rubik">{article.title}</span>
            <div className="spotlightMeta">
                <span className="spotlightDate roboto" style={{fontWeight:"300", fontStyle:"italic"}}>{new Date(article.publishedAt).toDateString()}</span>
                <div className="spotlightAuthor">
                    <span className="spotlightAuthorImage"></span>
                    <span className="spotlightAuthorName roboto" style={{fontWeight:"300"}}>{article.author.name}</span>
                </div>
            </div>  
        </BackgroundImage>  
    )
}