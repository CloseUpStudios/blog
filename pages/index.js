import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import SpotlightSection from '../components/sections/SpotlightSection';
import Card from '../components/cards/Card';
import CardSection from '../components/sections/CardSection';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import useSWR from "swr";

function Home({ data}) {
  return (
    <div id="root">
      <Header title="Home" />
      <div id="colorOverlay"></div>
      <main>
        <header>
            <div>
                <h1 className='rubik-mono-one'>Closed[in]</h1>
            </div>
                <Navbar/>
             
        </header>
        <div id="content_wrapper">  
        {console.log(data)}
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
  useCdn: false
});

export async function getStaticProps() {
  const data = await client.fetch(`*[_type == "post"]{
    ...,
    author->
  }`) 

  return { props: { data }};
}

export default Home;