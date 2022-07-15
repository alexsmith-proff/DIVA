import Head from 'next/head';
import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>"ДИВА Недвижимость" - агентство недвижимости в Пензе</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta name="keywords" content="Агентство недвижимости пенза, аренда недвижимости пенза, продажа квартир в пензе договор с агентством недвижимости, дива недвижимость" />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;