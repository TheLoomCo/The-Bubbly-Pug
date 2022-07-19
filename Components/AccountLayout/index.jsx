import React from 'react'
import AccountSidebar from '../AccountSidebar'
import styles from './account-layout.module.css';

const AccountLayout = ({ children }) => {

  return (
    <>
      <div className={styles.account_layout__wrapper}>
        <AccountSidebar />
        {children}
      </div>
    </>
  )
}

export default AccountLayout