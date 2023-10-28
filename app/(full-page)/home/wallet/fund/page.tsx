"use client"
import HomeLayout from "../../../../../Blocks/components/Dashboard/DashboardRoot/HomeTopbar";
import FundWallet from "../../../../../Blocks/components/Dashboard/DashboardRoot/DashboardRootSub/FundWallet";

const WalletFunding = ( )=> {
    return (
        <HomeLayout showHomeTopBar={true}>
            <FundWallet/>
        </HomeLayout>
    )
}

export default WalletFunding