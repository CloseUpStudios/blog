import Meta from "./cards/Meta";
import Link from "next/link";
import Tags from "./cards/Tags";
import SpinnerButton from "./SpinnerButton";

export default function CompactArticle({article, text="Read newest", closeNav=false}) {

    if(!closeNav) {
        closeNav = () => {
            return;
        }
    }

    return (
    <>
    <div className='featuredMeta__meta compactCard'>
        <Meta userImg={true} className="featuredMeta" article={article} />
        <h1>{article.title}</h1>
        
        <Tags tags={article.tags} />
        <p
            className='subtitle' 
            style={{ 
                margin:"0", 
                marginBottom:".5rem", 
                width:"100%", 
                textAlign:"left" 
            }}>
            {article.tldr}
        </p>
        <Link href={`/post/${article.slug.current}`} >
        <a >
            <SpinnerButton text={text} />
        </a>
        </Link>
    </div>
    </>
    )
}