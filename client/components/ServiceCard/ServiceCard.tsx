import Image from 'next/image';
import React from 'react'

import s from './ServiceCard.module.scss'

type ServiceCardProps = {
    path: string,
    text: string,
    width: string,
    height: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ path, text, width, height }) => {
    return (
        <div className={s.card}>
            <div className={s.cardImg}>
                <Image src={path} alt="service-img" width={width} height={height} />
            </div>
            <h3 className={s.text}>{text}</h3>
        </div>
    );
};

export default ServiceCard;