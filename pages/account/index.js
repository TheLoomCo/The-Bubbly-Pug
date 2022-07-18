import React, { useEffect } from 'react'
import AccountHome from '../../Components/Account'
import AccountLayout from '../../Components/AccountLayout'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react';

const Account = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const loading = status === "loading";



    // When rendering client side don't display anything until loading is complete
    // if (typeof window !== "undefined" && loading) return null

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