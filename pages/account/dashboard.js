import React, { useEffect } from 'react'
import AccountHome from '../../Components/Account'
import AccountLayout from '../../Components/AccountLayout'
import { useRouter } from 'next/router'
import { getSession, useSession } from 'next-auth/react';

const Account = () => {
    const { data: session } = useSession();



    // If session exists, display content
    if (session) {
        return (
            <>
                <AccountLayout>
                    <AccountHome />
                </AccountLayout>


            </>
        )
    }

}

export default Account

// export const getServerSideProps = async (context) => {
//     const session = await getSession(context);
//     console.log(session);
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