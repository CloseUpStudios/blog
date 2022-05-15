import SpotlightSection from '../components/sections/SpotlightSection';
import CardSection from '../components/sections/CardSection';
import Header from '../components/Header';
import Title from "../components/Title";

// sanity stuff
import { createClient } from 'next-sanity'
const client = createClient({
  projectId: "g2ejdxre",
  dataset: "production",
  apiVersion: "2022-04-29",
  useCdn: true
});

function Home({ data}) {

  return (
    <div id="root">
      <Header title="Closed[in]" />
      <main>
        <div id="content_wrapper">
          <Title article={data[0]} />
          <SpotlightSection data={data}></SpotlightSection>
          <CardSection data={data}></CardSection>
        </div>
      </main>
    </div>
  )
}



export async function getStaticProps() {
  const data = await client.fetch(`*[_type == "post"]{
    ...,
    category->,
    author->
  }`) 

  return { props: { data }};
}

export default Home;