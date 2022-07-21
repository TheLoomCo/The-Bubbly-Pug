import React from 'react'
import { AccountLayout, PetProfileComp } from '../../Components/Account'
import styles from '../../Components/Account/PetProfile/pet-profile.module.css'

const PetProfile = () => {
    return (
        <AccountLayout>
            <main className={styles.Wrapper}>

                <h1>Pet Profile</h1>
            </main>
        </AccountLayout>
    )
}

export default PetProfile