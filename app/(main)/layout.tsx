import { Metadata } from 'next';
import React from 'react';
import Footer from "../../Blocks/components/Website/Navigation/Footer";
import NavigationMenu from "../../Blocks/components/Website/Navigation/NavigationMenu";
import StyledComponentsRegistry from "../../Blocks/utils/lib/styledComponentsRegistry";
import {DataProvider} from "../../Blocks/utils/lib/hooks/DataContext";

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
                    <React.Fragment>
                    {showNavBar && <NavigationMenu />}
                    {children}
                    {showFooter && <Footer />}
                    </React.Fragment>
            </html>
    );
}

export default SimpleLayout;
