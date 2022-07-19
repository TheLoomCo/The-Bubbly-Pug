import React from 'react'
import AppointmentsComp from '../../Components/Account/Appointments'
import AccountLayout from '../../Components/AccountLayout'
import { getSession } from 'next-auth/react'

const Appointments = () => {
    return (
        <AccountLayout>
            <AppointmentsComp />
        </AccountLayout>
    )
}

export default Appointments

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