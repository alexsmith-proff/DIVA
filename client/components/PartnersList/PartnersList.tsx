import React from 'react'
import Partner from '../Partner/Partner';

import s from './PartnersList.module.scss'

type PartnersListProps = {}

const PartnersList: React.FC<PartnersListProps> = () => {
    return (
        <div className={s.list}>
            <Partner path="img/sberbank.png" />
            <Partner path="img/vtb.png" />
            <Partner path="img/tinkoff.png" />
            <Partner path="img/pochtabank.png" />
            <Partner path="img/gazprombank.png" />
            <Partner path="img/promsvyazbank.png" />
            <Partner path="img/sovkombank.png" />
            <Partner path="img/rosselhozbank.png" />
            <Partner path="img/investtorgbank.png" />

        </div>
    );
};

export default PartnersList;