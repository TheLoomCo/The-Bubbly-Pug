import React from 'react'
import AccountSidebar from './AccountSidebar'

const AccountLayout = ({ children }) => {
  return (
    <div className='account-layout__wrapper'>
      <AccountSidebar />
      {children}
    </div>
  )
}

export default AccountLayout