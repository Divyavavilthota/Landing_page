import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Meta Tags for Performance */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
          {/* Preload critical fonts and assets */}
          <link rel="preload" href="/font.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
          <link rel="preload" href="/div_wrap.png" as="image" />
          <link rel="preload" href="/two.png" as="image" />
          
          {/* You can add more preloads here as needed */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
