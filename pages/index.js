import SpotlightSection from '../components/sections/SpotlightSection';
import CardSection from '../components/sections/CardSection';
import Header from '../components/Header';
import BackgroundImage from '../components/cards/BackgroundImage';
import Meta from '../components/cards/Meta';
import Tags from '../components/cards/Tags';
import Link from "next/link";

function Home({ data}) {

    // return backgroundImage component with random article from data
    const randomArticle = () => {
        const article = data[0];
        return (
          <>
            <BackgroundImage userImg={true} className="featuredBG " image={article.mainImage} spotlight={false} slug={article.slug.current} postLink={false} />
            <div className='featuredMeta'>
            <div>
              <p style={{ margin:"0" }} >Welcome to</p>
                <h1>Closed[in]</h1>
              <p>The Blog brought to you by Close-up Studios!</p>
            </div>
            
            <div className='featuredMeta__meta'>
              <Meta userImg={true} className="featuredMeta" article={article} />
              <h1>{article.title}</h1>
              <Tags tags={article.tags} />
              <p className='subtitle' style={{ margin:"0", marginBottom:".5rem", width:"100%", textAlign:"left" }} >{article.tldr}</p>
              <Link href={`/post/${article.slug.current}`} >
                <a>
                  <button className="btn btn_small">Read Newest</button>
                </a>
              </Link>
            </div>
        
        
            </div>
          </>
        )
    }
  

  return (
    <div id="root">
      <Header title="Closed[in]" />
      <main>
        <div id="content_wrapper">
          {randomArticle()}
          <CardSection data={data}></CardSection>
          <SpotlightSection data={data}></SpotlightSection>
        </div>
      </main>
    </div>
  )
}

// sanity stuff
import { createClient } from 'next-sanity'
const client = createClient({
  projectId: "g2ejdxre",
  dataset: "production",
  apiVersion: "2022-04-29",
  useCdn: true
});

export async function getStaticProps() {
  const data = await client.fetch(`*[_type == "post"]{
    ...,
    author->
  }`) 

  return { props: { data }};
}

export default Home;