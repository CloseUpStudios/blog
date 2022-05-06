import SpotlightSection from '../components/sections/SpotlightSection';
import CardSection from '../components/sections/CardSection';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { useAmp } from "next/amp";
const config = { amp: "true "}


function Home({ data}) {
  const loadAmp = useAmp();

  const saveDataInLocalStorage = (data) => {
    if(typeof window !== 'undefined') {
      localStorage.setItem('data', JSON.stringify(data))
    }
  }

  return (
    <div id="root">
    {saveDataInLocalStorage(data)}
      <Header title="Home" />

      <Navbar/>
      <main>
        
        <div id="content_wrapper">  
          <SpotlightSection data={data}></SpotlightSection>
          <CardSection data={data}></CardSection>
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