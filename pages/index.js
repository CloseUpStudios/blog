import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import SpotlightSection from '../components/sections/SpotlightSection';
import Card from '../components/cards/Card';
import CardSection from '../components/sections/CardSection';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Home({ data }) {
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
        {console.log(data)}
        <div id="content_wrapper">
        </div>
          
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  let data = [];
  const options = {
    "method": 'GET',
    "Content-Type": "application/json"
  }
  const res = fetch("https://cr4yfish.digital:8443/blog/request/0/all/all/all/all/all", options);
  data = res;
  return { props: { data }};
}

export default Home;