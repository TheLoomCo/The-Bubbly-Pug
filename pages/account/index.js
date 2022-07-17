import React from 'react'
import AccountHome from '../../Components/Account'
import AccountLayout from '../../Components/accountLayout'
import { getSession, useSession } from 'next-auth/react'

const Account = () => {
    const { data: session } = useSession();
    console.log(session);

    return (
        <>
            <AccountLayout>
                {session && <AccountHome />}
            </AccountLayout>
        </>
    )
}

export default Account

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