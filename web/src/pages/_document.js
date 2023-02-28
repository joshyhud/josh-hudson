import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            legacyBehavior
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            legacyBehavior
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin
          />
          <link
            legacyBehavior
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
