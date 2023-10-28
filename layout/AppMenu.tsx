/* eslint-disable @next/next/no-img-element */

import React, {useContext, useEffect, useState} from "react";
import AppMenuitem from "./AppMenuitem";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";
import { AppMenuItem } from "../types/types";
import {useRouter, usePathname, } from "next/navigation";

type SubMenuItem = {
    label: string;
    icon: string;
    to: string;
    id: number;
    separator?: boolean;
};

type MenuItemSub = {
    label?: string;
    separator?: boolean;
    items: SubMenuItem[];
};


type MenuItem = {
    label: string;
    separator?: boolean;
    items: (SubMenuItem | MenuItemSub)[];
};

type MenuModels = {
    [key: string]: MenuItem[];
};

const getSelectedRootRoute = (path:any) => {
    const match = path.match(/^\/home\/([a-zA-Z]+)/);
    return match ? match[1] : "sms";
};

const getMenuModel = (rootRoute:any) => {
    const menuModels:MenuModels = {
        sms: [
            {
                label: "mobile texting",
                items: [
                    { label: "SMS APP", icon: "pi pi-fw pi-home", to: "/home/sms" , id:1},
                    { label: "Bulk Message", icon: "pi pi-fw pi-home", to: "/home/sms/sendsms", id:12 },
                    { label: "Sending record", icon: "pi pi-fw pi-home", to: "/home/sms/smsreport", id:15 },
                    { label: "Task Status", icon: "pi pi-fw pi-home", to: "/home/sms/sendsms", id:13 },
                    { label: "Task Queue", icon: "pi pi-fw pi-home", to: "/home/sms/sakai", id:14 },
                    { label: "Analytics", icon: "pi pi-fw pi-home", to: "/home/sms/sakai", id:16 },
                ],
            },
        ],
        interactiveSms: [
            {
                label: "interactive Sms",
                items: [
                    { label: "chat History", icon: "pi pi-fw pi-home", to: "/home/interactiveSms" , id:1},
                    { label: "Questionnaire", icon: "pi pi-fw pi-home", to: "/home/interactiveSms/sakai" , id:2,
                        items: [
                            { label: "create New", icon: "pi pi-fw pi-home", to: "/home/interactiveSms" , id:1},
                            { label: "Draft", icon: "pi pi-fw pi-home", to: "/home/interactiveSms" , id:1},
                        ],
                    },
                ],
            },
        ],
        voice:[
            {
                label: "Voice",
                items: [
                    { label: "Voice", icon: "pi pi-fw pi-home", to: "/home/Voice" , id:1},
                    { label: "Voice History", icon: "pi pi-fw pi-home", to: "/home/Voice/sakai" , id:2},
                ],
            },
        ],
        CustomQuestionaire:[
            {
                label: "Voice",
                items: [
                    { label: "Voice", icon: "pi pi-fw pi-home", to: "/home/Voice" , id:1},
                    { label: "Voice History", icon: "pi pi-fw pi-home", to: "/home/Voice/sakai" , id:2},
                ],
            }
        ]
    };

    return menuModels[rootRoute] || [];
};


const AppMenu = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const router = useRouter();

    const currentPath = usePathname();

    const selectedRootRoute = getSelectedRootRoute(currentPath);
    const menuModel = getMenuModel(selectedRootRoute);
    // // const menuModel = menuModels[currentPath] || menuModels.sms;
    //
    //
    // const pathArray = currentPath.split('/home').filter((item: string) => item);
    // const key = pathArray.join('/home');
    // const menuModel = menuModels[key] || [];


    return (
        <MenuProvider>
            <ul className="layout-menu">
                {menuModel?.map((item:any, i:any) => {
                    return !item?.separator ? (
                        <AppMenuitem item={item} root={true} index={i} key={i} />
                    ) : (
                        <li className="menu-separator" key={`separator-${i}`}></li>
                    );
                })}
            </ul>
        </MenuProvider>
    );
};



export default AppMenu;

