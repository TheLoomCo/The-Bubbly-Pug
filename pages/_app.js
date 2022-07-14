import '../styles/globals.css'
import Head from 'next/head'

import '../Components/Navigation/navigation.modules.css';
import '../Components/Hero/hero.modules.css';
import '../Components/Gallery/gallery.modules.css';
import '../Components/Review/review.modules.css';
import '../Components/About/about.modules.css';
import '../Components/Team/team.modules.css';
import '../Components/Footer/footer.modules.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
