import React from 'react'
import Partner from '../Partner/Partner';

import s from './PartnersList.module.scss'

type PartnersListProps = {}

const PartnersList: React.FC<PartnersListProps> = () => {
    return (
        <div className={s.list}>
            <Partner path="/img/sberbank.png" width="141" height="40" />
            <Partner path="/img/vtb.png" width="141" height="51"  />
            <Partner path="/img/tinkoff.png" width="141" height="102"  />
            <Partner path="/img/pochtabank.png" width="141" height="69"  />
            <Partner path="/img/gazprombank.png" width="141" height="33"  />
            <Partner path="/img/promsvyazbank.png" width="141" height="101`" />
            <Partner path="/img/sovkombank.png" width="141" height="29" />
            <Partner path="/img/rosselhozbank.png" width="141" height="98"  />
            <Partner path="/img/investtorgbank.png" width="141" height="94"  />

        </div>
    );
};

export default PartnersList;