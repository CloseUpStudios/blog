import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                    <link 
                    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;400&family=Roboto+Slab:wght@200;500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300&family=Rubik+Mono+One&family=Rubik:wght@500&display=swap" 
                    rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;