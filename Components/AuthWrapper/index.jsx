import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';

const AuthWrapper = ({ children }) => {
    const router = useRouter()

    const { status } = useSession();

    if (status === 'loading') return null;

    if (router.pathname.includes('/account') && status === 'unauthenticated') {
        router.push('/')
        return null;
    }

    return (
        <>
            {children}
        </>
    )
}

export default AuthWrapper