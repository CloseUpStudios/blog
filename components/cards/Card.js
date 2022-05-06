import Link from 'next/link'
import BackgroundImage from './BackgroundImage';
import Tags from "./Tags";
import Meta from "./Meta";

export default function Card({article}) {
    return (
        <Link href={`/post/${article.slug.current}?forward=true`} passHref>
            <BackgroundImage className="spotlightSlide articleCard" image={article.mainImage} spotlight={true} slug={article.slug.current} >
                <div>
                    <span className="spotlightTitle articleCardTitle rubik" >{article.title}</span>
                    <Tags tags={article.tags} full={false} />
                    <div className="subtitle roboto roboto-light">{article.tldr}</div>
                </div>
                <div>
                    <Meta article={article} />
                </div>
            </BackgroundImage>
        </Link>
    )
}