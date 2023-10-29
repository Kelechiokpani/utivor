'use client';
import { LayoutProvider } from '../layout/context/layoutcontext';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';

// import NextTopLoader from 'nextjs-toploader';
import StyledComponentsRegistry from "../Blocks/utils/lib/styledComponentsRegistry";
import React from "react";
import NavigationMenu from "../Blocks/components/Website/Navigation/NavigationMenu";
import Footer from "../Blocks/components/Website/Navigation/Footer";
// import {DataProvider} from "../Blocks/utils/lib/hooks/DataContext";
// import { createContext } from 'react';


interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html suppressHydrationWarning>
            <head>
                <link id="theme-css" href={`/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
            </head>
            <body>
                <StyledComponentsRegistry>
                    <LayoutProvider>{children}</LayoutProvider>
                </StyledComponentsRegistry>
            </body>

        </html>
    );
}

{/*<body>*/}
{/*<React.Fragment>*/}
{/*    <StyledComponentsRegistry>*/}
{/*        <LayoutProvider>{children}</LayoutProvider>*/}
{/*    </StyledComponentsRegistry>*/}
{/*</React.Fragment>*/}
{/*</body>*/}