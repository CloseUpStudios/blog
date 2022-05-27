import { ToastContainer, Slide } from 'react-toastify';
import NextNProgress from 'nextjs-progressbar'
import splitbee from "@splitbee/web";

import '../styles/blogStyle.css'
import '../styles/cardStyle.css'
import '../styles/buttonStyle.css'
import '../styles/sidenavStyle.css'
import '../styles/fonts.css'
import '../styles/textStyles.css'
import "../styles/global.css"
import "../styles/searchStyle.css"

import Footer from "../components/Footer";
import ScrollToTopArrow from '../components/ScrollToTopArrow';
import Navbar from '../components/Navbar';

try {
  splitbee.init({disabledCookies:true});
} catch (e) {
  console.log("Splitbee not loaded");
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#F8CD86" />
      <Navbar />
      <ToastContainer
            position="top-center"
            autoClose={500}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            transition={Slide}
            limit={2}
          />
      <ScrollToTopArrow />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
