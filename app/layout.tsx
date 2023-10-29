'use client';
import { LayoutProvider } from '../layout/context/layoutcontext';
// import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';
// import NextTopLoader from 'nextjs-toploader';
import StyledComponentsRegistry from "../Blocks/utils/lib/styledComponentsRegistry";
// import {DataProvider} from "../Blocks/utils/lib/hooks/DataContext";
// import { createContext } from 'react';


interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link id="theme-css" href={`/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
            </head>
            <body>
            {/*<NextTopLoader />*/}
            <StyledComponentsRegistry>
                    <LayoutProvider>{children}</LayoutProvider>
            </StyledComponentsRegistry>
            </body>
        </html>
    );
}
