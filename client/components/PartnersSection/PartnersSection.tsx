import React from 'react'
import PartnersList from '../PartnersList/PartnersList';
import SectionTitle from '../SectionTitle/SectionTitle';

import s from './PartnersSection.module.scss'

type PartnersSectionProps = {}

const PartnersSection: React.FC<PartnersSectionProps> = () => {
    return (
        <div className={s.section}>
            <SectionTitle noBorder={true}>
                наши партнеры
            </SectionTitle>
            <div className="container">
                <PartnersList />
            </div>

        </div>
    );
};

export default PartnersSection;