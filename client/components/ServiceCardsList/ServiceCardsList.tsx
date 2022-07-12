import React from 'react'
import ServiceCard from '../ServiceCard/ServiceCard';

import s from './ServiceCardsList.module.scss'

type ServiceCardsListProps = {}

const ServiceCardsList: React.FC<ServiceCardsListProps> = () => {
    return (
        <div className={s.list}>
            <ServiceCard path='/img/service1.png' text="Продажа и покупка недвижимости" width="138" height="123" />
            <ServiceCard path='/img/service2.png' text="Составление договора на оказание услуг" width="138" height="139" />
            <ServiceCard path='/img/service3.png' text="Сопровождение сделки" width="138" height="87" />
            <ServiceCard path='/img/service4.png' text="Индивидуальный подход к клиенту" width="90" height="139" />
            <ServiceCard path='/img/service5.png' text="Профессиональная работа" width="138" height="100" />
            <ServiceCard path='/img/service6.png' text="Бесплатные консультации" width="138" height="122" />
        </div>
    );
};

export default ServiceCardsList;