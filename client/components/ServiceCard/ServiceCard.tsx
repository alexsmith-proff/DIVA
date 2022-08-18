import Image from 'next/image';
import React from 'react'
import { Grad, toBase64 } from '../../services/image';

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
                <Image
                alt="service-img"
                src={path}
                width={width}
                height={height}
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(Grad(600, 700))}`}
            />
            </div>
            <h2 className={s.text}>{text}</h2>
        </div>
    );
};

export default ServiceCard;