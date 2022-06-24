import React from 'react'
import Card from '../Card/Card';
import SectionTitle from '../SectionTitle/SectionTitle';

import s from './CardsList.module.scss'

type CardsListProps = {}

const CardsList: React.FC<CardsListProps> = () => {
    return (
        <div className={s.list}>
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default CardsList;