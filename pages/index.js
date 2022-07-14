import Head from 'next/head'
import Image from 'next/image'
import { MdLocationPin } from 'react-icons/md'
import HeroSection from '../Components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Bubbly Pug | Home</title>
        <meta type="description" content="" />
      </Head>
      <HeroSection title={`Welcome to
the Bubbly Pug`} cta="Book a Meet and Greet!" />
    </div>
  )
}
