import Link from 'next/link';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { AppTopbarRef } from '../../../types/types';
import {LayoutContext} from "../../../layout/context/layoutcontext";
import Logo from "../../../public/image/logo-dark.svg"
import Image from "next/image";


const AppTopbar = forwardRef<AppTopbarRef>((props, ref) => {
    const { layoutConfig, layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));


    return (
        <div className="layout-topbar">
            <Link href="/home" className="layout-topbar-logo">
                <Image src={Logo}  alt="logo" />
            </Link>



            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>

                <button type="button" className="p-link layout-topbar-button   lg:ml-6 font-bold">
                    <a href='/home' className='text-900 text-sm'>Dashboard</a>
                    {/*<span>Dashboard</span>*/}
                </button>

                <button type="button" className="p-link layout-topbar-button   lg:ml-6 font-bold">
                    <a href='/home/contact' className='text-900 text-sm'>Contact</a>
                    {/*<span>Contact</span>*/}
                </button>

                <button type="button" className="p-link layout-topbar-button   lg:ml-6 font-bold">
                    <a href='/home/wallet' className='text-900 text-sm'>Wallet</a>
                    {/*<span>Wallet</span>*/}
                </button>

                <button type="button" className="p-link layout-topbar-button   lg:ml-6 font-bold">
                     <a href='/home/referral' className='text-900 text-sm'>Referral</a>
                    {/*<span>Referral</span>*/}
                </button>

                <button type="button" className="p-link layout-topbar-button   lg:ml-6 font-bold">
                    <a href='/' className='text-900 text-sm'>Logout</a>
                    {/*<span>Logout</span>*/}
                </button>


            </div>
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
