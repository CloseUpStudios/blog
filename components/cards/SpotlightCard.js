import Link from 'next/link';
import BackgroundImage from './BackgroundImage';
import Tags from "./Tags";
import Meta from "./Meta";

export default function Spotlight({article, forward=true}) {
    return (
        <Link href={`/post/${article.slug.current}?forward=true`} passHref>
                <BackgroundImage className="spotlightSlide" image={article.mainImage} spotlight={true} slug={article.slug.current} forward={forward}>
                    <div>
                        <span className="spotlightTitle vollkorn">{article.title}</span>
                        <Tags tags={article.tags} full={false} />
                    </div>
                    <div>
                        <Meta article={article} />
                    </div>
                </BackgroundImage>  
        </Link>

    )
}