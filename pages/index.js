import SpotlightSection from '../components/sections/SpotlightSection';
import CardSection from '../components/sections/CardSection';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useAmp } from "next/amp";
import BackgroundImage from '../components/cards/BackgroundImage';
import Meta from '../components/cards/Meta';
import Tags from '../components/cards/Tags';
import Link from "next/link";
import NoSsr from '../components/NoSsr';
const config = { amp: "true "}

function Home({ data}) {
  const loadAmp = useAmp();

  const saveDataInLocalStorage = (data) => {
    if(typeof window !== 'undefined') {
      localStorage.setItem('data', JSON.stringify(data))
    }
  }

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
  

  return (
    <div id="root">
    {saveDataInLocalStorage(data)}
      <Header title="Home" />
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