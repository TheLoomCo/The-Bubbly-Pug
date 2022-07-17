import React from 'react'
import AboutComp from '../Components/About'
import HeroSection from '../Components/Hero'

const About = () => {
    return (
        <>
            <HeroSection title={`About the 
Bubbly Pug`} />
            <AboutComp />
        </>
    )
}

export default About