import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkData } from './NavLinkData';
import Image from 'next/image'
import { AiFillCloseCircle } from 'react-icons/ai'


const Navigation = () => {
    const router = useRouter();

    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const [toggleAccountDropdown, setToggleAccountDropdown] = useState(false);

    return (
        <div className='navbar-style__wrapper'>
            <nav id="navigation" className="navbar">

                <Link href="/">
                    <a className="nav-logo__desktop">
                        <Image src='/images/logo/logo.png' alt="The Bubbly Pug" height={60} width={52.44} />
                    </a>
                </Link>

                <Link href="/">
                    <a className="nav-logo__mobile">
                        <Image className="nav-logo__mobile" src='/images/logo/logo.png' alt="The Bubbly Pug" height={60} width={52.44} />
                    </a>
                </Link>

                <button id="mobileMenuTrigger" className={` ${toggleMobileMenu ? 'menuToggle' : ''}`} aria-expanded={toggleMobileMenu ? 'true' : 'false'} aria-controls="navigationLinks"
                    title="Open and Close Navigation" onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </button>

                <ul className={toggleMobileMenu ? 'nav-list active-links' : 'nav-list'} id="navigationLinks">
                    {/* {
                        NavLinkData.map((link) => (
                            <li key={link?.id} >
                                <Link href={link?.url}>
                                    <a onClick={() => setToggleMobileMenu(false)} className={`${router.pathname === link?.url ? 'active' : ''}`}>
                                        {link?.title}
                                    </a>
                                </Link>
                            </li>
                        ))
                    } */}
                    <li><Link href="/"><a className={`${router.pathname === "/" ? 'active' : ''}`}>Home</a></Link></li>
                    <li><Link href="/about"><a className={`${router.pathname === "/about" ? 'active' : ''}`}>About</a></Link></li>
                    <li><Link href="/services"><a className={`${router.pathname === "/services" ? 'active' : ''}`}>Services</a></Link></li>
                    <li><Link href="/#meetAndGreet"><a className={`${router.pathname === "/#meetAndGreet" ? 'active' : ''}`}>Meet and Greet</a></Link></li>
                    <li className='account__dropdown' onClick={() => setToggleAccountDropdown((prev) => !prev)}>Account
                        <ul className={toggleAccountDropdown ? 'account-menu__dropdown show-account-menu' : 'account-menu__dropdown'}>
                            <AiFillCloseCircle className='account-dropdown__close-icon' />
                            <li><Link href="/account"><a >Account</a></Link></li>
                            <li><Link href="/pet-profile"><a >Pet Profile</a></Link></li>
                        </ul>
                    </li>
                    <li><Link href="/contact"><a className={`${router.pathname === "/contact" ? 'active' : ''}`}>Contact</a></Link></li>
                    <li><Link href="/login"><a className={`${router.pathname === "/login" ? 'active' : ''}`}>Login</a></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation