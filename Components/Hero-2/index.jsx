import React from 'react'
import Navigation from '../Navigation'
import { FaPaw } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'


const HeroSection = ({ title, cta }) => {
    return (
        <section id="heroSection" className="hero-section">

            <div className="hero-cta">
                <div>
                    <h1><pre>{title}</pre></h1>
                    <form className='hero__form'>
                        <fieldset>
                            <label htmlFor="name" className='hero-form__label'>Name</label>
                            <input id="name" className='hero-form__input' type="text" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="phone" className='hero-form__label'>Phone Number</label>
                            <input id="phone" className='hero-form__input' type="tel" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email" className='hero-form__label'>Email</label>
                            <input id="email" className='hero-form__input' type="email" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="date" className='hero-form__label'>Date</label>
                            <input id="date" className='hero-form__input' type="date" />
                        </fieldset>
                        <Link href="">
                            <a><FaPaw />{cta}<FaPaw /></a>
                        </Link>
                    </form>
                </div>
                <div className="hero__img">
                    <div className='large-img'>
                        <Image objectFit='cover' height={400} width={400} src="/images/hero-img-500.png" alt="The Bubbly Pug" />
                    </div>
                    <div className='small-img'>
                        <Image objectFit='cover' height={150} width={150} src="/images/hero-img-500.png" alt="The Bubbly Pug" />

                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroSection