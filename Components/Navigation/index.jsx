import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { useSession, signOut, signIn } from 'next-auth/react';
import styles from './navigation.module.css'
import { AiOutlineClose } from 'react-icons/ai'
const Navigation = () => {
    const router = useRouter();
    const { data: session, status } = useSession();

    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const [toggleAccountMenu, setToggleAccountMenu] = useState(false);

    useEffect(() => {
        document.querySelectorAll('li a').forEach((link) => {
            link.addEventListener('click', () => {
                setToggleMobileMenu(false);
            });
        });

        return
    }, [])

    const handleSignin = () => {
        signIn('google', {
            // callbackUrl: 'https://bubbly-pug.vercel.app/account/dashboard'
            callbackUrl: 'http://localhost:3000/account/dashboard'
        })
    }

    const handleSignout = () => {
        signOut({
            callbackUrl: 'https://bubbly-pug.vercel.app/'
        })
    }

    const handleCloseAccountMenu = () => setToggleAccountMenu(false);

    return (
        <div className={styles.navbar_style__wrapper}>
            <nav id="navigation" className={styles.navbar}>

                <Link href="/">
                    <a className={styles.nav_logo__desktop}>
                        <Image src='/images/logo/logo.png' alt="The Bubbly Pug" height={60} width={52.44} />
                    </a>
                </Link>

                <Link href="/">
                    <a className={styles.nav_logo__mobile}>
                        <Image className={styles.nav_logo__mobile} src='/images/logo/logo.png' alt="The Bubbly Pug" height={60} width={52.44} />
                    </a>
                </Link>

                <button id={styles.mobileMenuTrigger} className={` ${toggleMobileMenu ? styles.menuToggle : ''}`} aria-expanded={toggleMobileMenu ? 'true' : 'false'} aria-controls="navigationLinks"
                    title="Open and Close Navigation" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </button>

                <ul className={toggleMobileMenu ? styles.active_links : styles.nav_list} id="navigationLinks">
                    <li><Link href="/"><a className={`${router.pathname === "/" ? styles.active : ''}`}>Home</a></Link></li>

                    <li><Link href="/about"><a className={`${router.pathname === "/about" ? styles.active : ''}`}>About</a></Link></li>

                    <li><Link href="/services"><a className={`${router.pathname === "/services" ? styles.active : ''}`}>Services</a></Link></li>

                    <li><Link href="/#meetAndGreet"><a className={`${router.pathname === "/#meetAndGreet" ? styles.active : ''}`}>Meet and Greet</a></Link></li>

                    <li><Link href="/contact"><a className={`${router.pathname === "/contact" ? styles.active : ''}`}>Contact</a></Link></li>

                    {

                        session && (
                            <li style={{ color: "#fff", textAlign: "center", cursor: "pointer", position: "relative" }} onClick={() => setToggleAccountMenu(prev => !prev)} >Account
                                <ul className={toggleAccountMenu ? styles.AccountDropdown : styles.AccountDropdownHide}>

                                    <li><Link href="/account/dashboard" onClick={handleCloseAccountMenu}><a className={`${router.pathname === "/account" ? styles.active : ''}`}>Dashboard</a></Link></li>
                                    <li><Link href="/account/pet-profile" onClick={handleCloseAccountMenu} ><a className={`${router.pathname === "/account" ? styles.active : ''}`}>Pet Profile</a></Link></li>
                                    <li><Link href="/account/create-pet-profile" onClick={handleCloseAccountMenu} ><a className={`${router.pathname === "/account" ? styles.active : ''}`}>Create Pet Profile</a></Link></li>

                                </ul>
                            </li>
                        )
                    }
                    {status === 'unauthenticated' && (
                        <button className={styles.auth__btn} type="button"
                            onClick={handleSignin}>
                            SignIn</button>
                    )}

                    {
                        status === 'authenticated' && (
                            <button className={styles.auth__btn} type="button"
                                onClick={handleSignout}>
                                Signout</button>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navigation