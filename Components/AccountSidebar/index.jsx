import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

import { useSession, signOut, signIn } from 'next-auth/react';


const AccountSidebar = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleAuth = () => {
        if (session) {
            signOut();
            router.push('/')
        } else {
            signIn();
        }
    }
    return (
        <aside className='account-sidebar__wrapper'>
            <h2>Welcome Back! <br /> [Insert Name]</h2>
            <ul className='account-sidebar__nav-list'>
                <li><Link href="/account/profile"><a>Your Profile</a></Link></li>
                <li><Link href="/account/appointments"><a>Appointments</a></Link></li>
                <li><Link href="/account/pet-profile"><a>Pet Profile</a></Link></li>
            </ul>

            <button type="button" onClick={handleAuth}>{session ? 'Sign Out' : 'Sign In'}</button>
        </aside>
    )
}

export default AccountSidebar