import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" key="og-type" />
          <meta
            property="og:url"
            content="https://arigemlogistics.vercel.app/"
            key="og-url"
          />
          <meta
            property="og:title"
            content="Arigem Logistics"
            key="og-title"
          />
          <link rel="icon" href="/logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
          <link href="https://fonts.googleapis.com/css2?family=Gothic+A1:wght@500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&family=Marcellus+SC&display=swap" rel="stylesheet" />
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