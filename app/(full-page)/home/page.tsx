'use client'
import {Button} from "primereact/button";
import React, {useState} from "react";
import styled from "styled-components";
import HomeLayout from "../../../Blocks/components/Dashboard/DashboardRoot/HomeTopbar";
import Dashboard from "../../../Blocks/components/Dashboard/DashboardRoot/Dashboard";



const RootDashoard = ( )=> {

    const [activeTabAction, setActiveTabAction] = useState(0);
    const handleTabClick = (index: number) => {
        setActiveTabAction(index);
    };

    const tabs = [
        "Dashboard",
        "Contact",
        "Wallet",
        "Referral",
        "Logout"
    ];

    return (
        <HomeLayout showHomeTopBar={true}>
            <Dashboard/>
        </HomeLayout>
    )
}





type TabButtonProps = {
    active: boolean;
};


const TabContent = styled.div<TabButtonProps>`
  display: ${props => (props.active ? 'block' : 'none')};
`;


const TabButton = styled(Button)<TabButtonProps>`
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.5px #0b0c0e;
    background:  ${props => (props?.active ? '#ffffff' : 'transparent')};
    color: #000000;
`;




const Main_Style = styled.div`
  margin-top: 8rem;
  //background:greenyellow;
  .tabs{
    margin:3rem;
    border-radius: 12px;
    background: #eae9ea;
  }
  
  .wrap {
    border-radius: 12px;
    background: #eae9ea;
  
  }

  .p-button {
    box-shadow: none;
    border: none;
  }

  .p-button:focus {
    box-shadow: none;
  }


  .p-button:enabled:hover {
    background: transparent;
    color: #000000;
    border-color: #000000;
  }


  .p-button:enabled:active {
    //background: #ffffff;
    //color: #000000;
    //border-color: #000000;

  }

`

export default RootDashoard