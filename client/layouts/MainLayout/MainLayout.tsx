﻿import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;