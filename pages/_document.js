import {Html, Head, Main, NextScript} from 'next/document'

export default function Document(){
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200;300;400;500;700;800&display=swap" rel="stylesheet" />
                </Head>
      <body>
        <Main />
        <NextScript />
      </body>
                </Html>
                )
}