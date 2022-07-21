import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaPaw } from 'react-icons/fa'
import styles from './about.module.css';

const AboutComp = () => {
    return (
        <div className={styles.wrapper}>

            <div className={styles.container}>
                {/* Icon & Header */}
                <img src="/images/bubbly-pug-icon.png"
                    height={75}
                    width={75}
                    className={`${styles.icon} header__icon`}
                />
                <h1 className={styles.header}>The Bubbly Team</h1>
            </div>

            <div className={styles.team__container}>
                <article>
                    {/* Team Member One */}

                    <Image src="/images/img-5-300w.png" height={300} width={300} />

                    <p>Doggo ipsum wrinkler big ol pupper lotsa pats ruff porgo, pats shooberino shoob, wow very biscit fat boi lotsa pats. I am bekom fat wow such tempt floofs ur givin me a spook pupper, borkdrive heckin angery woofer big ol pupper. </p>
                </article>

                <article>
                    {/* Team Member Two */}
                    <Image src="/images/img-5-300w.png" height={300} width={300} />
                    <p>Doggo ipsum wrinkler big ol pupper lotsa pats ruff porgo, pats shooberino shoob, wow very biscit fat boi lotsa pats. I am bekom fat wow such tempt floofs ur givin me a spook pupper, borkdrive heckin angery woofer big ol pupper. </p>
                </article>

                <article>
                    {/* Team Member Three */}
                    <Image src="/images/img-5-300w.png" height={300} width={300} />
                    <p>Doggo ipsum wrinkler big ol pupper lotsa pats ruff porgo, pats shooberino shoob, wow very biscit fat boi lotsa pats. I am bekom fat wow such tempt floofs ur givin me a spook pupper, borkdrive heckin angery woofer big ol pupper. </p>

                </article>

                <article>
                    {/* Team Member Four */}
                    <Image src="/images/img-5-300w.png" height={300} width={300} />
                    <p>Doggo ipsum wrinkler big ol pupper lotsa pats ruff porgo, pats shooberino shoob, wow very biscit fat boi lotsa pats. I am bekom fat wow such tempt floofs ur givin me a spook pupper, borkdrive heckin angery woofer big ol pupper. </p>

                </article>
            </div>
            {/* <Link href="/#meetAndGreet"><a className={styles.cta} type="submit"><FaPaw />Book a Meet and Greet!<FaPaw /></a></Link> */}
        </div>
    )
}

export default AboutComp