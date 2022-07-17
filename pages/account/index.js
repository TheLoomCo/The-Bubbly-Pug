import React from 'react'
import AccountHome from '../../Components/Account'
import AccountLayout from '../../Components/accountLayout'
import { getSession } from 'next-auth/react'

const Account = () => {
    return (
        <>
            <AccountLayout>
                <AccountHome />
            </AccountLayout>
        </>
    )
}

export default Account

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