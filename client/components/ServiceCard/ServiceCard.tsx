import React from 'react'

import s from './ServiceCard.module.scss'

type ServiceCardProps = {
    path: string,
    text: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ path, text }) => {
    return (
        <div className={s.card}>
            <div className={s.cardImg}>
                <img src={path} alt="service-img" />
            </div>
            <h3 className={s.text}>{text}</h3>
        </div>
    );
};

export default ServiceCard;