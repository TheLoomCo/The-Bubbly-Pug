import React from 'react'
import Navigation from '../Navigation'
import { FaPaw } from 'react-icons/fa'
import Link from 'next/link'


const HeroSection = ({ title, cta }) => {
    return (
        <section id="heroSection" className="hero-section">
            <div className="parallax"></div>
            <img className='mobile-img' src="/images/hero-img-square.png" alt="Ember Grill" />
            <div className="overlay"></div>
            <Navigation />
            <div className="hero-cta">
                <h1><pre>{title}</pre></h1>
                {cta && <Link href="#meetAndGreet">
                    <a><FaPaw />{cta}<FaPaw /></a>
                </Link>}
            </div>
        </section>
    )
}

export default HeroSection