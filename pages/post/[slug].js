import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import BackgroundImage from '../../components/cards/BackgroundImage';
import SpotlightSection from '../../components/sections/SpotlightSection';
import articleStyle from '../../styles/articleView.module.css';
import Meta from '../../components/cards/Meta';
import Tags from '../../components/cards/Tags';
import Markdown from "../../components/Markdown";
import NoSsr from '../../components/NoSsr';

const ArticleView = ({ article, data }) => {
  if(!data) {
    // get from localStorage
    if(typeof window !== 'undefined') {
      data = JSON.parse(localStorage.getItem('data'));
      article = data.find(articleIn => articleIn.slug.current == article);

    }
    
  }
  try {
    return (
      <div id="articleView">
          <Header title={article.title} />
          <div id='content_wrapper' style={{marginTop:0}}> 
            <BackgroundImage image={article.mainImage} slug={article.slug.current} spotlight={false} postLink={false} />  
            <div className={articleStyle.articleWrapper}>
              <Meta article={article} />
              <div className={`${articleStyle.title} vollkorn`}>{article.title}</div>
              <Tags tags={article.tags} full={true} />
              <div className={`${articleStyle.subtitle} roboto `} style={{fontStyle:"italic"}}>{article.subtitle}</div>
              <div className={`${articleStyle.content} roboto roboto-light`}>
                <Markdown childs={article.body} />
              </div>
            </div>
            <SpotlightSection className={articleStyle.article_spotlight} data={data} forward={false} />
          </div>
      </div>
  )
  } catch(e) {
    return(
      <div>e</div>
    )
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

  let data = false, article = false;

  // single article for article view
  const slug = context.params.slug;

  if(context.query.forward == undefined || (context.query.forward != "true")) {
    // get data from sanity
    const searchStr = `*[_type == "post" && slug.current == "${slug}"]{
      ...,
      author->
    }`
    article = await client.fetch(searchStr) 
    article = article[0]
  
    // get all
    data = await client.fetch(`*[_type == "post"]{
      ...,
      author->
    }`) 
  } else {
    article = slug;
  }

  return { props: { article, data }};
}

export default ArticleView;