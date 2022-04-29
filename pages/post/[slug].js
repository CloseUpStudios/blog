import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import BackgroundImage from '../../components/cards/BackgroundImage';
import SpotlightSection from '../../components/sections/SpotlightSection';
import articleStyle from '../../styles/articleView.module.css';

const ArticleView = ({ article, data }) => {
    return (
        <div id="articleView">
            <Header title={article.title} />
            <div id="colorOverlay"></div>
            <Navbar />
            <div id='content_wrapper' style={{marginTop:0}}> 
              <BackgroundImage image={article.mainImage} />  
              <div className={articleStyle.articleWrapper}>
                <div className={`${articleStyle.meta}`}>
                  <span className="roboto roboto-light">{article.author.name} <span style={{fontStyle:"italic"}}>on {new Date(article.publishedAt).toDateString()}</span></span>
                </div>
                <div className={`${articleStyle.title} roboto-slab`}>{article.title}</div>
                <div className={articleStyle.tags}>
                    {article.tags.map((tag, index) => (
                        <div key={index} className={`${articleStyle.tag} roboto roboto-bold`}>{tag}</div>
                    ))}
                </div>
                <div className={`${articleStyle.subtitle} roboto `} style={{fontStyle:"italic"}}>{article.subtitle}</div>
                <div className={`${articleStyle.content} roboto roboto-light`}>{article.body}</div>
              </div>
              <SpotlightSection className={articleStyle.article_spotlight} data={data} />
            </div>
        </div>
    )
}

// sanity stuff
import { createClient } from 'next-sanity'
const client = createClient({
  projectId: "g2ejdxre",
  dataset: "production",
  apiVersion: "2022-04-29",
  useCdn: false
});

export const getServerSideProps = async (context) => {
  // single article for article view
  const slug = context.params.slug;

  const searchStr = `*[_type == "post" && slug.current == "${slug}"]{
    ...,
    author->
  }`
  let article = await client.fetch(searchStr) 
  article = article[0]

  // get all
  const data = await client.fetch(`*[_type == "post"]{
    ...,
    author->
  }`) 

  return { props: { article, data }};
}

export default ArticleView;