/* eslint-disable @next/next/no-img-element */

import React, {useContext, useEffect, useState} from "react";
import AppMenuitem from "./AppMenuitem";
import { LayoutContext } from "./context/layoutcontext";
import { MenuProvider } from "./context/menucontext";
import { AppMenuItem } from "../types/types";
import {useRouter, usePathname, } from "next/navigation";
import {MdAccountBalance} from "react-icons/md";

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

let A =  <MdAccountBalance/>
const getMenuModel = (rootRoute:any) => {
    const menuModels:MenuModels = {
        sms: [
            {
                label: "mobile texting",
                items: [
                    { label: "Sender Mask", icon:"pi pi-telegram", to: "/home/sms" , id:1},
                    { label: "Bulk Message", icon: "pi pi-whatsapp", to: "/home/sms/sendsms", id:12 },
                    { label: "Sending record", icon: "pi pi-volume-down", to: "/home/sms/report", id:15 },
                ],
            },
        ],
        interactiveSms: [
            {
                label: "interactive sms",
                items: [
                    { label: "Sender Mask", icon:"pi pi-telegram", to: "/home/interactiveSms" , id:1},
                    { label: "chat History", icon: "pi pi pi-volume-down", to: "/home/interactiveSms/history" , id:2},
                    { label: "Sending record", icon: "pi pi-volume-down", to: "/home/interactiveSms/report", id:3 },
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
        questionnaire:[
            {
                label: "Questionnaire",
                items: [
                    { label: "Sender Mask", icon:"pi pi-telegram", to: "/home/questionnaire" , id:1},
                    { label: "Questionnaire", icon: "pi pi-send", to: "/home/questionnaire" , id:2,
                        items: [
                            { label: "create New", icon: "pi pi-comments", to: "/home/questionnaire/new" , id:1},
                            { label: "Send", icon: "pi pi-folder-open", to: "/home/questionnaire/send" , id:3},
                        ],
                    },
                    { label: "Sending record", icon: "pi pi-volume-down", to: "/home/questionnaire/report", id:5 },
                ],
            },
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

