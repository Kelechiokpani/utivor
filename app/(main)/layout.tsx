'use client'
import { Metadata } from 'next';
import React from 'react';
import Footer from "../../Blocks/components/Website/Navigation/Footer";
import NavigationMenu from "../../Blocks/components/Website/Navigation/NavigationMenu";
import StyledComponentsRegistry from "../../Blocks/utils/lib/styledComponentsRegistry";


interface SimpleLayoutProps {
    children: React.ReactNode;
}

 const metadata: Metadata = {
    title: 'KreativeRock Digitals',
    description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.'
};


const SimpleLayout = ({ children, showNavBar = false, showFooter = false, }: any) => {
    return (
            <html>
            <head>
                <link id="theme-css" href={`/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
            </head>
            {/*<StyledComponentsRegistry>*/}
                    <React.Fragment>
                        {showNavBar && <NavigationMenu />}
                        {children}
                        {showFooter && <Footer />}
                    </React.Fragment>
            {/*</StyledComponentsRegistry>*/}
            </html>
    );
}

export default SimpleLayout;
