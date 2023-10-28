"use client"
import React from "react";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import AppTopbar from "../AppTopbar";

interface SimpleLayoutProps {
    children?: React.ReactNode;
    showHomeTopBar?: boolean;
}

const HomeLayout: React.FC<SimpleLayoutProps> = ({ children, showHomeTopBar = false }: any) => {
    return (
        <React.Fragment>
            {showHomeTopBar && <AppTopbar />}
            {children}
        </React.Fragment>
    );
};

export default HomeLayout;