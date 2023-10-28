import { Metadata } from 'next';
import React from 'react';
import Footer from "../../Blocks/components/Website/Navigation/Footer";
import NavigationMenu from "../../Blocks/components/Website/Navigation/NavigationMenu";

interface SimpleLayoutProps {
    children: React.ReactNode;
}

 const metadata: Metadata = {
    title: 'KreativeRock Digitals',
    description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.'
};


const SimpleLayout = ({ children, showNavBar = false, showFooter = false, }: any) => {
    return (
        <React.Fragment>
            {showNavBar && <NavigationMenu />}
            {children}
            {showFooter && <Footer />}
        </React.Fragment>
    );
}

export default SimpleLayout;
