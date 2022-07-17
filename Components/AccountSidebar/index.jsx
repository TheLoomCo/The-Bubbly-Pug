import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react';


const AccountSidebar = () => {
    const { data: session } = useSession()

    return (
        <aside className='account-sidebar__wrapper'>
            <h2 className='account-sidebar__header'>Welcome Back! <br /> {session.user.name}</h2>
            <ul className='account-sidebar__nav-list'>
                <li><Link href="/account/profile"><a>Your Profile</a></Link></li>
                <li><Link href="/account/appointments"><a>Appointments</a></Link></li>
                <li><Link href="/account/pet-profile"><a>Pet Profile</a></Link></li>
            </ul>
        </aside>
    )
}

export default AccountSidebar