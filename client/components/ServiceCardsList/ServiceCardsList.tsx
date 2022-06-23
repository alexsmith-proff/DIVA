import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard';

import s from './ServiceCardsList.module.scss'

type ServiceCardsListProps = {}

const ServiceCardsList: React.FC<ServiceCardsListProps> = () => {
    return (
        <div className={s.list}>
            <ServiceCard path='img/service1.png' text="Продажа и покупка недвижимости" />
            <ServiceCard path='img/service2.png' text="Составление договора на оказание услуг" />
            <ServiceCard path='img/service3.png' text="Сопровождение сделки" />
            <ServiceCard path='img/service4.png' text="Индивидуальный подход к клиенту" />
            <ServiceCard path='img/service5.png' text="Профессиональная работа" />
            <ServiceCard path='img/service6.png' text="Бесплатные консультации" />
        </div>
    );
};

export default ServiceCardsList;