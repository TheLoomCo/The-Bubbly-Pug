import { AccountLayout, DashboardComp } from '../../Components/Account';

const Account = () => {

    // If session exists, display content
    return (
        <>
            <AccountLayout>
                <DashboardComp />
            </AccountLayout>
        </>
    )
}

export default Account