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

function Home({ data, error = false }) {

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
        {console.log(data, error)}
        <div id="content_wrapper">
        <SpotlightSection data={data}></SpotlightSection>

        <CardSection data={data}></CardSection>
        </div>
          
      </main>
    </div>
  )
}

const fetcher = (url, options) => fetch(url, options);

const API = "https://www.cr4yfish.digital:8443/blog/request/0/all/all/all/all/all";
const options = {
  "method": 'GET',
  "Content-Type": "application/json"
}

export async function getServerSideProps() {
  try {
    console.log("Sending API req to ", API, "with", options);
    let data = await fetcher(API, options);
    console.log("Got", data);
    data = await data.text();
    console.log("in json:", data);
    return { props: { data }};
  } catch (error) {
    const data = "error";
    console.error(data, error);
    return { props: { data, error }};
  }
}

export default Home;