import Head from 'next/head';

export default function Header({title}) {
    return(
        <Head>
            <meta charset="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <title>{title}</title>
            <meta name="description" content=""/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <link rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" 
            crossOrigin="anonymous" referrerpolicy="no-referrer" />
        </Head>
    )
}