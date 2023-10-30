/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { AppTopbarRef } from '../types/types';
import { LayoutContext } from './context/layoutcontext';
import Logo from "../public/image/logo-dark.svg"
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
                <Image src={Logo} alt="Logo" width={200}/>
                {/*<img src={`/layout/images/logo-${layoutConfig.colorScheme !== 'light' ? 'white' : 'dark'}.svg`} width="47.22px" height={'35px'} alt="logo" />*/}
                {/*<span>SAKAI</span>*/}
            </Link>

            <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button" onClick={onMenuToggle}>
                <i className="pi pi-bars" />
            </button>

            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                <button type="button" className="p-link layout-topbar-button   lg:ml-6 font-bold ">
                    <a href='/home' className='text-orange-600 text-sm'>Dashboard</a>
                    {/*<span>Dashboard</span>*/}
                </button>

                <button type="button" className="p-link layout-topbar-button   lg:ml-6 font-bold">
                    <a href='/home/sms' className='text-orange-600 text-sm'>sms</a>
                    {/*<span>Contact</span>*/}
                </button>
                <button type="button" className="p-link layout-topbar-button   lg:ml-6 font-bold">
                    <a href='/home/questionnaire' className='text-orange-600 text-sm'>Questionnaire</a>
                    {/*<span>Referral</span>*/}
                </button>
                <button type="button" className="p-link layout-topbar-button   lg:ml-6 font-bold">
                    <a href='/home/voice' className='text-orange-600 text-sm'>voice</a>
                    {/*<span>Contact</span>*/}
                </button>

                <button type="button" className="p-link layout-topbar-button   lg:ml-6 font-bold">
                    <a href='/home/interactiveSms' className='text-orange-600 text-sm'>Interactive</a>
                    {/*<span>Wallet</span>*/}
                </button>

                <button type="button" className="p-link layout-topbar-button   lg:ml-6 font-bold">
                    <a href='/home' className='text-orange-600 text-sm'>Logout</a>
                    {/*<span>Logout</span>*/}
                </button>
            </div>
        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
