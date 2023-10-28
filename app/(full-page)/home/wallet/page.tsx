"use client"
import React from "react";
import HomeLayout from "../../../../Blocks/components/Dashboard/DashboardRoot/HomeTopbar";
import WalletScreen from "../../../../Blocks/components/Dashboard/DashboardRoot/Wallet";



const FundWallet = ( ) =>{
    return(
        <HomeLayout showHomeTopBar={true}>
            <WalletScreen/>
        </HomeLayout>
    )
}



export default FundWallet