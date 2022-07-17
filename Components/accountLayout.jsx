import React from 'react'
import AccountSidebar from './AccountSidebar'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const AccountLayout = ({ children }) => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <div className='account-layout__wrapper'>
        <AccountSidebar />
        {children}
      </div>
    </>
  )

}

export default AccountLayout