import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html className="no-js" lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/x-icon" href="/cup64.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
          <title>Predatory, Unethical, Unprofessional Lawyer</title>
          <meta name="description" content="A client experience with this predatory, unethical, unprofessional lawyer" />
          <meta name="keywords" content="tiecia ayers, houston lawyer, texas lawyer, lawyer, lawyer texas, lawyer houston, accident lawyer houston, accident lawyer texas, tiecia ayers law" />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&family=Caveat&&family=Shadows+Into+Light&family=Alkatra&family=Comfortaa:wght@300;400;500;600&family=Delicious+Handrawn&family=Josefin+Sans:ital,wght@0,300;0,500;0,600;1,500;1,600;1,700&family=Vina+Sans&display=swap"
            rel="stylesheet"
          /> */}
          {/* <meta http-equiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewports" content="width=device-width, initial-scale=1" />
          <meta name="author" content="ThemeMarch"></meta> */}
          
          <script
            async
            src="/js/isotope.pkg.min.js"
          />
          <script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha384-KyZXEAg3QhqLMpG8r+Knujsl5+5hb7ie1XtJ6m2TQ6ZZTV6p3mH4p0CX6Zh6JtvE5"
          crossOrigin="anonymous"
          ></script>
          {/* <script
            async
            src="/js/main.js"
          /> */}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-5540048YH3"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  
                  gtag('config', 'G-5540048YH3');
                `,
              }}
            ></script>
        </Head>
        <body className="cs-dark">
        {/* <div className="cs-preloader cs-center">
          <div className="cs-preloader_in"></div>
          <span>Loading</span>
        </div> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
