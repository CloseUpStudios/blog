import Header from '../../components/Header';
import BackgroundImage from '../../components/cards/BackgroundImage';
import SpotlightSection from '../../components/sections/SpotlightSection';
import CardSection from '../../components/sections/CardSection';
import articleStyle from '../../styles/articleView.module.css';
import Meta from '../../components/cards/Meta';
import Tags from '../../components/cards/Tags';
import Link from "next/link";

const CategoryView = ({ data, category }) => {

    // return backgroundImage component with random article from data
    const randomArticle = () => {
        const article = data[0];
        return (
            <>
            <BackgroundImage userImg={true} className="featuredBG " image={article.mainImage} spotlight={false} slug={article.slug.current} postLink={false} />
            <div className='featuredMeta'>
                <Meta article={article} />
                <h1>{article.title}</h1>
                <Tags tags={article.tags} full={false} />
                <p>{article.subtitle}</p>
                <Link href={`/post/${article.slug.current}`} >
                <a>
                    <button className="btn btn_secondary">Read More</button>
                </a>
                </Link>
            </div>
            </>
        )
    }

    try {
    return (
        <div id="articleView">
            <Header title={`${category.title} | Closed[in]`} />
            <main>
                <div id='content_wrapper' style={{marginTop:0}}> 
                <div className='categoryHeader' >
                    <h1>{category.title}</h1>
                </div>
                    {randomArticle()}
                    <CardSection data={data} overwrite={`Latest in ${category.title}`} />
                    <SpotlightSection className={articleStyle.article_spotlight} data={data} forward={false} />
                </div>
            </main>
        </div>  )
    } catch(e) {
    return(
        <div>e</div> )
    }
}

// sanity stuff
import { createClient } from 'next-sanity'
const client = createClient({
  projectId: "g2ejdxre",
  dataset: "production",
  apiVersion: "2022-04-29",
  useCdn: true
});

export const getServerSideProps = async (context) => {
    let data = false;

    // single article for article view
    let category = context.params.category;

    // get data from sanity
    const searchStr = `*[_type == "category" && title=="${category}"] {
        _id,
        ...,
        "posts": *[_type=="post" && category._ref == ^._id] {
          ...,
          author->
        }
    }`
    data = await client.fetch(searchStr);
    data = data[0];
    category = data;
    data = data.posts;
  return { props: { data, category }};
}

export default CategoryView;