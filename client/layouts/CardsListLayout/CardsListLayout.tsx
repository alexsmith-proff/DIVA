import React from 'react';

import s from './CardsListLayout.module.scss'

interface CardsListLayoutProps{
    children: React.ReactNode
}

const CardsListLayout: React.FC<CardsListLayoutProps> = ({ children }) => {      
    return (
        <>            
            {children}

        </>
    );
};

export default CardsListLayout;