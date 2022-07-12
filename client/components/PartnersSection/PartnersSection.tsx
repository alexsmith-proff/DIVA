import React from 'react'
import { TypeColor } from '../../interfaces/enums';
import PartnersList from '../PartnersList/PartnersList';
import SectionTitle from '../SectionTitle/SectionTitle';

import s from './PartnersSection.module.scss'

type PartnersSectionProps = {}

const PartnersSection: React.FC<PartnersSectionProps> = () => {
    return (
        <div className={s.section}>
            <SectionTitle backgroundColor={TypeColor.white} noBorder={true}>
                наши партнеры
            </SectionTitle>
            <div className="container">
                <PartnersList />
            </div>

        </div>
    );
};

export default PartnersSection;