import { ToastContainer, Slide } from 'react-toastify';
import NextNProgress from 'nextjs-progressbar'

import '../styles/blogStyle.css'
import '../styles/cardStyle.css'
import '../styles/buttonStyle.css'
import '../styles/sidenavStyle.css'
import '../styles/fonts.css'
import '../styles/textStyles.css'
import "../styles/global.css"



function MyApp({ Component, pageProps }) {
  return (
    <>

      <NextNProgress color="#F8CD86" />
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
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
