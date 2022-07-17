import React, { useEffect } from 'react'
import AccountHome from '../../Components/Account'
import AccountLayout from '../../Components/accountLayout'
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const Account = () => {
    const router = useRouter();
    const { data: session } = useSession({ required: true });

    useEffect(() => {
        if (!session) {
            router.push('/');
        }
    }, [])
    return (
        <>
            {
                session && (
                    <AccountLayout>
                        <AccountHome />
                    </AccountLayout>
                )
            }
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