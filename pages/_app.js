import '../styles/globals.css'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react';


import '../Components/MeetandGreet/meet-and-greet.modules.css';
import '../Components/Review/review.modules.css';
import '../Components/Team/team.modules.css';



// Pet Profile Page
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import AuthWrapper from '../Components/AuthWrapper';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
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

        {/* OG Image */}
        <meta property="og:title" content="The Bubbly Pug" />
        <meta property="og:site_name" content="The Bubbly Pug" />
        <meta property="og:url" content="https://bubbly-pug.vercel.app" />
        <meta property="og:description" content="The Bubbly Pug" />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="https://res.cloudinary.com/aladd93/image/upload/v1657785827/bubbly-pug-icon_rwx7l5.png" />
      </Head>

      <SessionProvider session={session}>
        <AuthWrapper>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </AuthWrapper>
      </SessionProvider>
    </>
  )
}

export default MyApp
