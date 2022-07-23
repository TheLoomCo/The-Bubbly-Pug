import React from 'react'
import { FaPaw } from 'react-icons/fa'
import Link from 'next/link'
import styles from './hero.module.css';


const HeroSection = ({ title, cta }) => {
    return (
        <section id="heroSection" className={styles.HeroSection}>
            <div className={styles.parallax}></div>
            <img className={styles.MobileImg} src="/images/hero-b.png" alt="The Bubbly Pug" />
            <div className={styles.overlay}></div>
            <div className={styles.HeroCta}>
                <h1><pre>{title}</pre></h1>
                {cta && <Link href="#meetAndGreet">
                    <a><FaPaw />{cta}<FaPaw /></a>
                </Link>}
            </div>
        </section>
    )
}

export default HeroSection