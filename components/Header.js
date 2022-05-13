import Head from 'next/head';

export default function Header({title}) {
    return(
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <title>{title}</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto+Flex:opsz@8..144&family=Rubik+Mono+One&family=Vollkorn&display=swap" rel="stylesheet"></link>
        </Head>
    )
}