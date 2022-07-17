import React from 'react'
import AccountSidebar from './AccountSidebar'
import { useSession } from 'next-auth/react'

const AccountLayout = ({ children }) => {
  const { data: session } = useSession({ required: true });
  if (session) {
    return (
      <div className='account-layout__wrapper'>
        <AccountSidebar />
        {children}
      </div>
    )
  }
}

export default AccountLayout