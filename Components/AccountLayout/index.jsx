import React from 'react'
import AccountSidebar from '../AccountSidebar'
import styles from './account-layout.module.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


const AccountLayout = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const loading = status === "loading";

  // if (typeof window !== "undefined" && loading) return null
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