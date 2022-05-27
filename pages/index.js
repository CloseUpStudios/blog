import SpotlightSection from '../components/sections/SpotlightSection';
import CardSection from '../components/sections/CardSection';
import Header from '../components/Header';
import Title from "../components/Title";

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


import client from "../components/SanityClient";
export async function getStaticProps() {
  const data = await client.fetch(`*[_type == "post"]{
    ...,
    category->,
    author->
  }`) 

  return { props: { data }};
}

export default Home;