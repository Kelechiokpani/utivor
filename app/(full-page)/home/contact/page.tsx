"use client"
import React from "react";
import HomeLayout from "../../../../Blocks/components/Dashboard/DashboardRoot/HomeTopbar";
import ContactScreen from "../../../../Blocks/components/Dashboard/DashboardRoot/Contact";



const GeneralContact = ( ) =>{
    return(
        <HomeLayout showHomeTopBar={true}>
            <ContactScreen/>
        </HomeLayout>
    )
}



export default GeneralContact