import Head from 'next/head'
import Image from 'next/image'
import { MdLocationPin } from 'react-icons/md'
import BehindTheScenes from '../Components/BehindTheScenes';
import Gallery from '../Components/Gallery';
import HeroSection from '../Components/Hero';
import Layout from '../Components/Layout';
import MeetandGreetForm from '../Components/MeetandGreet';
import Review from '../Components/Review';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Bubbly Pug | Home</title>
        <meta type="description" content="" />
      </Head>
      <HeroSection title={`Welcome to
the Bubbly Pug`} cta="Book a Meet and Greet!" />
      <main>
        <BehindTheScenes />
        <Review content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, quod!" />
        <Gallery />
        <MeetandGreetForm />
      </main>
    </>
  )
}
