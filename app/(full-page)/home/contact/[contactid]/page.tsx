"use client"
import React from "react";
import HomeLayout from "../../../../../Blocks/components/Dashboard/DashboardRoot/HomeTopbar";
import ContactListing from "../../../../../Blocks/components/Dashboard/DashboardRoot/DashboardRootSub/ContactList";



const GeneralContact = ( ) =>{
    return(
        <HomeLayout showHomeTopBar={true}>
            <ContactListing/>
        </HomeLayout>
    )
}



export default GeneralContact