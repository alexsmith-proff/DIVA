import Head from 'next/head';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import s from './MainLayout.module.scss'

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>ДИВА Недвижимость</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;