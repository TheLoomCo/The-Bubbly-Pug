import React from 'react'
import AccountLayout from '../../Components/AccountLayout'
import PetProfileForm from '../../Components/PetProfile'
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';


const PetProfile = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const loading = status === "loading";
    if (session) {
        return (
            <>
                <AccountLayout>
                    <PetProfileForm />
                </AccountLayout>
            </>
        )
    }
}

export default PetProfile

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