import React from 'react'
import AccountLayout from '../../Components/accountLayout'
import PetProfileForm from '../../Components/PetProfile'
import { getSession } from 'next-auth/react'

const PetProfile = () => {
    return (
        <>
            <AccountLayout>
                <PetProfileForm />
            </AccountLayout>
        </>
    )
}

export default PetProfile

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: '/'
            }
        }
    }
    return {
        props: {
            session
        }
    }
}