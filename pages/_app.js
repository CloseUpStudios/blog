import '../styles/blogStyle.css'
import '../styles/cardStyle.css'
import '../styles/buttonStyle.css'
import '../styles/sidenavStyle.css'
import '../styles/fonts.css'

import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#F8CD86" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
