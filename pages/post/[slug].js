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
          <Header title={`${article.title} | Closed in`} />
          <div id='content_wrapper' style={{ marginTop:0 }}> 

          <div style={{ 
            display: "flex", flexDirection: "row",
            flexWrap: "wrap", alignItems: "center",
            gap: 50, marginTop: "7rem", overflow: "visible",
            justifyContent: "center"
          }}>
            <BackgroundImage articleImage={true} image={article.mainImage} slug={article.slug.current} spotlight={false} postLink={false} />  
            <div style={{ zIndex: 2 }}>
              <Meta article={article} />
              {article.hasEdits ? renderEdits : null}
              <div className={`${articleStyle.title} vollkorn`}>{article.title}</div>
              <Tags tags={article.tags} full={true} />
            </div>
            <div style={{
              background: "radial-gradient(circle, rgba(51,32,69, .5) 0%, rgba(30,20,40,0) 50%)",
              width: "150vw", height: "150vh",
              position: "absolute",
              overflow: "visible"
              }}></div>
          </div>
            
            <div className={articleStyle.articleWrapper}>
              
              <div className={`${articleStyle.subtitle} roboto `} >{article.subtitle}</div>
              <div className={`${articleStyle.content} roboto roboto-light articleContent`}>
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