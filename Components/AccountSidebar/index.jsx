import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import styles from './account-sidebar.module.css';


const AccountSidebar = () => {
    const { data: session } = useSession()

    return (
        <aside className={styles.account_sidebar__wrapper}>
            <h2 className={styles.account_sidebar__header}>Welcome Back! <br /> {session.user.name}</h2>
            <ul className={styles.account_sidebar__nav_list}>
                <li><Link href="/account/dashboard"><a>Dashboard</a></Link></li>
                <li><Link href="/account/appointments"><a>View Pet Profile</a></Link></li>
                <li><Link href="/account/create-pet-profile"><a>Create a new Pawfile</a></Link></li>
            </ul>
        </aside>
    )
}

export default AccountSidebar