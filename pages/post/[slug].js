import Header from '../../components/Header';
import BackgroundImage from '../../components/cards/BackgroundImage';
import SpotlightSection from '../../components/sections/SpotlightSection';
import articleStyle from '../../styles/articleView.module.css';
import Meta from '../../components/cards/Meta';
import Tags from '../../components/cards/Tags';
import Markdown from "../../components/Markdown";
import FormatDate from "../../components/FormatDate";

const ArticleView = ({ article, data }) => {
  
  const renderEdits = (
    <div className={articleStyle.edits}>
      <span>Last Edited: <FormatDate date={article.publishedAt} withTime={true} /></span>
    </div>
  )
  try {
    return (
      <div id="articleView">
          <Header title={`${article.title} | Closed[in]`} />
          <div id='content_wrapper' style={{marginTop:0}}> 
            <BackgroundImage image={article.mainImage} slug={article.slug.current} spotlight={false} postLink={false} />  
            <div className={articleStyle.articleWrapper}>
              <Meta article={article} />
              <div className={`${articleStyle.title} vollkorn`}>{article.title}</div>
              <Tags tags={article.tags} full={true} />
              {article.hasEdits ? renderEdits : null}
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

// TODO change to static site generation and trigger on sanity db change
import client from "../../components/SanityClient";

export async function getStaticPaths() {
  // Get all articles and take only slug, then pass this to params
  let data = await client.fetch(`*[_type == "post"]{
    ...,
  }`) 

  const paths = data.map((article) => ({
    params: { slug: article.slug.current },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  let data = false, article = false;

  // single article for article view
  const slug = params.slug;

  // get all
  data = await client.fetch(`*[_type == "post"]{
    ...,
    category->,
    author->
  }`)

  article = data.find(articleIn => articleIn.slug.current == slug);

  return { props: { article, data }};
}

export default ArticleView;