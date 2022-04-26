import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import SpotlightSection from '../components/sections/SpotlightSection';
import Card from '../components/cards/Card';
import CardSection from '../components/sections/CardSection';
import Header from '../components/Header';

function Home({ data }) {
  return (
    <div id="root">
      <Header/>
      <main>
        <header>
            <div>
                <h1>Closed[in]</h1>
            </div>
                <i id="navbarOpener" onClick="openNav();"  className="fas fa-bars pointer"></i>

                <div id="sidebar" className="sidenav">
            
                    <a onClick="closeNav();"><i className="fa-solid fa-circle-xmark pointer"></i></a>
            
                    <Link href="/" className="btn btn_primary"><a id="homeAnchor" >Home</a></Link>
                    <Link href="/" className="btn btn_primary disabled"><a id="newsAnchor">News</a></Link>
            
                </div>

        </header>

        <div id="content_wrapper">
            <SpotlightSection data={data}></SpotlightSection>

            <CardSection data={data}></CardSection>
        </div>
          
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:30005/blog/request/0/all/all/all/all/all");
  const data = await res.json();

  return { props: { data }};
}

export default Home;