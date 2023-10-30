'use client'
import React, {useState} from "react";
import HomeLayout from "../../../../Blocks/components/Dashboard/DashboardRoot/HomeTopbar";
import InProgress from "../../../../Blocks/components/Inprogress";



const ProgressPage = ( )=> {

    return (
        <HomeLayout showHomeTopBar={true}>
            <InProgress/>
        </HomeLayout>
    )
}


export default ProgressPage