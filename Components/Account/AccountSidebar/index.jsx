import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import styles from './sidebar.module.css';


const AccountSidebar = () => {
    const { data: session } = useSession();

    return (
        <aside className={styles.Aside}>
            <h2 className={styles.Header}>Welcome Back! <br /> {session.user.name}</h2>
            <ul className={styles.NavList}>
                <li><Link href="/account/dashboard"><a>Dashboard</a></Link></li>
                <li><Link href="/account/pet-profile"><a>View Pet Profile</a></Link></li>
                <li><Link href="/account/create-pet-profile"><a>Create a new Pawfile</a></Link></li>
            </ul>
        </aside>
    )
}

export default AccountSidebar