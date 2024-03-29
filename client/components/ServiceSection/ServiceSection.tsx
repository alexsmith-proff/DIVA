import React from 'react'
import { TypeColor } from '../../interfaces/enums';
import SectionTitle from '../SectionTitle/SectionTitle';
import ServiceCardsList from '../ServiceCardsList/ServiceCardsList';

import s from './ServiceSection.module.scss'

type ServiceSectionProps = {}

const ServiceSection: React.FC<ServiceSectionProps> = () => {
    return (
        <section className={s.section}>
            <SectionTitle backgroundColor={TypeColor.white}>
                услуги
            </SectionTitle>
            <div className="container">
                <ServiceCardsList />
            </div>
        </section>
    );
};

export default ServiceSection;