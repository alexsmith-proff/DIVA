import React from 'react'
import TopNav from '../TopNav/TopNav';

import s from './Header.module.scss'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header>
            <TopNav />            
        </header>
    );
};

export default Header;