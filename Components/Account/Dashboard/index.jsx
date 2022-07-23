import React, { useState } from 'react'
import styles from './dashboard.module.css'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const DashboardComp = () => {
    const { data: session } = useSession();
    const [dropdown, setDropdown] = useState(false);
    return (
        <main className={styles.account_home__wrapper}>
            <header className={styles.account_home__profile_header}>
                <img src={session?.user.image} height={100} width={100} objectFit="cover" style={{ borderRadius: "50%" }} />
                <div className={styles.account_home__profile_info}>
                    <h1>{session?.user?.name}</h1>
                    <p>Bubbly Friend since 06/12/2018</p>
                </div>
            </header>

            <div className={styles.PetProfileList}>
                <h2>Your Pet Profiles</h2>
                <Link href="/account/pet-profile">Loki</Link>
                <Link href="/account/pet-profile">Tidus</Link>
                <Link href="/account/pet-profile">Luna</Link>
                <Link href="/account/pet-profile">Charlie</Link>
            </div>

            <hr style={{ width: "100%", marginTop: "30px", opacity: '0.2' }} />

            <div className={styles.account_history__table}>
                <h2>History</h2>

                <div className={styles.GridWrapper}>

                    <p className={styles.account_history__header}>Date</p>
                    <p className={styles.account_history__header}>Pet Name</p>


                    {/* The Grid Content div is what we would place inside of a .map() */}
                    <div className={styles.GridContent}>
                        <div className={styles.account_history__past_appointment}>
                            <p>07/10/2022</p>
                        </div>
                        <div className={styles.PetNamesContainer}>
                            <Link href="/account/pet-profile">Loki</Link>
                            <Link href="/account/pet-profile">Luna</Link>
                        </div>
                    </div>

                    <div className={styles.GridContent}>
                        <div className={styles.account_history__past_appointment}>
                            <p>09/10/2022</p>
                        </div>
                        <div className={styles.PetNamesContainer}>
                            <Link href="/account/pet-profile">Loki</Link>
                        </div>
                    </div>

                    <div className={styles.GridContent}>
                        <div className={styles.account_history__past_appointment}>
                            <p>10/10/2022</p>
                        </div>
                        <div className={styles.PetNamesContainer}>
                            <Link href="/account/pet-profile">Loki</Link>
                            <Link href="/account/pet-profile">Tidus</Link>
                        </div>
                    </div>

                    <div className={styles.GridContent}>
                        <div className={styles.account_history__past_appointment}>
                            <p>11/10/2022</p>
                        </div>
                        <div className={styles.PetNamesContainer}>
                            <Link href="/account/pet-profile">Loki</Link>
                            <Link href="/account/pet-profile">Tidus</Link>
                            <Link href="/account/pet-profile">Luna</Link>
                            <Link href="/account/pet-profile">Charlie</Link>
                        </div>
                    </div>
                </div>

            </div>


        </main>
    )
}

export default DashboardComp