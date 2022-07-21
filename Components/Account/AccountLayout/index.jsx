import React from 'react'
import { AccountSidebar } from '../index';
import styles from './account-layout.module.css';

const AccountLayout = ({ children }) => {

  return (
    <>
      <div className={styles.Wrapper}>
        <AccountSidebar />
        {children}
      </div>
    </>
  )
}

export default AccountLayout