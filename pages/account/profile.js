import React from 'react'
import HumanProfileComp from '../../Components/Account/HumanProfile'
import AccountLayout from '../../Components/AccountLayout'
import { getSession } from 'next-auth/react'

const HumanProfile = () => {
    return (
        <>
            <AccountLayout>
                <HumanProfileComp />
            </AccountLayout>
        </>
    )
}

export default HumanProfile

// export const getServerSideProps = async (context) => {
//     const session = await getSession(context);
//     if (!session) {
//         return {
//             redirect: {
//                 destination: '/'
//             }
//         }
//     }
//     return {
//         props: {
//             session
//         }
//     }
// }