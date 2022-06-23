import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceCardsList from '../ServiceCardsList/ServiceCardsList';

import s from './ServiceSection.module.scss'

type ServiceSectionProps = {}

const ServiceSection: React.FC<ServiceSectionProps> = () => {
    return (
        <div>
            <SectionTitle>
                наши партнеры
            </SectionTitle>
            <div className="container">
                <ServiceCardsList />
            </div>


        </div>
    );
};

export default ServiceSection;