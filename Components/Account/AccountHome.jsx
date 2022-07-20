import React from 'react'
import styles from './account-home.module.css'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const AccountHome = () => {
    const { data: session } = useSession();
    console.log(session);
    return (
        <main className={styles.account_home__wrapper}>
            <header className={styles.account_home__profile_header}>
                <img src={session?.user.image} height={100} width={100} objectFit="cover" style={{ borderRadius: "50%" }} />
                <div className={styles.account_home__profile_info}>
                    <h1>{session?.user?.name}</h1>
                    <p>Bubbly Friend since 06/12/2018</p>
                </div>
            </header>

            <div className={styles.account_history__table}>
                <h2>History</h2>
                {/* <div className={styles.column__wrapper}> */}
                <div className={styles.account_history__column_one}>
                    <p className={styles.account_history__header}>Date</p>
                    <div className={styles.account_history__past_appointment}>
                        <p>07/10/1993</p>
                    </div>
                    <div className={styles.account_history__past_appointment}>
                        <p>07/10/2018</p>
                    </div>
                </div>
                <div className={styles.account_history__column_two}>
                    <p className={styles.account_history__header}>Pet Name</p>
                    <div className={styles.account_history__pet_name}>
                        <p>Loki</p>
                        <p>Tidus</p>
                    </div>
                    <div className={styles.account_history__pet_name}>
                        <p>Loki</p>
                        <p>Tidus</p>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </main>
    )
}

export default AccountHome